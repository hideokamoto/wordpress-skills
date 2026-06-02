# wordpress-skills

**AI に WordPress の API を“でっち上げ”させない。まず公式ハンドブックを読ませる。**

[![License: Apache-2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](./LICENSE)
[![Agent Skill](https://img.shields.io/badge/Agent_Skill-agentskills.io-7E57C2.svg)](https://agentskills.io)
[![Works with Claude Code / Cursor / Codex](https://img.shields.io/badge/Works_with-Claude_Code%20%C2%B7%20Cursor%20%C2%B7%20Codex-111.svg)](https://agentskills.io)

WordPress 開発のために、AI コーディングエージェントへ **一次情報によるグラウンディング** を与える [Agent Skills](https://agentskills.io) です。記憶からコードを生成するのではなく、[developer.wordpress.org](https://developer.wordpress.org/) の公式開発者ハンドブックを実行時に検索・取得します。プラグイン・テーマ・ブロックエディター・REST API・コーディング規約に関する回答が、“うろ覚え”ではなく **公式ドキュメント由来** になります。

> 🇬🇧 English: see [README.md](./README.md).

---

## なぜ作ったか

公式・準公式のスキル（例: [`WordPress/agent-skills`](https://github.com/WordPress/agent-skills)、[`Automattic/wordpress-agent-skills`](https://github.com/Automattic/wordpress-agent-skills)）は WordPress コードの **生成** に強みがあります。ただし生成はモデルの学習データに依存するため、情報が古くなったり、存在しない API を作り出してしまうことがあります。

`wordpress-skills` は **グラウンディング層** です。リクエスト時に該当するハンドブックのページを取得し、最新かつ公式の情報をエージェントの手元に置きます。

| | 「生成」系スキル | **wordpress-skills（グラウンディング）** |
|---|---|---|
| 正の源泉 | モデルの学習データ | ライブの `developer.wordpress.org` |
| 得意なこと | コードの足場づくり | API・規約・挙動の検証 |
| 関係性 | — | **補完**する — 併用がおすすめ |

---

## 含まれるスキル

| スキル | 概要 |
|--------|------|
| [`wordpress-handbook`](./skills/wordpress-handbook/) | 公式 7 ハンドブック（プラグイン / テーマ / ブロックエディター / REST API / 共通 API / コーディング規約 / 高度な管理）を検索し、必要に応じて記事本文を取得します。 |

スキルは今後追加予定です。⭐ Star でフォローしてください。

---

## インストール

### GitHub CLI（`gh skill`）

```bash
# 最新版
gh skill install hideokamoto/wordpress-skills wordpress-handbook

# バージョン固定
gh skill install hideokamoto/wordpress-skills wordpress-handbook --pin v0.1.0

# 対象エージェント・スコープを指定
gh skill install hideokamoto/wordpress-skills wordpress-handbook \
  --agent claude-code --scope user
```

### Vercel skills CLI（`npx skills`）

```bash
# 最新版
npx skills add hideokamoto/wordpress-skills --skill wordpress-handbook

# 複数エージェントを指定
npx skills add hideokamoto/wordpress-skills --skill wordpress-handbook \
  -a claude-code -a cursor
```

オープンな [`SKILL.md`](https://agentskills.io) 標準に準拠しているため、Claude Code・Cursor・Codex・Gemini CLI・Copilot など対応エージェント間でポータブルです。

---

## 動作イメージ

WordPress 開発の質問を投げると、ハンドブックから根拠を引いて答えます。

> **あなた:** REST API 対応のカスタム投稿タイプを登録するには？
>
> **エージェント:** *(プラグインハンドブックを検索し、`register_post_type` を取得。`show_in_rest` と最新の引数一覧を、公式 URL を引用しつつ回答)*

ここに短いデモ GIF を追加予定です。*(プレースホルダー — 貢献歓迎)*

---

## 動作環境

- **Python 3.x**（スクリプト実行用）
- **ネットワーク**（`developer.wordpress.org` への HTTPS 接続）

---

## ドキュメント・リンク

- スキルリファレンス: [`skills/wordpress-handbook/`](./skills/wordpress-handbook/)（[English](./skills/wordpress-handbook/README.md) · [日本語](./skills/wordpress-handbook/README.ja.md)）
- Agent Skills 標準: [agentskills.io](https://agentskills.io)

## ライセンス

[Apache-2.0](./LICENSE)
