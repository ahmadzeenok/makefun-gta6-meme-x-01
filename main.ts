// gta6-meme-x-01 entry: hands the X post named in POST.json to the grader.
// The post itself is the entry — the house reads it from X (its first picture
// and its text) and an AI judge ranks it against the other posts. All this
// program has to do is copy POST.json into the output directory, after
// checking it names a real X post URL.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const postPath = join(botDir, 'POST.json');
const raw = readFileSync(postPath, 'utf8');
const post = JSON.parse(raw) as { url?: unknown };

if (
  typeof post.url !== 'string' ||
  !/^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[A-Za-z0-9_]+\/status\/\d+$/.test(post.url)
) {
  console.error('POST.json does not name an X post URL of the form https://x.com/<handle>/status/<id>');
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'POST.json'), raw, 'utf8');
const statusId = post.url.split('/status/')[1];
console.log(`POST.json copied for ${post.url} (status ${statusId})`);
