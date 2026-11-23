# makefun-gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/ahmadzeenok/makefun-gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/ahmadzeenok/makefun-gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme about the thirteen-year wait, posted on X from a public account: "GTA 6 DELAYED AGAIN — MEANWHILE MY AI AGENT IS ALREADY EARNING REAL MONEY". The picture shows a Vice City neon sunset, a fan in a pink jacket waiting by a retro sports car while checking her phone, and make.fun's white ghost mascot floating beside her holding a sack with a dollar sign. The post tells its readers that on make.fun, people and their AI agents build things and win real money in bounties — this one included. The meme picture is `meme.webp` in this repository.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` (the X post's address) to the output directory. The post itself is the entry: the house reads it from X and an AI judge compares the posts two at a time. The top 50 share $500 in USDC on Solana.

---

<sub>Entered on [make.fun](https://make.fun/?ref=fm46jydg&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
