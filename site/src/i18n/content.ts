// Single source of truth for both languages on the landing page.
// Keep `en` and `ja` in sync when you edit copy.

export type Lang = 'en' | 'ja';

export interface Content {
  htmlLang: string;
  metaTitle: string;
  metaDescription: string;
  langSwitchHref: string;
  langSwitchLabel: string;
  nav: { why: string; install: string; demo: string };
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    ctaInstall: string;
    ctaGithub: string;
    portability: string;
  };
  why: {
    title: string;
    body: string;
    tableHead: [string, string, string];
    rows: [string, string, string][];
  };
  skills: {
    title: string;
    name: string;
    desc: string;
    handbooksLabel: string;
    handbooks: string[];
    more: string;
  };
  install: {
    title: string;
    ghLabel: string;
    npxLabel: string;
    gh: string;
    npx: string;
    note: string;
    copy: string;
    copied: string;
  };
  demo: {
    title: string;
    you: string;
    youText: string;
    agent: string;
    agentText: string;
    placeholder: string;
  };
  req: { title: string; items: string[] };
  footer: { tagline: string; license: string; standard: string };
}

const GITHUB = 'https://github.com/hideokamoto/wordpress-skills';

const ghCmd = `gh skill install hideokamoto/wordpress-skills wordpress-handbook`;
const npxCmd = `npx skills add hideokamoto/wordpress-skills --skill wordpress-handbook`;

export const content: Record<Lang, Content> = {
  en: {
    htmlLang: 'en',
    metaTitle: 'wordpress-skills — Primary-source grounding for WordPress AI agents',
    metaDescription:
      'Agent Skills that make AI coding agents read the official WordPress Developer Handbooks first — so answers come from the docs, not a guess.',
    langSwitchHref: '/ja/',
    langSwitchLabel: '日本語',
    nav: { why: 'Why', install: 'Install', demo: 'Demo' },
    hero: {
      eyebrow: 'Agent Skill · agentskills.io standard',
      title: 'Stop your AI from hallucinating WordPress APIs.',
      highlight: 'Make it read the official Handbook first.',
      subtitle:
        'Agent Skills that give AI coding agents primary-source grounding for WordPress. Your agent searches and reads developer.wordpress.org at request time — so answers about plugins, themes, the Block Editor, the REST API, and coding standards come from the docs.',
      ctaInstall: 'Install',
      ctaGithub: 'View on GitHub',
      portability: 'Works with Claude Code · Cursor · Codex · Gemini CLI · Copilot',
    },
    why: {
      title: 'The grounding layer, not another generator',
      body:
        'Official skills like WordPress/agent-skills are great at generating code — but generation leans on training data that goes stale and can invent APIs that never existed. wordpress-skills fetches the relevant Handbook pages live, so the current, official source is in front of your agent. Run both.',
      tableHead: ['', '"Generation" skills', 'wordpress-skills (grounding)'],
      rows: [
        ['Source of truth', "Model's training data", 'Live developer.wordpress.org'],
        ['Best at', 'Scaffolding code', 'Verifying APIs, standards, behavior'],
        ['Relationship', '—', 'Complements them — run both'],
      ],
    },
    skills: {
      title: 'Included skills',
      name: 'wordpress-handbook',
      desc: 'Searches the seven official WordPress Developer Handbooks and fetches full article content on demand.',
      handbooksLabel: 'Covers',
      handbooks: [
        'Plugin',
        'Theme',
        'Block Editor',
        'REST API',
        'Common APIs',
        'Coding Standards',
        'Advanced Administration',
      ],
      more: 'More skills are planned. ⭐ Star the repo to follow along.',
    },
    install: {
      title: 'Install in one line',
      ghLabel: 'GitHub CLI',
      npxLabel: 'Vercel skills CLI',
      gh: ghCmd,
      npx: npxCmd,
      note: 'Built on the open SKILL.md standard — portable across compatible agents.',
      copy: 'Copy',
      copied: 'Copied!',
    },
    demo: {
      title: 'See it in action',
      you: 'You',
      youText: 'How do I register a custom post type with REST API support?',
      agent: 'Agent',
      agentText:
        'Searches the Plugin Handbook, fetches register_post_type, and answers with show_in_rest plus the current argument list — citing the official URL.',
      placeholder: 'A short demo GIF will go here.',
    },
    req: {
      title: 'Requirements',
      items: ['Python 3.x (to run the skill scripts)', 'Network access to developer.wordpress.org over HTTPS'],
    },
    footer: {
      tagline: 'Primary-source grounding for WordPress AI agents.',
      license: 'Apache-2.0',
      standard: 'agentskills.io',
    },
  },
  ja: {
    htmlLang: 'ja',
    metaTitle: 'wordpress-skills — WordPress AI エージェントに一次情報のグラウンディングを',
    metaDescription:
      'AI コーディングエージェントにまず WordPress 公式ハンドブックを読ませる Agent Skills。回答が“うろ覚え”ではなく公式ドキュメント由来になります。',
    langSwitchHref: '/',
    langSwitchLabel: 'English',
    nav: { why: '特徴', install: '導入', demo: 'デモ' },
    hero: {
      eyebrow: 'Agent Skill · agentskills.io 標準',
      title: 'AI に WordPress の API を“でっち上げ”させない。',
      highlight: 'まず公式ハンドブックを読ませる。',
      subtitle:
        'AI コーディングエージェントへ、WordPress 開発の一次情報グラウンディングを与える Agent Skills。実行時に developer.wordpress.org を検索・取得するので、プラグイン・テーマ・ブロックエディター・REST API・コーディング規約の回答が公式ドキュメント由来になります。',
      ctaInstall: '導入する',
      ctaGithub: 'GitHub で見る',
      portability: '対応: Claude Code · Cursor · Codex · Gemini CLI · Copilot',
    },
    why: {
      title: '生成器ではなく、グラウンディング層',
      body:
        'WordPress/agent-skills のような公式スキルはコード生成に強い一方、生成は学習データに依存し、情報が古くなったり存在しない API を作り出すことがあります。wordpress-skills は該当ハンドブックを実行時に取得し、最新・公式の情報をエージェントの手元に置きます。併用がおすすめです。',
      tableHead: ['', '「生成」系スキル', 'wordpress-skills（グラウンディング）'],
      rows: [
        ['情報源', 'モデルの学習データ', 'ライブの developer.wordpress.org'],
        ['得意なこと', 'コードの足場づくり', 'API・規約・挙動の検証'],
        ['関係性', '—', '補完する — 併用がおすすめ'],
      ],
    },
    skills: {
      title: '含まれるスキル',
      name: 'wordpress-handbook',
      desc: '公式 7 ハンドブックを検索し、必要に応じて記事本文を取得します。',
      handbooksLabel: '対象',
      handbooks: [
        'プラグイン',
        'テーマ',
        'ブロックエディター',
        'REST API',
        '共通 API',
        'コーディング規約',
        '高度な管理',
      ],
      more: 'スキルは今後追加予定です。⭐ Star でフォローしてください。',
    },
    install: {
      title: '1 行で導入',
      ghLabel: 'GitHub CLI',
      npxLabel: 'Vercel skills CLI',
      gh: ghCmd,
      npx: npxCmd,
      note: 'オープンな SKILL.md 標準に準拠 — 対応エージェント間でポータブルです。',
      copy: 'コピー',
      copied: 'コピーしました',
    },
    demo: {
      title: '動作イメージ',
      you: 'あなた',
      youText: 'REST API 対応のカスタム投稿タイプを登録するには？',
      agent: 'エージェント',
      agentText:
        'プラグインハンドブックを検索し register_post_type を取得。show_in_rest と最新の引数一覧を、公式 URL を引用しつつ回答します。',
      placeholder: 'ここに短いデモ GIF が入ります。',
    },
    req: {
      title: '動作環境',
      items: ['Python 3.x（スクリプト実行用）', 'developer.wordpress.org への HTTPS 接続'],
    },
    footer: {
      tagline: 'WordPress AI エージェントに、一次情報のグラウンディングを。',
      license: 'Apache-2.0',
      standard: 'agentskills.io',
    },
  },
};

export const GITHUB_URL = GITHUB;
