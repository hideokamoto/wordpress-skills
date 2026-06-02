# wordpress-skills

**Stop your AI from hallucinating WordPress APIs — make it read the official Handbook first.**

[![License: Apache-2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](./LICENSE)
[![Agent Skill](https://img.shields.io/badge/Agent_Skill-agentskills.io-7E57C2.svg)](https://agentskills.io)
[![Works with Claude Code / Cursor / Codex](https://img.shields.io/badge/Works_with-Claude_Code%20%C2%B7%20Cursor%20%C2%B7%20Codex-111.svg)](https://agentskills.io)

[Agent Skills](https://agentskills.io) that give AI coding agents **primary-source grounding** for WordPress development. Instead of generating code from memory, your agent searches and reads the official WordPress Developer Handbooks on [developer.wordpress.org](https://developer.wordpress.org/) — so answers about plugins, themes, the Block Editor, the REST API, and coding standards come from the docs, not from a guess.

> 🇯🇵 日本語版は [README.ja.md](./README.ja.md) をご覧ください。

---

## Why this exists

Official and semi-official skills (e.g. [`WordPress/agent-skills`](https://github.com/WordPress/agent-skills), [`Automattic/wordpress-agent-skills`](https://github.com/Automattic/wordpress-agent-skills)) are great at **generating** WordPress code. But generation relies on the model's training data, which goes stale and occasionally invents APIs that never existed.

`wordpress-skills` is the **grounding layer**: it fetches the relevant Handbook pages at request time, so your agent has the current, official source in front of it.

| | "Generation" skills | **wordpress-skills (grounding)** |
|---|---|---|
| Source of truth | Model's training data | Live `developer.wordpress.org` |
| Best at | Scaffolding code | Verifying APIs, standards, behavior |
| Relationship | — | **Complements** them — run both |

---

## Included skills

| Skill | What it does |
|-------|--------------|
| [`wordpress-handbook`](./skills/wordpress-handbook/) | Searches the seven official WordPress Developer Handbooks (Plugin / Theme / Block Editor / REST API / Common APIs / Coding Standards / Advanced Administration) and fetches full article content on demand. |

More skills are planned. ⭐ Star the repo to follow along.

---

## Install

### GitHub CLI (`gh skill`)

```bash
# Latest
gh skill install hideokamoto/wordpress-skills wordpress-handbook

# Pin a release
gh skill install hideokamoto/wordpress-skills wordpress-handbook --pin v0.1.0

# Target a specific agent / scope
gh skill install hideokamoto/wordpress-skills wordpress-handbook \
  --agent claude-code --scope user
```

### Vercel skills CLI (`npx skills`)

```bash
# Latest
npx skills add hideokamoto/wordpress-skills --skill wordpress-handbook

# Multiple agents
npx skills add hideokamoto/wordpress-skills --skill wordpress-handbook \
  -a claude-code -a cursor
```

Built on the open [`SKILL.md`](https://agentskills.io) standard, so it is portable across Claude Code, Cursor, Codex, Gemini CLI, Copilot, and other compatible agents.

---

## See it in action

Ask your agent a WordPress development question and watch it pull the answer from the Handbook:

> **You:** How do I register a custom post type with REST API support?
>
> **Agent:** *(searches the Plugin Handbook, fetches `register_post_type`, and answers with `show_in_rest` plus the current argument list — citing the official URL).*

A short demo GIF will be added here. *(placeholder — contributions welcome)*

---

## Requirements

- **Python 3.x** (to run the skill scripts)
- **Network** access to `developer.wordpress.org` over HTTPS

---

## Documentation & links

- Skill reference: [`skills/wordpress-handbook/`](./skills/wordpress-handbook/) ([English](./skills/wordpress-handbook/README.md) · [日本語](./skills/wordpress-handbook/README.ja.md))
- Agent Skills standard: [agentskills.io](https://agentskills.io)

## License

[Apache-2.0](./LICENSE)
