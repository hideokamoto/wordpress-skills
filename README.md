# wordpress-skills

WordPress 公式開発ドキュメント検索のための [Agent Skills](https://agentskills.io)。

## 含まれるスキル

| スキル名 | 概要 |
|---------|------|
| `wordpress-handbook` | WordPress 公式 7 ハンドブック（Plugin/Theme/Block Editor/REST API/Common APIs/Coding Standards/Advanced Administration）の検索 |

## インストール

### GitHub CLI（gh skill）

```bash
# 最新版をインストール
gh skill install hideokamoto/wordpress-skills wordpress-handbook

# バージョン固定
gh skill install hideokamoto/wordpress-skills wordpress-handbook --pin v0.1.0

# 対象エージェント・スコープを指定
gh skill install hideokamoto/wordpress-skills wordpress-handbook \
  --agent claude-code --scope user
```

### Vercel skills CLI（npx skills）

```bash
# 最新版をインストール
npx skills add hideokamoto/wordpress-skills --skill wordpress-handbook

# 対象エージェントを指定
npx skills add hideokamoto/wordpress-skills --skill wordpress-handbook \
  -a claude-code -a cursor
```

## 動作環境

- Python 3.x（スクリプト実行用）
- ネットワークアクセス（developer.wordpress.org への HTTPS 接続）

## ライセンス

Apache-2.0
