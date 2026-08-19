const root = document.documentElement;
const THEME_STORAGE_KEY = 'tidestack-theme';
const LOCALE_STORAGE_KEY = 'tidestack-locale';

const translations = {
  zh: {
    lang: 'zh-CN',
    title: '潮汐栈 — AI 时代的企业开发供应链',
    description: '潮汐栈（TideStack）是 AI 时代的企业开发供应链：以模型为标准件，以 AI 为驱动力，贯通企业开发的每一个环节。高代码 × 低代码 × AI 融合开发，核心组件全面开源。',
    pages: {
      home: {
        title: '潮汐栈 — AI 时代的企业开发供应链',
        description: '潮汐栈（TideStack）是 AI 时代的企业开发供应链：以模型为标准件，以 AI 为驱动力，贯通企业开发的每一个环节。高代码 × 低代码 × AI 融合开发，核心组件全面开源。',
      },
      architecture: {
        title: '架构 — 潮汐栈',
        description: '潮汐栈架构以模型资产为核心，连接开发平台、运行时基座和运维治理。',
      },
      features: {
        title: '特性 — 潮汐栈',
        description: '潮汐栈围绕 AI 协同、动态模型、界面与 API 生成、工作流、微前端和资产治理提供企业开发能力。',
      },
      roadmap: {
        title: '路线图 — 潮汐栈',
        description: '潮汐栈路线图展示核心开源组件、开发工具链和全生命周期平台能力的推进方向。',
      },
    },
    themeToggle: {
      light: '切换到暗色模式',
      dark: '切换到亮色模式',
    },
    localeLabel: '语言切换',
    text: {
      'nav-home': '首页',
      'nav-brand': '潮汐栈',
      'nav-vision': '愿景',
      'nav-philosophy': '理念',
      'nav-principles': '原则',
      'nav-architecture': '架构',
      'nav-features': '特性',
      'nav-roadmap': '路线图',
      'nav-fusion': '融合',
      'nav-capabilities': '能力',
      'nav-opensource': '开源',
      'nav-docs': '文档',
      'nav-github .nav-link-label': 'GitHub',
      'nav-cta': '快速开始',
      'mobile-menu-open': '打开导航菜单',
      'mobile-menu-close': '关闭导航菜单',
      'section-hero': '首页',
      'section-vision': '愿景',
      'section-philosophy': '理念',
      'section-principles': '原则',
      'section-architecture': '生命周期',
      'section-fusion': '融合',
      'section-capabilities': '能力',
      'section-opensource': '开源',
      'section-cta': '开始',
      'standalone-architecture-title': '架构',
      'standalone-architecture-copy': '以模型资产为中心，开发平台、运行时基座和运维治理沿同一套标准件协同工作。',
      'standalone-features-title': '特性',
      'standalone-features-copy': '从 AI 协同开发到动态模型、生成式界面与 API、工作流编排、微前端组装和资产治理，潮汐栈把企业应用交付拆成可组合的能力。',
      'standalone-roadmap-title': '路线图',
      'standalone-roadmap-copy': '潮汐栈会围绕开放组件、IDE 工具链、模型运行时和运维治理持续推进，把更多环节交给标准化资产。',
      'hero h1': '需求进，应用出',
      'hero p': '潮汐栈是 AI 时代的企业开发供应链：以模型为标准件，以 AI 为驱动力，贯通企业开发的每一个环节。软件，进入工业化时代。',
      'hero-cta-primary .btn-label': '快速开始',
      'hero-cta-secondary .btn-label': 'GitHub',
      'vision h2': '代码会退潮，资产会沉淀',
      'vision p': '过去四十年，企业软件以项目为单位被一次次重写——需求来了，代码堆上去；团队走了，系统烂在那里。我们相信 AI 时代会有另一种活法：需求被 AI 解析为标准化的模型，模型在运行时生长为应用，应用在运营中沉淀为资产，资产再反哺下一次需求。潮汐栈想做的，是让这个循环转起来的基础设施。',
      'vision li:nth-of-type(1) span.ouro-body': '需求 → 模型 → 应用 → 资产 → 需求',
      'vision li:nth-of-type(2) span.ouro-body': '版本演进不中断线上业务',
      'vision li:nth-of-type(3) span.ouro-body': '变更自动传播至所有依赖',
      'loop-model-title': '模型',
      'loop-model-subtitle': '标准化表达',
      'loop-app-title': '应用',
      'loop-app-subtitle': '运行时生长',
      'loop-asset-title': '资产',
      'loop-asset-subtitle': '版本化沉淀',
      'loop-demand-title': '需求',
      'loop-demand-subtitle': '业务输入',
      'loop-ai-title': 'AI 协同',
      'loop-ai-subtitle': '解析 · 建模 · 审查',
      'philosophy h2': '适应 AI 时代的设计理念',
      'philosophy p': '低代码只是潮汐栈能力版图的一部分。潮汐栈真正的优势，是三个贯穿始终的理念。',
      'philosophy-card-1-title': '开放化',
      'philosophy-card-1-body': '开放不是附加能力，而是平台的基本形态。潮汐栈遵循开放标准，核心组件逐步开源，插件式架构与 40+ 扩展点让每一环都能接入、替换和扩展，不把团队锁进单一生态。',
      'philosophy-card-2-title': '融合化',
      'philosophy-card-2-body': '高代码、低代码和 AI 不该彼此割裂。潮汐栈支持模型与代码双向嵌入：自定义程序包可以接入低代码基座，基座能力也能进入既有高代码应用，让每个需求都用最合适的方式交付。',
      'philosophy-card-3-title': '标准化',
      'philosophy-card-3-body': '把业务意图沉淀为清晰可读的模型，而不是散落在代码细节里。模型成为人、AI 与运行时共同理解的标准件，降低协作成本，也让生成、审查、复用和演进都有共同边界。',
      'principles h2': '写在代码之前的四条原则',
      'principles p': '它们决定潮汐栈的每一个技术决策，也决定你使用它时的每一次体验。',
      'principle-1-title': '资产可沉淀',
      'principle-1-body': '一切交付物皆为可版本化、可迁移、向后兼容的元数据，人走资产在。',
      'principle-2-title': '渐进式采用',
      'principle-2-body': '从一个模型、一个应用开始，逐步扩展，不做大爆炸式替换。',
      'principle-3-title': '人机权责分明',
      'principle-3-body': 'AI 生成的一切可审查、可回溯、可推翻，决策权永远在人。',
      'principle-4-title': '架构可验证',
      'principle-4-body': '六层单向依赖，结构即测试，腐败在编译期被拦截。',
      'life-card-design-title': '设计建模',
      'life-card-design-subtitle': '开发平台',
      'life-card-runtime-title': '运行交付',
      'life-card-runtime-subtitle': '运行时基座',
      'life-card-ops-title': '观测治理',
      'life-card-ops-subtitle': '运维平台',
      'life-core-title': '模型资产',
      'life-core-subtitle': '贯穿 · 版本 · 反馈',
      'architecture h2': '为软件全生命周期而生',
      'architecture > copy': '从设计到运行到治理，潮汐栈以三层产品形态覆盖软件生命周期的完整旅程。',
      'architecture-item-1-title': '开发平台',
      'architecture-item-1-body': '可视化建模、AI 辅助设计、元数据管理与版本治理，是应用的设计中心。',
      'architecture-item-2-title': '运行时基座',
      'architecture-item-2-body': '加载元数据、解释执行、动态渲染、暴露 API，让设计即刻成为生产。',
      'architecture-item-3-title': '运维平台（Coming Soon）',
      'architecture-item-3-body': '部署、发布、观测与运行治理，闭环软件生命周期的最后一段。',
      'fusion h2': '高代码 × 低代码 × AI',
      'fusion p': '潮汐栈的融合不止一种形态：高代码与低代码在架构层双向嵌入，开发与调试在工具链中无缝衔接，AI 通过标准协议接入同一份模型资产。',
      'fusion-card-1-title': '代码融合',
      'fusion-card-1-body': 'SPI 扩展点、微前端基座、可扩展前端组件库、可扩展逻辑流节点、可扩展数据模型插件——自定义程序包可以嵌进低代码基座，基座也可以作为底层框架嵌进你的高代码应用。模型与代码，自由组合，彼此复用。',
      'fusion-card-2-title': '工具链融合',
      'fusion-card-2-body': 'Maven 插件、IDE 插件、本地平台联合调试——建模、编码、调试在同一条工作流里完成。低代码开发者与高代码开发者共用一套工具、一个节奏，谁也不用在两套世界里来回切换。',
      'fusion-card-3-title': 'AI 融合',
      'fusion-card-3-body': '通过 TideStack Skills 与 MCP 协议，把模型资产以标准方式开放给 AI Coding 工具。AI 理解模型规范，协助快速建模、生成规范代码——融合不靠私有集成，靠的是开放协议。',
      'capabilities h2': '一套模型，长出一个完整应用',
      'capabilities p': '以业务模型为源头，潮汐栈把数据、页面、接口、流程和应用交付组织在一起，让应用从设计、运行到后续变更保持一致。',
      'capability-1-title': '业务建模',
      'capability-1-body': '把实体、关系和规则沉淀为可复用的模型',
      'capability-2-title': '数据与接口',
      'capability-2-body': '模型驱动数据访问与 Web API',
      'capability-3-title': '页面与交互',
      'capability-3-body': '用 UI 模型定义页面、表单和交互',
      'capability-4-title': '流程与协同',
      'capability-4-body': '把业务逻辑、审批和通知编排成流程',
      'capability-5-title': '应用组装',
      'capability-5-body': '模型、页面和扩展能力按需组合交付',
      'capability-6-title': '版本与治理',
      'capability-6-body': '统一管理模型、权限、版本和变更',
      'opensource h2': '开放，从开源开始',
      'opensource p': '潮汐栈的核心组件已逐一开源。你可以按需选择其中一个组件接入现有体系，而不必完整采用整个平台。',
      'source-1-title': '动态数据模型',
      'source-1-body': '声明式定义数据模型与关系，运行时即时生效的核心引擎。',
      'source-2-title': '逻辑流模型',
      'source-2-body': '可视化业务逻辑编排模型，节点类型可自由扩展。',
      'source-3-title': 'PrismUI 声明式 UI 库',
      'source-3-body': '面向企业应用的 UI Schema 驱动系统，一套 Schema 贯通组件、交互与可视化编辑器。',
      'source-4-title': '模型元数据规范',
      'source-4-body': '潮汐栈所有标准件的公共契约，人与 AI 都能读写的开放规范。',
      'source-5-title': 'TideStack Skills',
      'source-5-body': '面向 AI Coding 工具的开发技能包，让 AI 按规范建模、生成规范代码。',
      'source-6-title': 'TideStack IDE 插件',
      'source-6-body': 'IntelliJ、VS Code 和公共插件组件共用同一套开发能力。',
      'source-link-github': 'GitHub 仓库',
      'source-link-prismui': 'PrismUI 官网',
      'cta h2': '潮起此刻，上栈启航',
      'cta p': '从第一个模型开始，体验模型驱动的开发方式；从第一个应用开始，沉淀属于你们的数字资产。',
      'footer-cta-primary .btn-label': '快速开始',
      'footer-cta-secondary .btn-label': '访问 GitHub',
      'footer-brand-title': '潮汐栈',
      'footer-brand-copy': '潮汐栈（TideStack）——以模型为标准件的企业开发供应链。',
      'footer-product-title': '产品',
      'footer-product-capabilities': '能力',
      'footer-product-architecture': '架构',
      'footer-product-roadmap': '路线图',
      'footer-dev-title': '开发者',
      'footer-dev-docs': '文档',
      'footer-dev-jetbrains': 'JetBrains 插件',
      'footer-dev-vscode': 'VS Code 插件',
      'footer-dev-api': 'API 参考',
      'footer-dev-github': 'GitHub',
      'footer-resource-title': '资源',
      'footer-resource-blog': '博客',
      'footer-resource-changelog': '更新日志',
      'footer-resource-community': '社区',
      'footer-copyright': '© 2026 潮汐栈 TideStack. 保留所有权利。',
      'footer-privacy': '隐私政策',
      'footer-terms': '服务条款',
      'footer-github .btn-label': 'GitHub',
    },
  },
  en: {
    lang: 'en',
    title: 'TideStack — The Enterprise Development Supply Chain for the AI Era',
    description: 'TideStack is the enterprise development supply chain for the AI era: models as standardized parts, AI as the driving force, and every stage of enterprise software delivery connected end to end.',
    pages: {
      home: {
        title: 'TideStack — The Enterprise Development Supply Chain for the AI Era',
        description: 'TideStack is the enterprise development supply chain for the AI era: models as standardized parts, AI as the driving force, and every stage of enterprise software delivery connected end to end.',
      },
      architecture: {
        title: 'Architecture — TideStack',
        description: 'TideStack architecture centers on model assets and connects the development platform, runtime foundation, and operations governance.',
      },
      features: {
        title: 'Features — TideStack',
        description: 'TideStack provides enterprise development capabilities across AI collaboration, dynamic models, generated UI and APIs, workflows, micro-frontends, and asset governance.',
      },
      roadmap: {
        title: 'Roadmap — TideStack',
        description: 'The TideStack roadmap shows the direction for open components, developer tooling, model runtime, and lifecycle governance.',
      },
    },
    themeToggle: {
      light: 'Switch to dark mode',
      dark: 'Switch to light mode',
    },
    localeLabel: 'Language selector',
    text: {
      'nav-home': 'Home',
      'nav-brand': 'TideStack',
      'nav-vision': 'Vision',
      'nav-philosophy': 'Ideas',
      'nav-principles': 'Principles',
      'nav-architecture': 'Architecture',
      'nav-features': 'Features',
      'nav-roadmap': 'Roadmap',
      'nav-fusion': 'Fusion',
      'nav-capabilities': 'Capabilities',
      'nav-opensource': 'Open Source',
      'nav-docs': 'Docs',
      'nav-github .nav-link-label': 'GitHub',
      'nav-cta': 'Quick Start',
      'mobile-menu-open': 'Open navigation menu',
      'mobile-menu-close': 'Close navigation menu',
      'section-hero': 'Home',
      'section-vision': 'Vision',
      'section-philosophy': 'Ideas',
      'section-principles': 'Principles',
      'section-architecture': 'Lifecycle',
      'section-fusion': 'Fusion',
      'section-capabilities': 'Capabilities',
      'section-opensource': 'Open Source',
      'section-cta': 'Start',
      'standalone-architecture-title': 'Architecture',
      'standalone-architecture-copy': 'Model assets sit at the center while the development platform, runtime foundation, and operations governance work from the same standard parts.',
      'standalone-features-title': 'Features',
      'standalone-features-copy': 'From AI-assisted development to dynamic models, generated UI and APIs, workflow orchestration, micro-frontend composition, and asset governance, TideStack turns enterprise delivery into composable capabilities.',
      'standalone-roadmap-title': 'Roadmap',
      'standalone-roadmap-copy': 'TideStack will continue advancing open components, IDE tooling, the model runtime, and operations governance so more delivery work becomes standardized assets.',
      'hero h1': 'Requirements in, applications out',
      'hero p': 'TideStack is the enterprise development supply chain for the AI era: models as standardized parts, AI as the driving force, and every stage of enterprise software delivery connected end to end. Software is entering its industrial age.',
      'hero-cta-primary .btn-label': 'Quick Start',
      'hero-cta-secondary .btn-label': 'GitHub',
      'vision h2': 'Code recedes. Assets remain.',
      'vision p': 'For the past forty years, enterprise software has been rewritten project by project: requirements arrive, code piles up, teams move on, and systems decay. The AI era can work differently. Requirements become standardized models, models grow into applications at runtime, applications accumulate as assets, and those assets feed the next wave of requirements. TideStack is the infrastructure that keeps that loop moving.',
      'vision li:nth-of-type(1) span.ouro-body': 'Requirement → Model → Application → Asset → Requirement',
      'vision li:nth-of-type(2) span.ouro-body': 'Version evolution without interrupting live business',
      'vision li:nth-of-type(3) span.ouro-body': 'Changes propagate automatically to every dependency',
      'loop-model-title': 'Model',
      'loop-model-subtitle': 'Standardized expression',
      'loop-app-title': 'App',
      'loop-app-subtitle': 'Runtime growth',
      'loop-asset-title': 'Asset',
      'loop-asset-subtitle': 'Versioned accumulation',
      'loop-demand-title': 'Demand',
      'loop-demand-subtitle': 'Business input',
      'loop-ai-title': 'AI collaboration',
      'loop-ai-subtitle': 'Parse · model · review',
      'philosophy h2': 'Design ideas for the AI era',
      'philosophy p': 'Low-code is only one part of TideStack. Its real advantage is a set of ideas that run through every capability.',
      'philosophy-card-1-title': 'Open',
      'philosophy-card-1-body': 'Openness is not an add-on; it is the shape of the platform. TideStack follows open standards, is opening core components step by step, and provides a plugin architecture with 40+ extension points so every part can be adopted, replaced, or extended without locking teams into one ecosystem.',
      'philosophy-card-2-title': 'Integrated',
      'philosophy-card-2-body': 'High-code, low-code, and AI should not live in separate worlds. TideStack supports two-way embedding between models and code: custom packages can enter the low-code foundation, and foundation capabilities can enter existing high-code applications, so each requirement can be delivered in the right form.',
      'philosophy-card-3-title': 'Standardized',
      'philosophy-card-3-body': 'Business intent is captured as clear, readable models instead of being scattered through implementation details. Models become the standard parts shared by people, AI, and the runtime, lowering collaboration cost and giving generation, review, reuse, and evolution a common boundary.',
      'principles h2': 'Four principles before code',
      'principles p': 'They shape every technical decision in TideStack and every experience you have while using it.',
      'principle-1-title': 'Assets accumulate',
      'principle-1-body': 'Every deliverable is versioned, portable, backward-compatible metadata. People move on; assets stay.',
      'principle-2-title': 'Adopt progressively',
      'principle-2-body': 'Start with one model or one application, then expand gradually without a big-bang replacement.',
      'principle-3-title': 'Human and AI roles stay clear',
      'principle-3-body': 'Everything AI generates can be reviewed, traced, and overturned. Final authority stays with people.',
      'principle-4-title': 'Architecture is verifiable',
      'principle-4-body': 'Six one-way dependency layers make structure testable and catch decay at compile time.',
      'life-card-design-title': 'Design modeling',
      'life-card-design-subtitle': 'Development platform',
      'life-card-runtime-title': 'Runtime delivery',
      'life-card-runtime-subtitle': 'Runtime foundation',
      'life-card-ops-title': 'Observe and govern',
      'life-card-ops-subtitle': 'Operations platform',
      'life-core-title': 'Model assets',
      'life-core-subtitle': 'Flow · version · feedback',
      'architecture h2': 'Built for the full software lifecycle',
      'architecture > copy': 'From design to runtime to governance, TideStack covers the full journey of software delivery through three product layers.',
      'architecture-item-1-title': 'Development platform',
      'architecture-item-1-body': 'Visual modeling, AI-assisted design, metadata management, and version governance form the design center for applications.',
      'architecture-item-2-title': 'Runtime foundation',
      'architecture-item-2-body': 'Load metadata, interpret and execute, render dynamically, and expose APIs so designs can become production systems immediately.',
      'architecture-item-3-title': 'Operations platform (Coming Soon)',
      'architecture-item-3-body': 'Deployment, release, observability, and runtime governance close the final stage of the software lifecycle.',
      'fusion h2': 'High-code × Low-code × AI',
      'fusion p': 'TideStack fusion has more than one shape: high-code and low-code embed into each other at the architecture layer, development and debugging connect in the toolchain, and AI works with the same model assets through standard protocols.',
      'fusion-card-1-title': 'Code fusion',
      'fusion-card-1-body': 'SPI extension points, a micro-frontend foundation, extensible frontend components, extensible logic-flow nodes, and extensible data-model plugins let custom packages embed into the low-code foundation while the foundation can also become the base layer of your high-code applications. Models and code can be combined freely and reused together.',
      'fusion-card-2-title': 'Toolchain fusion',
      'fusion-card-2-body': 'Maven plugins, IDE plugins, and local platform debugging bring modeling, coding, and debugging into one workflow. Low-code and high-code developers share the same tools and cadence instead of switching between separate worlds.',
      'fusion-card-3-title': 'AI fusion',
      'fusion-card-3-body': 'Through TideStack Skills and MCP, model assets are exposed to AI coding tools in a standard way. AI understands the model conventions, assists with rapid modeling, and generates compliant code. The integration is built on open protocols, not private adapters.',
      'capabilities h2': 'One model grows into a complete application',
      'capabilities p': 'TideStack connects data, pages, APIs, workflows, and application delivery around one business model, so the application stays consistent from design through runtime and future change.',
      'capability-1-title': 'Business modeling',
      'capability-1-body': 'Turn business entities, relationships, and rules into models that teams and tools can understand and reuse.',
      'capability-2-title': 'Data and APIs',
      'capability-2-body': 'Let models drive data access and Web APIs instead of repeating entities and controller code.',
      'capability-3-title': 'Pages and interactions',
      'capability-3-body': 'Define pages, forms, lists, and interactions with UI models and schemas, then render them at runtime.',
      'capability-4-title': 'Workflows and collaboration',
      'capability-4-body': 'Orchestrate business logic, approvals, and notifications as versioned workflows.',
      'capability-5-title': 'Application composition',
      'capability-5-body': 'Assemble models, pages, and extensions into application modules that can be delivered independently.',
      'capability-6-title': 'Versioning and governance',
      'capability-6-body': 'Manage models, permissions, versions, and changes together as the application evolves.',
      'opensource h2': 'Open starts with open source',
      'opensource p': 'TideStack core components are being open sourced one by one. You can adopt only the component you need inside your existing system without adopting the whole platform.',
      'source-1-title': 'Dynamic data models',
      'source-1-body': 'A declarative engine for data models and relationships that takes effect at runtime.',
      'source-2-title': 'Logic-flow model',
      'source-2-body': 'A visual business-logic orchestration model with freely extensible node types.',
      'source-3-title': 'PrismUI declarative UI library',
      'source-3-body': 'A UI Schema driven system for enterprise applications, connecting components, interactions, and visual editing through one schema.',
      'source-4-title': 'Model metadata schema',
      'source-4-body': 'The shared contract for TideStack standard parts, readable and writable by both people and AI.',
      'source-5-title': 'TideStack Skills',
      'source-5-body': 'Development skill packs for AI coding tools, helping AI model correctly and generate compliant code.',
      'source-6-title': 'TideStack IDE plugins',
      'source-6-body': 'IntelliJ, VS Code, and shared plugin components running on the same development capabilities.',
      'source-link-github': 'GitHub repo',
      'source-link-prismui': 'PrismUI website',
      'cta h2': 'The tide is here. Start building.',
      'cta p': 'Begin with the first model to experience model-driven development. Begin with the first application to build the digital assets that belong to your team.',
      'footer-cta-primary .btn-label': 'Quick Start',
      'footer-cta-secondary .btn-label': 'Visit GitHub',
      'footer-brand-title': 'TideStack',
      'footer-brand-copy': 'TideStack: an enterprise development supply chain with models as standardized parts.',
      'footer-product-title': 'Product',
      'footer-product-capabilities': 'Capabilities',
      'footer-product-architecture': 'Lifecycle',
      'footer-product-roadmap': 'Roadmap',
      'footer-dev-title': 'Developers',
      'footer-dev-docs': 'Docs',
      'footer-dev-jetbrains': 'JetBrains plugin',
      'footer-dev-vscode': 'VS Code extension',
      'footer-dev-api': 'API reference',
      'footer-dev-github': 'GitHub',
      'footer-resource-title': 'Resources',
      'footer-resource-blog': 'Blog',
      'footer-resource-changelog': 'Changelog',
      'footer-resource-community': 'Community',
      'footer-copyright': '© 2026 TideStack. All rights reserved.',
      'footer-privacy': 'Privacy Policy',
      'footer-terms': 'Terms of Service',
      'footer-github .btn-label': 'GitHub',
    },
  },
};

const textTargets = {
  'nav-home': '[data-dom-id="nav-home"]',
  'nav-brand': '[data-dom-id="nav-brand"]',
  'nav-vision': '[data-dom-id="nav-vision"]',
  'nav-philosophy': '[data-dom-id="nav-philosophy"]',
  'nav-principles': '[data-dom-id="nav-principles"]',
  'nav-architecture': '[data-dom-id="nav-architecture"]',
  'nav-features': '[data-dom-id="nav-features"]',
  'nav-roadmap': '[data-dom-id="nav-roadmap"]',
  'nav-fusion': '[data-dom-id="nav-fusion"]',
  'nav-capabilities': '[data-dom-id="nav-capabilities"]',
  'nav-opensource': '[data-dom-id="nav-opensource"]',
  'nav-docs': '[data-dom-id="nav-docs"]',
  'nav-github .nav-link-label': '[data-dom-id="nav-github"] .nav-link-label',
  'nav-cta': '[data-dom-id="nav-cta"]',
  'hero h1': '#hero h1',
  'hero p': '#hero .ouro-body-lg',
  'hero-cta-primary .btn-label': '[data-dom-id="hero-cta-primary"] .btn-label',
  'hero-cta-secondary .btn-label': '[data-dom-id="hero-cta-secondary"] .btn-label',
  'vision h2': '#vision h2',
  'vision p': '#vision .order-2 > p',
  'vision li:nth-of-type(1) span.ouro-body': '#vision li:nth-of-type(1) span.ouro-body',
  'vision li:nth-of-type(2) span.ouro-body': '#vision li:nth-of-type(2) span.ouro-body',
  'vision li:nth-of-type(3) span.ouro-body': '#vision li:nth-of-type(3) span.ouro-body',
  'loop-model-title': '#vision svg > g:nth-of-type(2) text:nth-of-type(1)',
  'loop-model-subtitle': '#vision svg > g:nth-of-type(2) text:nth-of-type(2)',
  'loop-app-title': '#vision svg > g:nth-of-type(3) text:nth-of-type(1)',
  'loop-app-subtitle': '#vision svg > g:nth-of-type(3) text:nth-of-type(2)',
  'loop-asset-title': '#vision svg > g:nth-of-type(4) text:nth-of-type(1)',
  'loop-asset-subtitle': '#vision svg > g:nth-of-type(4) text:nth-of-type(2)',
  'loop-demand-title': '#vision svg > g:nth-of-type(5) text:nth-of-type(1)',
  'loop-demand-subtitle': '#vision svg > g:nth-of-type(5) text:nth-of-type(2)',
  'loop-ai-title': '#vision svg > g:last-of-type text:nth-of-type(1)',
  'loop-ai-subtitle': '#vision svg > g:last-of-type text:nth-of-type(2)',
  'philosophy h2': '#philosophy h2',
  'philosophy p': '#philosophy .ouro-philosophy-heading p',
  'philosophy-card-1-title': '#philosophy .ouro-philosophy-panel:nth-of-type(1) h3',
  'philosophy-card-1-body': '#philosophy .ouro-philosophy-panel:nth-of-type(1) p',
  'philosophy-card-2-title': '#philosophy .ouro-philosophy-panel:nth-of-type(2) h3',
  'philosophy-card-2-body': '#philosophy .ouro-philosophy-panel:nth-of-type(2) p',
  'philosophy-card-3-title': '#philosophy .ouro-philosophy-panel:nth-of-type(3) h3',
  'philosophy-card-3-body': '#philosophy .ouro-philosophy-panel:nth-of-type(3) p',
  'principles h2': '#principles h2',
  'principles p': '#principles .text-center p',
  'principle-1-title': '#principles .ouro-principle-card:nth-of-type(1) h3',
  'principle-1-body': '#principles .ouro-principle-card:nth-of-type(1) p',
  'principle-2-title': '#principles .ouro-principle-card:nth-of-type(2) h3',
  'principle-2-body': '#principles .ouro-principle-card:nth-of-type(2) p',
  'principle-3-title': '#principles .ouro-principle-card:nth-of-type(3) h3',
  'principle-3-body': '#principles .ouro-principle-card:nth-of-type(3) p',
  'principle-4-title': '#principles .ouro-principle-card:nth-of-type(4) h3',
  'principle-4-body': '#principles .ouro-principle-card:nth-of-type(4) p',
  'life-card-design-title': '#architecture .ouro-life-card:nth-of-type(1) text:nth-of-type(1)',
  'life-card-design-subtitle': '#architecture .ouro-life-card:nth-of-type(1) text:nth-of-type(2)',
  'life-card-runtime-title': '#architecture .ouro-life-card:nth-of-type(2) text:nth-of-type(1)',
  'life-card-runtime-subtitle': '#architecture .ouro-life-card:nth-of-type(2) text:nth-of-type(2)',
  'life-card-ops-title': '#architecture .ouro-life-card:nth-of-type(3) text:nth-of-type(1)',
  'life-card-ops-subtitle': '#architecture .ouro-life-card:nth-of-type(3) text:nth-of-type(2)',
  'life-core-title': '#architecture svg > g:last-of-type text:nth-of-type(1)',
  'life-core-subtitle': '#architecture svg > g:last-of-type text:nth-of-type(2)',
  'architecture h2': '#architecture .ouro-lifecycle-copy h2',
  'architecture > copy': '#architecture .ouro-lifecycle-copy > p',
  'architecture-item-1-title': '#architecture .ouro-lifecycle-list > div:nth-of-type(1) h3',
  'architecture-item-1-body': '#architecture .ouro-lifecycle-list > div:nth-of-type(1) p',
  'architecture-item-2-title': '#architecture .ouro-lifecycle-list > div:nth-of-type(2) h3',
  'architecture-item-2-body': '#architecture .ouro-lifecycle-list > div:nth-of-type(2) p',
  'architecture-item-3-title': '#architecture .ouro-lifecycle-list > div:nth-of-type(3) h3',
  'architecture-item-3-body': '#architecture .ouro-lifecycle-list > div:nth-of-type(3) p',
  'fusion h2': '#fusion h2',
  'fusion p': '#fusion .text-center p',
  'fusion-card-1-title': '#fusion .ouro-philosophy-panel:nth-of-type(1) h3',
  'fusion-card-1-body': '#fusion .ouro-philosophy-panel:nth-of-type(1) p',
  'fusion-card-2-title': '#fusion .ouro-philosophy-panel:nth-of-type(2) h3',
  'fusion-card-2-body': '#fusion .ouro-philosophy-panel:nth-of-type(2) p',
  'fusion-card-3-title': '#fusion .ouro-philosophy-panel:nth-of-type(3) h3',
  'fusion-card-3-body': '#fusion .ouro-philosophy-panel:nth-of-type(3) p',
  'capabilities h2': '#capabilities h2',
  'capabilities p': '#capabilities .text-center p',
  'capability-1-title': '#capabilities .ouro-feature-bubble:nth-of-type(1) h3',
  'capability-1-body': '#capabilities .ouro-feature-bubble:nth-of-type(1) p',
  'capability-2-title': '#capabilities .ouro-feature-bubble:nth-of-type(2) h3',
  'capability-2-body': '#capabilities .ouro-feature-bubble:nth-of-type(2) p',
  'capability-3-title': '#capabilities .ouro-feature-bubble:nth-of-type(3) h3',
  'capability-3-body': '#capabilities .ouro-feature-bubble:nth-of-type(3) p',
  'capability-4-title': '#capabilities .ouro-feature-bubble:nth-of-type(4) h3',
  'capability-4-body': '#capabilities .ouro-feature-bubble:nth-of-type(4) p',
  'capability-5-title': '#capabilities .ouro-feature-bubble:nth-of-type(5) h3',
  'capability-5-body': '#capabilities .ouro-feature-bubble:nth-of-type(5) p',
  'capability-6-title': '#capabilities .ouro-feature-bubble:nth-of-type(6) h3',
  'capability-6-body': '#capabilities .ouro-feature-bubble:nth-of-type(6) p',
  'opensource h2': '#opensource h2',
  'opensource p': '#opensource .text-center p',
  'source-1-title': '#opensource .ouro-principle-card:nth-of-type(1) h3',
  'source-1-body': '#opensource .ouro-principle-card:nth-of-type(1) p',
  'source-2-title': '#opensource .ouro-principle-card:nth-of-type(2) h3',
  'source-2-body': '#opensource .ouro-principle-card:nth-of-type(2) p',
  'source-3-title': '#opensource .ouro-principle-card:nth-of-type(3) h3',
  'source-3-body': '#opensource .ouro-principle-card:nth-of-type(3) p',
  'source-4-title': '#opensource .ouro-principle-card:nth-of-type(4) h3',
  'source-4-body': '#opensource .ouro-principle-card:nth-of-type(4) p',
  'source-5-title': '#opensource .ouro-principle-card:nth-of-type(5) h3',
  'source-5-body': '#opensource .ouro-principle-card:nth-of-type(5) p',
  'source-6-title': '#opensource .ouro-principle-card:nth-of-type(6) h3',
  'source-6-body': '#opensource .ouro-principle-card:nth-of-type(6) p',
  'cta h2': '#cta .ouro-cta-title',
  'cta p': '#cta .ouro-cta-subtitle',
  'footer-cta-primary .btn-label': '[data-dom-id="footer-cta-primary"] .btn-label',
  'footer-cta-secondary .btn-label': '[data-dom-id="footer-cta-secondary"] .btn-label',
  'footer-brand-title': 'footer .font-semibold',
  'footer-brand-copy': 'footer .grid > div:nth-of-type(1) p',
  'footer-product-title': 'footer .grid > div:nth-of-type(2) h4',
  'footer-product-capabilities': 'footer .grid > div:nth-of-type(2) li:nth-of-type(1) a',
  'footer-product-architecture': 'footer .grid > div:nth-of-type(2) li:nth-of-type(2) a',
  'footer-product-roadmap': 'footer .grid > div:nth-of-type(2) li:nth-of-type(3) a',
  'footer-dev-title': 'footer .grid > div:nth-of-type(3) h4',
  'footer-dev-docs': 'footer .grid > div:nth-of-type(3) li:nth-of-type(1) a',
  'footer-dev-jetbrains': 'footer .grid > div:nth-of-type(3) li:nth-of-type(2) a',
  'footer-dev-vscode': 'footer .grid > div:nth-of-type(3) li:nth-of-type(3) a',
  'footer-dev-api': 'footer .grid > div:nth-of-type(3) li:nth-of-type(4) a',
  'footer-dev-github': 'footer .grid > div:nth-of-type(3) li:nth-of-type(5) a',
  'footer-resource-title': 'footer .grid > div:nth-of-type(4) h4',
  'footer-resource-blog': 'footer .grid > div:nth-of-type(4) li:nth-of-type(1) a',
  'footer-resource-changelog': 'footer .grid > div:nth-of-type(4) li:nth-of-type(2) a',
  'footer-resource-community': 'footer .grid > div:nth-of-type(4) li:nth-of-type(3) a',
  'footer-copyright': 'footer .border-t > p',
  'footer-privacy': 'footer .border-t a:nth-of-type(1)',
  'footer-terms': 'footer .border-t a:nth-of-type(2)',
  'footer-github .btn-label': 'footer .border-t a:nth-of-type(3) .btn-label',
};

function getStoredValue(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    return null;
  }
}

function setStoredValue(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    // Local persistence is a convenience; the page should still work without it.
  }
}

function getInitialTheme() {
  const storedTheme = getStoredValue(THEME_STORAGE_KEY);
  if (storedTheme === 'dark' || storedTheme === 'light') return storedTheme;
  if (root.dataset.theme === 'dark' || root.dataset.theme === 'light') return root.dataset.theme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getInitialLocale() {
  const storedLocale = getStoredValue(LOCALE_STORAGE_KEY);
  if (storedLocale === 'zh' || storedLocale === 'en') return storedLocale;
  return root.dataset.locale === 'en' ? 'en' : 'zh';
}

function setTheme(theme) {
  root.dataset.theme = theme;
  root.classList.toggle('dark', theme === 'dark');
  root.classList.toggle('light', theme === 'light');
  setStoredValue(THEME_STORAGE_KEY, theme);

  const locale = translations[getInitialLocale()];
  document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
    const label = locale.themeToggle[theme];
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
  });
}

function applyText(selector, value) {
  const node = document.querySelector(selector);
  if (node) node.textContent = value;
}

function setLocale(localeKey) {
  const locale = translations[localeKey] || translations.zh;
  const pageKey = root.dataset.page || 'home';
  const pageMeta = locale.pages?.[pageKey] || {
    title: locale.title,
    description: locale.description,
  };

  root.dataset.locale = localeKey;
  root.lang = locale.lang;
  document.title = pageMeta.title;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', pageMeta.description);

  Object.entries(locale.text).forEach(([key, value]) => {
    if (key === 'source-link-github') {
      document.querySelectorAll('#opensource .ouro-source-links a:first-child').forEach((link) => {
        if (link.textContent.includes('GitHub')) link.textContent = value;
      });
      return;
    }

    const selector = textTargets[key];
    if (selector) applyText(selector, value);
  });

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const value = locale.text[node.dataset.i18n];
    if (value) node.textContent = value;
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((node) => {
    const value = locale.text[node.dataset.i18nAriaLabel];
    if (value) node.setAttribute('aria-label', value);
  });

  document.querySelectorAll('[data-i18n-title]').forEach((node) => {
    const value = locale.text[node.dataset.i18nTitle];
    if (value) node.setAttribute('title', value);
  });

  document.querySelectorAll('[data-locale-option]').forEach((button) => {
    const active = button.dataset.localeOption === localeKey;
    button.setAttribute('aria-pressed', String(active));
  });

  document.querySelectorAll('.ouro-locale-switch').forEach((switcher) => {
    switcher.setAttribute('aria-label', locale.localeLabel);
  });

  updateMobileMenuLabel();

  setStoredValue(LOCALE_STORAGE_KEY, localeKey);
  setTheme(getInitialTheme());
}

function bindPreferences() {
  document.querySelectorAll('[data-theme-toggle]').forEach((themeButton) => {
    themeButton.addEventListener('click', () => {
      setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
    });
  });

  document.querySelectorAll('[data-locale-option]').forEach((button) => {
    button.addEventListener('click', () => {
      const locale = button.dataset.localeOption === 'en' ? 'en' : 'zh';
      setLocale(locale);
    });
  });
}

function getCurrentLocale() {
  return translations[root.dataset.locale] ? root.dataset.locale : getInitialLocale();
}

function updateMobileMenuLabel() {
  const button = document.querySelector('[data-mobile-menu-toggle]');
  if (!button) return;

  const locale = translations[getCurrentLocale()] || translations.zh;
  const isOpen = button.getAttribute('aria-expanded') === 'true';
  const key = isOpen ? 'mobile-menu-close' : 'mobile-menu-open';
  button.setAttribute('aria-label', locale.text[key]);
  button.setAttribute('title', locale.text[key]);
}

function setMobileMenu(open) {
  const menu = document.querySelector('[data-mobile-menu]');
  const button = document.querySelector('[data-mobile-menu-toggle]');
  if (!menu || !button) return;

  menu.hidden = !open;
  button.setAttribute('aria-expanded', String(open));
  root.classList.toggle('is-mobile-menu-open', open);
  updateMobileMenuLabel();

  if (open) refreshIcons();
}

function bindMobileMenu() {
  const button = document.querySelector('[data-mobile-menu-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');
  if (!button || !menu) return;

  button.addEventListener('click', () => {
    setMobileMenu(button.getAttribute('aria-expanded') !== 'true');
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMobileMenu(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMobileMenu(false);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) setMobileMenu(false);
  });
}

function refreshIcons() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

window.tidestackRefreshIcons = refreshIcons;

bindPreferences();
bindMobileMenu();
setTheme(getInitialTheme());
setLocale(getInitialLocale());
refreshIcons();

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const waves = Array.from(document.querySelectorAll('.ouro-wave:not(.ouro-footer-wave)'));
const boundaryWaves = Array.from(document.querySelectorAll('.ouro-boundary-wave'))
  .map((wave, index) => ({
    wave,
    path: wave.querySelector('path'),
    section: wave.closest('.ouro-page-section'),
    isBottom: wave.classList.contains('ouro-wave-bottom'),
    seed: index * 0.64,
  }))
  .filter((item) => item.path && item.section);
const sectionLinks = Array.from(document.querySelectorAll('[data-section-dot][href^="#"]'));
const sections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);
const finalSection = document.querySelector('#cta');
const snapSections = sections.filter((section) => section !== finalSection);

let waveFrame = 0;
const desktopWaveQuery = window.matchMedia('(min-width: 768px)');
const mobileWaveQuery = window.matchMedia('(max-width: 767px)');
const mobileWaveIdleDelay = 150;
let mobileWaveIdleTimer = 0;
let mobileWaveLastScrollTop = getScrollTop();
let mobileWaveLastScrollAt = performance.now();
let mobileWaveActiveIndex = -1;
let mobileWaveReveal = 0;
let mobileWaveMotion = 0;
let mobileWaveDirection = 1;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

function getScrollTop() {
  return window.scrollY || document.documentElement.scrollTop;
}

function getSectionOffset(section) {
  const nav = document.querySelector('[data-site-nav]');
  const navHeight = nav ? Math.round(nav.getBoundingClientRect().height) : 0;
  return Math.max(0, Math.round(section.offsetTop - navHeight));
}

function getSectionSnapTarget(direction) {
  const currentTop = getScrollTop();
  const threshold = 24;
  const points = snapSections.map(getSectionOffset);

  if (direction > 0) {
    return points.find((point) => point > currentTop + threshold) ?? null;
  }

  return points.findLast((point) => point < currentTop - threshold) ?? null;
}

function isInFinalSection() {
  return finalSection && getScrollTop() >= getSectionOffset(finalSection) - 24;
}

function scrollToSection(targetTop) {
  window.scrollTo({
    top: targetTop,
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
  });
}

function bindSectionSnap() {
  if (snapSections.length < 2) return;

  let wheelRemainder = 0;
  let snappingUntil = 0;
  let touchStartY = null;

  const canSnap = () => window.innerWidth >= 768
    && !root.classList.contains('is-mobile-menu-open')
    && !isInFinalSection();

  window.addEventListener('wheel', (event) => {
    if (!canSnap() || event.ctrlKey || Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;

    const now = performance.now();
    if (now < snappingUntil) {
      event.preventDefault();
      return;
    }

    wheelRemainder += event.deltaY;
    if (Math.abs(wheelRemainder) < 36) return;

    const targetTop = getSectionSnapTarget(wheelRemainder > 0 ? 1 : -1);
    wheelRemainder = 0;
    if (targetTop === null) return;

    event.preventDefault();
    scrollToSection(targetTop);
    snappingUntil = now + 760;
  }, { passive: false });

  window.addEventListener('touchstart', (event) => {
    touchStartY = canSnap() ? event.touches[0]?.clientY ?? null : null;
  }, { passive: true });

  window.addEventListener('touchend', (event) => {
    if (touchStartY === null || !canSnap()) return;

    const endY = event.changedTouches[0]?.clientY ?? touchStartY;
    const deltaY = touchStartY - endY;
    touchStartY = null;
    if (Math.abs(deltaY) < 54) return;

    const targetTop = getSectionSnapTarget(deltaY > 0 ? 1 : -1);
    if (targetTop !== null) scrollToSection(targetTop);
  }, { passive: true });

  window.addEventListener('keydown', (event) => {
    const target = event.target;
    const isTyping = target instanceof HTMLElement && target.matches('input, textarea, select, [contenteditable="true"]');
    if (isTyping || !canSnap()) return;

    const forwardKeys = ['ArrowDown', 'PageDown'];
    const backwardKeys = ['ArrowUp', 'PageUp'];
    const direction = forwardKeys.includes(event.key) || (event.key === ' ' && !event.shiftKey)
      ? 1
      : backwardKeys.includes(event.key) || (event.key === ' ' && event.shiftKey)
        ? -1
        : 0;

    if (direction === 0) return;

    const targetTop = getSectionSnapTarget(direction);
    if (targetTop === null) return;

    event.preventDefault();
    scrollToSection(targetTop);
  });
}

function smoothStep(value) {
  return value * value * (3 - 2 * value);
}

function getMobileWaveIndex() {
  const viewportFocus = window.innerHeight * 0.82;

  return boundaryWaves.reduce((nearestIndex, item) => {
    const nearestDistance = Math.abs(
      boundaryWaves[nearestIndex].section.getBoundingClientRect().bottom - viewportFocus,
    );
    const distance = Math.abs(item.section.getBoundingClientRect().bottom - viewportFocus);
    return distance < nearestDistance ? index : nearestIndex;
  }, 0);
}

function isMobileWaveSuppressed() {
  return finalSection && finalSection.getBoundingClientRect().top < window.innerHeight;
}

function syncMobileWaveMode() {
  const enabled = mobileWaveQuery.matches && !prefersReducedMotion && boundaryWaves.length > 0;
  root.classList.toggle('ouro-mobile-wave-mode', enabled);

  if (!enabled) {
    mobileWaveActiveIndex = -1;
    mobileWaveReveal = 0;
    mobileWaveMotion = 0;
  }
}

function settleMobileWave() {
  if (!mobileWaveQuery.matches || prefersReducedMotion) return;

  mobileWaveReveal = 0;
  mobileWaveMotion = 0;
  requestWaveUpdate();
}

function handleMobileWaveScroll() {
  if (!mobileWaveQuery.matches || prefersReducedMotion) return;

  const now = performance.now();
  const scrollTop = getScrollTop();
  const delta = scrollTop - mobileWaveLastScrollTop;
  const elapsed = Math.max(16, now - mobileWaveLastScrollAt);
  if (Math.abs(delta) < 0.5) return;

  mobileWaveLastScrollTop = scrollTop;
  mobileWaveLastScrollAt = now;
  mobileWaveDirection = delta > 0 ? 1 : -1;
  mobileWaveActiveIndex = getMobileWaveIndex();

  const velocity = clamp((Math.abs(delta) / elapsed) * 18, 0, 1);
  mobileWaveReveal = clamp(0.84 + velocity * 0.16, 0, 1);
  mobileWaveMotion = clamp(0.2 + velocity * 0.8, 0, 1);

  window.clearTimeout(mobileWaveIdleTimer);
  mobileWaveIdleTimer = window.setTimeout(settleMobileWave, mobileWaveIdleDelay);
  requestWaveUpdate();
}

function getWaveReveal(section, scrollTop) {
  if (!desktopWaveQuery.matches) return 1;

  const distance = Math.abs(scrollTop - getSectionOffset(section));
  if (prefersReducedMotion) return distance <= 1 ? 1 : 0;

  const revealDistance = clamp(window.innerHeight * 0.32, 180, 360);
  return smoothStep(1 - clamp(distance / revealDistance, 0, 1));
}

function buildWavePath({ isBottom, seed }, scrollProgress, transitionProgress) {
  const xs = [0, 360, 720, 1080, 1440];
  const baseY = isBottom ? 58 : 54;
  const restAmplitude = isBottom ? 19 : 17;
  const liveAmplitude = 16 * transitionProgress;
  const phase = scrollProgress * Math.PI * 3.2 + seed;
  const drift = Math.sin(scrollProgress * Math.PI * 1.4 + seed) * 6;
  const points = xs.map((x) => {
    const progress = x / 1440;
    const rest = Math.sin(progress * Math.PI * 2 + seed) * restAmplitude;
    const live = Math.sin(progress * Math.PI * 2 - phase) * liveAmplitude;
    const lift = Math.sin(progress * Math.PI + phase * 0.42) * liveAmplitude * 0.36;
    return clamp(baseY + rest + live + lift + drift, 16, 106);
  });

  let d = `M0,${points[0].toFixed(1)}`;
  for (let index = 0; index < xs.length - 1; index += 1) {
    const x0 = xs[index];
    const x1 = xs[index + 1];
    const y0 = points[index];
    const y1 = points[index + 1];
    const handle = (x1 - x0) / 2;
    d += ` C${(x0 + handle).toFixed(1)},${y0.toFixed(1)} ${(x1 - handle).toFixed(1)},${y1.toFixed(1)} ${x1.toFixed(1)},${y1.toFixed(1)}`;
  }

  return isBottom ? `${d} L1440,120 L0,120 Z` : `${d} L1440,0 L0,0 Z`;
}

function updateWaves() {
  waveFrame = 0;
  const scrollTop = getScrollTop();
  const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const scrollProgress = scrollTop / maxScroll;
  const mobileMode = mobileWaveQuery.matches && !prefersReducedMotion;
  const mobileWaveIndex = mobileMode && !isMobileWaveSuppressed() ? mobileWaveActiveIndex : -1;

  boundaryWaves.forEach((item, index) => {
    const reveal = mobileMode
      ? index === mobileWaveIndex ? mobileWaveReveal : 0
      : getWaveReveal(item.section, scrollTop);
    const transitionProgress = 1 - reveal;
    const direction = index % 2 === 0 ? 1 : -1;
    const pathProgress = mobileMode
      ? index === mobileWaveIndex ? mobileWaveMotion * 0.35 : 0
      : transitionProgress;
    const x = mobileMode
      ? Math.sin(scrollProgress * Math.PI * 3 + index * 0.5) * 3 * mobileWaveMotion * mobileWaveDirection
      : Math.sin(scrollProgress * Math.PI * 3 + index * 0.5) * 7 * transitionProgress * direction;

    item.wave.dataset.mobileWaveActive = String(index === mobileWaveIndex);
    item.wave.style.setProperty('--ouro-wave-reveal', reveal.toFixed(3));
    item.wave.style.setProperty('--ouro-wave-rise', `${((1 - reveal) * 100).toFixed(2)}%`);
    item.wave.style.setProperty('--ouro-wave-x', `${x.toFixed(2)}px`);
    item.wave.style.setProperty('--ouro-wave-y', '0px');
    item.path.setAttribute('d', buildWavePath(item, scrollProgress, pathProgress));
  });
}

function requestWaveUpdate() {
  if (waveFrame) return;
  waveFrame = window.requestAnimationFrame(updateWaves);
}

bindSectionSnap();

if (waves.length > 0) {
  syncMobileWaveMode();
  updateWaves();
  window.addEventListener('scroll', requestWaveUpdate, { passive: true });
  window.addEventListener('scroll', handleMobileWaveScroll, { passive: true });
  window.addEventListener('resize', requestWaveUpdate);
  desktopWaveQuery.addEventListener('change', requestWaveUpdate);
  mobileWaveQuery.addEventListener('change', () => {
    syncMobileWaveMode();
    mobileWaveLastScrollTop = getScrollTop();
    mobileWaveLastScrollAt = performance.now();
    requestWaveUpdate();
  });
}

if ('IntersectionObserver' in window && sections.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      const activeEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!activeEntry) return;

      const activeHref = `#${activeEntry.target.id}`;
      sectionLinks.forEach((link) => {
        const active = link.getAttribute('href') === activeHref;
        link.dataset.active = String(active);
        if (active) {
          link.setAttribute('aria-current', 'true');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    },
    { rootMargin: '-38% 0px -52% 0px', threshold: [0, 0.2, 0.55] },
  );

  sections.forEach((section) => observer.observe(section));
}
