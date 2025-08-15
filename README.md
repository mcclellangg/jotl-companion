# JOTL Companion
Companion app for JOTL (Jaws of the Lion) meant to serve as a virtual representation of your character sheet. Inspired by my [disorderly session notes](https://github.com/mcclellangg/PARA/blob/master/4_Resources/Gaming/JOTL/Red%20Guard%20Sheet.md). Character sheets created by [TiMax7](https://boardgamegeek.com/image/5587995/timax7).

## Features
- track gold, xp, items, perks added, player notes on a per encounter basis
- automatically calculate totals and display them to player
- Export/import table data in JSON format
- mobile-friendly design

## Project Setup
**Assuming python is installed, execute below steps.**

1. create virtual environment (venv) - `python -m venv .venv`
2. activate venv - `.\.venv\Scripts\Activate.ps1`
3. install flask - `pip install flask`
4. run app - `flask run --debug`

## Design log
- `scenario-log.html` created via 
  - [Claude - Artifact](https://claude.ai/public/artifacts/c78b5bc0-21f5-4b75-a5c7-38e383844d6b)
  - [Claude - Chat](https://claude.ai/share/009291b3-a14c-433b-83d0-d0fb6b08c8de)

- `red-guard.html` `v1 to v4` created via
  - [Claude - Artifact](https://claude.ai/public/artifacts/73a1ceb4-def8-4970-a47d-0ac89c5b57bf)
  - [GPT](https://chatgpt.com/share/689b7e10-e404-8005-8610-fc989c4f244d)
  - [Claude - Chat](https://claude.ai/share/f979dec2-0e46-4539-b53d-6c8d27b76a1a)

- [GitHub Copilot & Agent Prompts](https://gist.github.com/mcclellangg/d7d767c8eb04975145555ce60ce8c11d)
