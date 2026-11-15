const root = document.documentElement;
const THEME_STORAGE_KEY = 'tidestack-theme';
const LOCALE_STORAGE_KEY = 'tidestack-locale';

const translations = {
  zh: {
    lang: 'zh-CN',
    title: "潮汐栈 — 需求进，应用出",
    description: "以业务语义为中心，让 AI 与开发者协同构建企业应用。从业务建模到应用交付，让页面、流程与代码在同一平台持续演进。",
    pages: {
      home: {
        title: "潮汐栈 — 需求进，应用出",
        description: "以业务语义为中心，让 AI 与开发者协同构建企业应用。从业务建模到应用交付，让页面、流程与代码在同一平台持续演进。",
      },
      architecture: {
        title: '架构 — 潮汐栈',
        description: "以业务模型为语义中心，了解潮汐栈开发平台、运行时基座、模型投影与扩展机制，以及生产交付边界。",
      },
      features: {
        title: '特性 — 潮汐栈',
        description: "用业务模型组织数据、页面、接口、流程与权限，让模型、代码与 AI 协同构建应用，并持续积累可复用资产。",
      },
      roadmap: {
        title: '路线图 — 潮汐栈',
        description: "了解潮汐栈当前产品基础、核心组件开源进展与规划方向。独立运维平台和业务语义演进方向按场景逐步推进。",
      },
    },
    themeToggle: {
      light: '切换到暗色模式',
      dark: '切换到亮色模式',
    },
    localeLabel: '语言切换',
    text: {
      'feat-integration-external-title': "外部接口",
      'feat-integration-external-body': "配置外部 HTTP / RPC 服务的认证、请求方法、地址与参数映射，设置超时和重试，再由逻辑流或代码调用。特殊协议或认证方式通过后端扩展接入。",
      'feat-nav-feat-feedback': "通知与实时反馈",
      'feat-feedback-title': "把待办、结果与状态变化传达给用户",
      'feat-feedback-intro': "业务处理完成或需要人员参与时，通过通知触达相关人员；在线页面需要及时展示变化时，通过实时通道接收状态并更新界面。",
      'feat-feedback-notification-title': "消息通知",
      'feat-feedback-notification-body': "配置通知渠道、标题、内容模板与接收人来源，在待办生成、审批结束或异常发生时发送。模板变量填入业务信息，发送记录用于查询结果和排查失败。",
      'feat-feedback-notification-doc': "查看通知配置 →",
      'feat-feedback-realtime-title': "实时状态推送",
      'feat-feedback-realtime-body': "通过 WebSocket / STOMP 将业务状态变化推送到授权的用户或会话。页面按事件更新展示或重新查询结果；断线重连后重新获取服务端状态。",
      'feat-feedback-realtime-doc': "了解实时通信 →",
      'feat-permissions-organization-title': "组织与岗位",
      'feat-permissions-organization-body': "建立公司、部门、岗位与员工关系，表达人员归属和业务职责。审批人员与通知接收人可以依据相应组织关系解析。",
      'feat-permissions-fields-title': "字段访问权限",
      'feat-permissions-fields-body': "按角色配置字段访问范围，控制记录中哪些信息可被读取或写入。例如向财务开放结算字段，向其他角色限制敏感金额和个人信息。",
      'feat-permissions-audit-title': "业务审计",
      'feat-permissions-audit-body': "为关键 HTTP 业务操作配置日志模板，记录操作人、时间、业务对象、摘要与结果，并对敏感字段脱敏。按业务键回溯操作，完整调用链通过团队的链路追踪系统分析。",
      'feat-nav-feat-approval': "审批流",
      'feat-approval-title': "审批流：组织人员参与的申请与流转",
      'feat-approval-intro': "将流程绑定到业务模型，以该模型的表单和数据作为申请对象，明确由谁处理、可以执行哪些审批动作，以及满足什么条件后进入下一步。",
      'feat-approval-card-0-title': "人员与审批方式",
      'feat-approval-card-0-body': "按角色、岗位、发起人、表单字段或用户自选确定处理人员；配置单签或会签，会签可设置串行、并行与通过比例。",
      'feat-approval-card-1-title': "节点、分支与审批动作",
      'feat-approval-card-1-body': "组织审批、办理、抄送和子流程节点，用条件分支决定流转路径；按业务需要启用退回、拒绝、转办或加签等动作。",
      'feat-approval-card-2-title': "表单权限与处理记录",
      'feat-approval-card-2-body': "为不同节点配置字段可见、可写和必填规则；运行时查看当前节点、候选人员与处理记录，在待办生成或审批结束时按需发送通知。",
      'feat-approval-figure-caption': "审批流编辑器：配置审批节点、处理人员与流转路径",
      'feat-approval-figure-open': "查看完整界面",
      'feat-approval-doc': "查看审批流配置指南 →",
      'feat-integration-message-title': "消息队列",
      'feat-integration-message-body': "配置生产者或消费者绑定，指定主题、分组与路由参数。生产者发送业务消息，消费者接收载荷后交给逻辑流处理；失败、重试和重复投递按中间件与业务规则验证。",
      'arch-contents-label': "架构章节",
      'feat-contents-label': "特性章节",
      'arch-eyebrow': "架构 / ARCHITECTURE",
      'arch-nav-arch-overview': "能力总览",
      'arch-overview-title': "企业级应用基座，一图看清能力全貌",
      'arch-overview-intro': "AI 辅助开发、IDE 专业开发与可视化构建沉淀为应用资产，由统一应用基座承载。身份与访问控制、插件机制贯穿前后端，云原生支持与技术生态提供运行支撑。",
      'arch-overview-figure-caption': "从应用资产到统一应用基座的能力组合；区域表示能力分组，上下位置不表示代码依赖",
      'arch-overview-figure-open': "查看完整架构图",
      'arch-nav-arch-collaboration': "整体协作",
      'arch-nav-arch-platform': "开发平台",
      'arch-nav-arch-runtime': "运行时基座",
      'arch-nav-arch-models': "模型装配",
      'arch-nav-arch-requests': "请求执行",
      'arch-nav-arch-deployment': "部署与隔离",
      'arch-collaboration-figure-caption': "开发者 IDE、开发平台、开发助手、测试环境与应用部署环境的协作关系",
      'arch-collaboration-figure-open': "查看完整架构图",
      'arch-collaboration-card-0-title': "开发平台",
      'arch-collaboration-card-0-body': "在线编辑模型与界面资源，管理应用工作区和版本，创建开发助手与测试运行环境。",
      'arch-collaboration-card-1-title': "开发助手与测试环境",
      'arch-collaboration-card-1-body': "开发助手发现代码扩展中的元数据；测试环境加载当前应用，回传运行日志与状态，供开发者联调验证。",
      'arch-collaboration-card-2-title': "应用部署环境",
      'arch-collaboration-card-2-body': "目标基座装配已交付的模型与扩展，使用独立的配置、访问入口和业务数据处理请求。",
      'arch-collaboration-doc': "阅读完整协作说明 →",
      'arch-collaboration-title': "开发、验证与部署，职责各自清楚",
      'arch-collaboration-intro': "开发平台本身也复用统一运行时基座。交付后的应用由目标环境独立加载运行，后续开发继续在开发平台完成。",
      'arch-platform-figure-caption': "开发平台总体架构：开发界面、模型开发服务、应用工作区与运行资源",
      'arch-platform-figure-open': "查看完整架构图",
      'arch-platform-card-0-title': "模型设计与校验",
      'arch-platform-card-0-body': "业务模型、页面、逻辑流与审批流使用各自的编辑器和模型契约；动作、事件与订阅可查看定义来源和实现绑定。",
      'arch-platform-card-1-title': "应用与资源管理",
      'arch-platform-card-1-body': "应用、版本、后端扩展包、模块树、内置角色和岗位随应用组织；数据源与平台组件库等资源供应用按需引用。",
      'arch-platform-card-2-title': "运行与联调",
      'arch-platform-card-2-body': "通过 Docker 或 Kubernetes 调试后端管理开发助手与测试实例，启停资源并查看日志和运行状态。",
      'arch-platform-doc': "深入了解开发平台 →",
      'arch-platform-title': "开发平台：围绕应用工作区组织开发",
      'arch-platform-intro': "建模界面、模型开发服务、应用管理和运行管理协作，保存业务定义、扩展依赖、界面资源及版本内容。",
      'arch-runtime-figure-caption': "统一运行时基座的前后端分工、模型引擎、公共服务与安全体系",
      'arch-runtime-figure-open': "查看完整架构图",
      'arch-runtime-card-0-title': "前端基座",
      'arch-runtime-card-0-body': "组织菜单、路由、页签与弹窗；用 PrismUI 渲染 UI Schema，承载微前端与组件包，并提供认证、请求、主题和国际化接口。",
      'arch-runtime-card-1-title': "后端基座",
      'arch-runtime-card-1-body': "装配模型与扩展，运行数据访问、业务动作、逻辑流和审批流，提供通知、任务调度、RPC 和文件等公共能力。",
      'arch-runtime-card-2-title': "技术与接入",
      'arch-runtime-card-2-body': "前端以 React 和 SDK 组织扩展，后端以 Java 21、Spring Boot 和 SPI 装配模块；数据库、缓存、消息队列与外部服务通过适配器连接。",
      'arch-frontend-details': "展开前端基座技术架构",
      'arch-frontend-figure-caption': "前端页面容器、SDK、公共服务、运行内核与构建工具",
      'arch-frontend-figure-open': "查看完整架构图",
      'arch-backend-details': "展开后端基座技术架构",
      'arch-backend-figure-caption': "后端协议接入、业务服务、核心引擎、基础设施与安全机制",
      'arch-backend-figure-open': "查看完整架构图",
      'arch-runtime-title': "统一运行时基座：前端呈现，后端执行",
      'arch-runtime-intro': "前后端基座围绕同一套应用定义协作，通过 HTTP 和 WebSocket 连接。公共运行机制供开发平台和业务应用共同复用。",
      'arch-models-figure-caption': "定义来源、同名解析、业务模型投射与模型构建的装配过程",
      'arch-models-figure-open': "查看完整架构图",
      'arch-models-card-0-title': "业务语义投影",
      'arch-models-card-0-body': "业务模型投射数据、页面、接口和权限等定义；投射结果继续进入目标模型的正式装配流程，目标模型保留自己的契约。",
      'arch-models-card-1-title': "分层定制",
      'arch-models-card-1-body': "产品基础与应用差异分别保存。模块树可合并菜单与权限引用，UI Schema 则选择高优先级的完整定义，具体取舍由模型类型决定。",
      'arch-models-card-2-title': "生效与刷新",
      'arch-models-card-2-body': "模型构建后注册页面路由、接口和执行契约。变更按对应模型的刷新或重启要求生效，应用资源与模型运行时各司其职。",
      'arch-models-doc': "了解模型装配与覆盖规则 →",
      'arch-models-title': "从元数据定义，到真正生效的运行模型",
      'arch-models-intro': "程序与插件、应用目录和支持的运行时来源提供定义。各类模型按自己的规则解析、合并或覆盖，再进入构建与注册过程。",
      'arch-requests-figure-caption': "页面加载、接口分派、业务动作、逻辑流与数据访问的协作时序",
      'arch-requests-figure-open': "查看完整架构图",
      'arch-requests-card-0-title': "动作执行",
      'arch-requests-card-0-body': "业务动作声明输入、输出和权限，由统一运行时进行校验与事务处理，再调用逻辑流或 Handler 实现。",
      'arch-requests-card-1-title': "事件与订阅",
      'arch-requests-card-1-body': "业务事件保存已经发生的事实，订阅通过 Outbox 机制至少一次投递；失败交付可诊断和显式重驱，消费逻辑需要处理重复投递。",
      'arch-requests-card-2-title': "访问控制",
      'arch-requests-card-2-body': "菜单、页面、接口与数据访问分别受权限约束。后端继续校验身份、角色和凭据授权，数据模型执行行级条件与字段范围。",
      'arch-requests-doc': "查看请求执行与访问控制 →",
      'arch-requests-title': "一次业务请求，如何走到数据与执行引擎",
      'arch-requests-intro': "UI 模型决定页面入口，UI Schema 描述内容与交互。WebAPI 按契约分派业务请求，逻辑流或代码实现具体处理，再通过数据模型访问数据。",
      'arch-deployment-figure-caption': "开发与运行环境、部署载体、存储和访问入口的边界",
      'arch-deployment-figure-open': "查看完整架构图",
      'arch-deployment-card-0-title': "环境隔离",
      'arch-deployment-card-0-body': "开发、测试和生产分别管理入口、凭据、数据源与持久化目录；应用元数据、日志、上传文件和数据库按用途保存。",
      'arch-deployment-card-1-title': "部署形态",
      'arch-deployment-card-1-body': "原生、容器与云原生形态承载相同的应用定义和基座。仓库提供镜像与 Compose 安装材料，集群安装清单按目标环境准备。",
      'arch-deployment-card-2-title': "交付衔接",
      'arch-deployment-card-2-body': "版本管理保存已验证的模型与代码组合。生产部署、发布和恢复衔接团队已有流程，数据变更另行管理；独立运维平台仍在规划中。",
      'arch-deployment-doc': "阅读部署与运维手册 →",
      'arch-deployment-title': "部署应用，也要分清环境与资产边界",
      'arch-deployment-intro': "开发环境保存工作区与平台管理数据，应用运行环境保存自己的定义、配置和业务数据。实例可以重建，需要保留的数据应独立持久化。",
      'arch-next-copy': "了解这些机制能构建哪些具体功能。",
      'arch-next': "查看平台特性 →",
      'feat-eyebrow': "特性 / FEATURES",
      'feat-nav-feat-models': "业务与数据",
      'feat-nav-feat-pages': "界面与交互",
      'feat-nav-feat-flows': "逻辑流",
      'feat-nav-feat-integration': "集成与自动化",
      'feat-nav-feat-permissions': "权限与组织",
      'feat-nav-feat-development': "开发与交付",
      'feat-nav-feat-example': "组合示例",
      'feat-models-figure-caption': "业务模型编辑器：配置字段、类型、校验与对象关系",
      'feat-models-figure-open': "查看完整界面",
      'feat-models-card-0-title': "字段与关系",
      'feat-models-card-0-body': "配置字段类型、必填和校验，关联订单与明细、客户与联系人；使用数据字典统一状态和分类，专用字段可通过类型扩展。",
      'feat-models-card-1-title': "标准页面与接口",
      'feat-models-card-1-body': "按视图配置投影列表、新建、编辑和详情页面；模型定义关联的数据结构与 WebAPI 使用各自的运行契约。",
      'feat-models-card-2-title': "业务动作与事实",
      'feat-models-card-2-body': "把提交订单、审核、取消等操作定义为动作，绑定逻辑流或后端实现；用事件记录审核通过等事实，供后续订阅处理。",
      'feat-models-doc': "查看业务模型建模步骤 →",
      'feat-models-title': "定义业务对象，连起字段、关系和操作",
      'feat-models-intro': "从订单、客户、合同等业务对象开始，在一处维护字段含义、对象关系、页面视图、业务动作和访问规则。",
      'feat-pages-figure-caption': "UI Schema 可视化编辑器：组合页面组件、布局与交互",
      'feat-pages-figure-open': "查看完整界面",
      'feat-pages-card-0-title': "列表、表单与详情",
      'feat-pages-card-0-body': "标准页面承接查询和录入，UI Schema 调整布局、组件、数据接口与动作；PrismUI 将声明式组件树渲染为业务界面。",
      'feat-pages-card-1-title': "轻量采集与附件",
      'feat-pages-card-1-body': "问卷、报名和临时台账可使用动态表单，部署后支持筛选与 Excel 导入导出；附件和文档能力组织上传文件与共享资料。",
      'feat-pages-card-2-title': "看板与专用交互",
      'feat-pages-card-2-body': "数据集、图表和仪表板呈现业务指标，Widget 组合工作台栏目；复杂调度、画布等交互通过组件或微前端接入同一应用。",
      'feat-pages-doc': "选择适合的页面实现方式 →",
      'feat-pages-title': "从标准表单，到专用业务工作台",
      'feat-pages-intro': "简单页面通过配置完成，需要调整结构时编辑 UI Schema，复杂交互再使用组件或独立页面扩展。",
      'feat-flows-figure-caption': "逻辑流编辑器：编排节点、连线、输入输出与业务处理",
      'feat-flows-figure-open': "查看完整界面",
      'feat-flows-card-0-title': "节点与条件分支",
      'feat-flows-card-0-body': "连接数据操作、转换和接口调用节点，配置输入输出映射与分支条件；例如校验订单、计算金额，再保存处理结果。",
      'feat-flows-card-1-title': "表达式、脚本与扩展",
      'feat-flows-card-1-body': "表达式处理默认值和短计算，脚本完成局部计算与分支；需要专用算法或协议时，注册自定义节点或调用代码实现。",
      'feat-flows-card-2-title': "调用与调试",
      'feat-flows-card-2-body': "逻辑流可作为业务动作或 WebAPI 的实现，也可由计划任务或消息消费者调用。通过调试会话检查节点输入输出，定位失败步骤。",
      'feat-flows-doc': "了解规则、脚本与逻辑流 →",
      'feat-flows-title': "逻辑流：编排机器执行的业务步骤",
      'feat-flows-intro': "用节点与连线组织数据读取、校验、计算和接口调用，按条件分支完成一次自动处理。适用于保存前校验、金额计算、数据转换和系统同步。",
      'feat-integration-card-0-title': "数据源",
      'feat-integration-card-0-body': "为应用定义稳定的数据源名称，按环境绑定到平台数据源。数据集、逻辑流等引用应用数据源名称，连接地址与凭据由对应环境统一维护。",
      'feat-integration-card-1-title': "计划任务",
      'feat-integration-card-1-body': "使用 Cron 表达式设置执行时间，选择逻辑流并配置固定输入，完成每日汇总、周期同步或定时清理。指定延迟后执行一次的处理，由业务逻辑另行创建延迟任务。",
      'feat-integration-doc': "查看集成与自动化指南 →",
      'feat-integration-title': "对接已有系统，处理异步与周期工作",
      'feat-integration-intro': "把数据库、HTTP 接口、消息和调度接入业务处理链路。同步 ERP、定期汇总或后台处理，都有对应的配置与扩展入口。",
      'feat-permissions-card-0-title': "角色权限",
      'feat-permissions-card-0-body': "定义应用内置角色，为用户分配角色，按职责授予菜单、页面、接口与业务操作权限。例如销售可以提交订单，主管可以审核订单。",
      'feat-permissions-card-1-title': "行级数据权限",
      'feat-permissions-card-1-body': "用筛选条件限定角色可访问的业务记录。例如销售仅查看自己的订单，部门负责人查看本部门的数据，规则在后端数据访问时执行。",
      'feat-permissions-card-2-title': "身份认证",
      'feat-permissions-card-2-body': "通过对应适配接入 OIDC、CAS、企业目录或协作平台登录，确认访问者身份。登录后的页面、接口和数据访问继续由角色与权限规则约束。",
      'feat-permissions-doc': "了解组织、权限与配置 →",
      'feat-permissions-title': "从入口到字段，配置业务访问范围",
      'feat-permissions-intro': "角色、岗位和组织定义人员职责，权限项约束菜单、页面和接口，数据规则继续约束能看到哪些记录、哪些字段。",
      'feat-development-figure-caption': "应用开发工作区：模型关系、开发入口、运行工具栏与最近修改",
      'feat-development-figure-open': "查看完整界面",
      'feat-development-card-0-title': "沿用工程工具",
      'feat-development-card-0-body': "通过 IDEA / VS Code 插件编辑元数据并绑定项目，用 Java / Spring Boot 实现后端扩展，用组件和微前端扩展界面；本地 IDE 可与平台测试实例联调。",
      'feat-development-card-1-title': "让 AI 读懂任务",
      'feat-development-card-1-body': "向 AI 提供业务目标、模型、Schema、手册与 Skills，辅助分析、修改和校验；生成的模型与代码进入原有项目，由开发者评审和验收。",
      'feat-development-card-2-title': "运行验证与版本交付",
      'feat-development-card-2-body': "创建或刷新测试实例，查看日志并验证正常、异常和无权限场景；版本记录模型与代码的配套组合，生产部署和数据变更按团队流程管理。",
      'feat-development-doc': "阅读融合开发与联调指南 →",
      'feat-development-title': "模型、代码与 AI，在同一应用中协作",
      'feat-development-intro': "可视化编辑保存模型定义，代码扩展补充专用实现，AI 根据模型与文档辅助开发。应用工作区、测试实例和版本管理连接这些成果。",
      'feat-example-0-title': "定义订单与明细",
      'feat-example-0-body': "确定字段、客户关系、状态与可执行动作，配置标准列表、表单和详情。",
      'feat-example-1-title': "接入人工审核",
      'feat-example-1-body': "用审批流指定审核人员和通过、驳回路径，权限控制谁可以提交与审核。",
      'feat-example-2-title': "同步 ERP",
      'feat-example-2-body': "审核通过后由逻辑流调用外部接口；耗时同步可通过消息队列异步处理，保存同步结果与失败信息。",
      'feat-example-3-title': "补充调度工作台",
      'feat-example-3-body': "为复杂调度编写组件或微前端，继续调用同一应用的业务接口，实时展示处理状态。",
      'feat-example-4-title': "验证并留档",
      'feat-example-4-body': "检查正常、驳回、同步失败和无权限场景，保存配套版本，再按团队部署流程交付。",
      'feat-example-doc': "从第一个应用开始 →",
      'feat-example-title': "把能力串起来：一个订单审核应用",
      'feat-example-intro': "以下是组合示例：销售录入订单，主管审核，审核通过后同步 ERP，调度人员在专用工作台安排交付。",
      'feat-next-copy': "了解模型、执行引擎与运行基座如何支撑这些功能。",
      'feat-next': "查看平台架构 →",
      'source-link-components': "开放组件",
      'source-link-docs': "阅读手册",
      'roadmap-detail-3-body': "独立运维平台仍在规划中。机器可读业务语义与本体化能力是演进方向，跨模型语义查询、共享能力契约等将按真实场景逐步验证，当前不承诺完整业务本体或自主智能系统。",
      'roadmap-detail-3-title': "规划与探索",
      'roadmap-detail-2-body': "围绕业务语义、模型契约、开发工具和可复用组件持续完善能力。核心组件正在逐一开源，具体组件以对应仓库与发布记录为准。",
      'roadmap-detail-2-title': "持续推进",
      'roadmap-detail-1-body': "开发平台与运行时基座承接应用设计、测试运行与业务执行。模型、代码扩展、版本管理及现有交付流程共同支撑应用建设。",
      'roadmap-detail-1-title': "当前基础",
      'philosophy-card-3-subtitle': "让业务语义先于实现",
      'philosophy-card-2-subtitle': "按业务价值选择开发方式",
      'philosophy-card-1-subtitle': "开放标准与渐进演进",
      'nav-home': '首页',
      'nav-brand': '潮汐栈',
      'nav-vision': '愿景',
      'nav-philosophy': '理念',
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
      'section-vision': "持续积累",
      'section-philosophy': "三项原则",
      'section-architecture': "应用投影",
      'section-fusion': "协同开发",
      'section-capabilities': "业务模型",
      'section-opensource': "产品与开放",
      'section-cta': '开始',
      'standalone-architecture-title': "一套模型契约，连接开发与运行",
      'standalone-architecture-copy': "开发平台维护模型、界面与代码扩展，测试环境验证应用，目标环境中的统一运行时基座负责实际运行。从整体协作到模型装配，了解各部分如何连接、由谁执行。",
      'standalone-features-title': "围绕业务模型，构建完整应用",
      'standalone-features-copy': "定义订单与客户，配置列表和表单，编排审核与通知，连接 ERP，再为不同角色设置访问范围。模型、配置和代码在同一应用中配合，AI 参与分析、实现与检查。",
      'standalone-roadmap-title': '路线图',
      'standalone-roadmap-copy': "围绕业务语义、开发协作与经验复用持续演进。核心组件正在逐一开源，独立运维平台仍在规划；未来方向将通过真实业务场景逐步验证。",
      'hero h1': '需求进，应用出',
      'hero-primary-copy': '以业务语义为中心，让 AI 与开发者协同构建企业应用。',
      'hero-secondary-copy': '从业务建模到应用交付，让页面、流程与代码在同一平台持续演进。',
      'hero-cta-primary .btn-label': '快速开始',
      'hero-cta-secondary .btn-label': 'GitHub',
      'vision h2': "每次交付，都为下一次留下资产",
      'vision p': "模型保存业务知识，组件与扩展保存实现经验，版本记录经过验证的组合，运行反馈成为下一轮改进的依据。团队可以从一个模型、一段流程或一个业务领域开始，与既有系统逐步衔接，让建设随着价值自然扩展。",
      'vision li:nth-of-type(1) span.ouro-body': "模型沉淀业务对象、关系、规则与行为",
      'vision li:nth-of-type(2) span.ouro-body': "组件和扩展沉淀经过验证的实现经验",
      'vision li:nth-of-type(3) span.ouro-body': "版本与运行反馈进入下一轮持续演进",
      'loop-model-title': '模型',
      'loop-model-subtitle': "业务知识",
      'loop-app-title': '应用',
      'loop-app-subtitle': "运行验证",
      'loop-asset-title': '资产',
      'loop-asset-subtitle': "版本沉淀",
      'loop-demand-title': '需求',
      'loop-demand-subtitle': '业务输入',
      'loop-ai-title': "AI 协作",
      'loop-ai-subtitle': "理解 · 生成 · 校验",
      'philosophy h2': "贯穿始终的三项原则",
      'philosophy p': "它们决定潮汐栈如何表达业务、组织能力，以及与既有系统共同演进。",
      'philosophy-card-1-title': '开放化',
      'philosophy-card-1-body': "遵循开放标准，以微核心、插件机制和清晰契约连接既有系统。产品能力与项目定制分层保存，使平台升级与业务扩展可以分别演进；核心组件正在逐一开源，团队可以从合适的边界渐进引入。",
      'philosophy-card-2-title': '融合化',
      'philosophy-card-2-body': "以二八原则组织开发：模型与配置承接大量通用需求，代码处理复杂交互、专用算法和特殊集成，AI 参与理解、生成与校验。不同方式共享业务模型和运行机制，让专业开发投入真正形成业务差异的部分。",
      'philosophy-card-3-title': '标准化',
      'philosophy-card-3-body': "先用结构化模型声明业务对象、关系、动作、事件、视图和权限，再由平台完成通用投影与执行。模型、Schema 和扩展契约成为人、AI 与运行时共同理解、校验和演进的依据。",
      'life-card-design-title': "数据与接口",
      'life-card-design-subtitle': "结构 · 查询 · API",
      'life-card-runtime-title': "页面与交互",
      'life-card-runtime-subtitle': "表单 · 视图 · 组件",
      'life-card-ops-title': "流程与权限",
      'life-card-ops-subtitle': "动作 · 审批 · 授权",
      'life-core-title': "业务模型",
      'life-core-subtitle': "共同语义核心",
      'architecture h2': "一份业务定义，展开成完整应用",
      'architecture > copy': "业务模型中的定义投影到数据、页面、接口、导航与权限，流程和代码围绕这些定义组合。声明业务目标、规则和约束，让平台承担通用的执行过程。",
      'architecture-item-1-title': "数据与接口",
      'architecture-item-1-body': "模型驱动数据结构、查询和 Web API，减少在不同实现中重复表达同一条业务规则。",
      'architecture-item-2-title': "页面与交互",
      'architecture-item-2-body': "按模型配置投影标准列表、表单与详情，复杂交互通过 UI Schema、组件和代码继续扩展。",
      'architecture-item-3-title': "流程与权限",
      'architecture-item-3-body': "逻辑流编排机器执行，审批流组织人员参与；权限分别约束入口、操作与数据访问。",
      'fusion h2': "平台承接通用需求，代码延伸业务差异",
      'fusion p': "以二八原则安排开发方式与精力：模型和配置承接大量通用需求，把专业开发投入高价值功能。AI 参与理解、生成和校验，开发者负责判断与验收。",
      'fusion-card-1-title': "模型与配置",
      'fusion-card-1-body': "标准列表、表单、详情、权限和流程，通过模型、组件与可视化编排实现。比例表达开发取舍，具体项目按需求选择。",
      'fusion-card-2-title': "代码扩展",
      'fusion-card-2-body': "复杂交互、专用算法、特殊协议和既有系统集成，由前后端扩展补足，并继续沿用平台的身份、权限与运行机制。",
      'fusion-card-3-title': "AI 协作",
      'fusion-card-3-body': "AI 读取模型、Schema、手册和项目实现，协助拆解需求、修改定义与代码并检查结果；人负责设计取舍、授权和交付验收。",
      'capabilities h2': "业务模型，是共同的业务语言",
      'capabilities p': "属性、关系、动作、事件、视图与权限集中在同一份业务定义中，让人、AI 与运行时直接理解业务对象的含义。",
      'capability-1-title': "属性",
      'capability-1-body': "描述对象包含的数据，以及类型、校验等约束",
      'capability-2-title': "关系",
      'capability-2-body': "表达业务对象之间的联系与关联数据的组织方式",
      'capability-3-title': "动作",
      'capability-3-body': "声明可执行操作的输入、输出、条件与实现",
      'capability-4-title': "事件",
      'capability-4-body': "定义已经发生的业务事实及后续订阅处理",
      'capability-5-title': "视图",
      'capability-5-body': "组织列表、表单和详情如何呈现业务对象",
      'capability-6-title': "权限",
      'capability-6-body': "约束谁可以访问入口、数据与业务行为",
      'opensource h2': "从应用构建，到运行与开放复用",
      'opensource p': "开发平台与运行时基座围绕同一套应用定义协作。核心组件正在逐一开源，团队可按组件接入约定，在已有体系中复用能力。",
      'source-1-title': "开发平台",
      'source-1-body': "设计模型、配置页面与流程，接入扩展，管理应用版本并进行测试运行。",
      'source-2-title': "运行时基座",
      'source-2-body': "加载模型与扩展，呈现页面，提供接口，执行业务规则与权限控制。",
      'source-3-title': "生产交付",
      'source-3-body': "部署、发布与恢复衔接团队已有流程，升级时验证兼容性。独立运维平台仍在规划中。",
      'source-4-title': "数据与逻辑组件",
      'source-4-body': "动态数据模型与逻辑流组织数据结构、查询和业务处理，可通过正式扩展点补充能力。",
      'source-5-title': "PrismUI 与元数据规范",
      'source-5-body': "UI Schema 驱动企业应用界面，结构化元数据为人、AI 与运行时提供共同契约。",
      'source-6-title': "Skills 与 IDE 插件",
      'source-6-body': "手册、Schema、Skills 与开发工具共同支持建模、编码和校验，成果纳入已有版本流程。",
      'source-link-github': 'GitHub 仓库',
      'source-link-prismui': 'PrismUI 官网',
      'cta h2': '潮起此刻，上栈启航',
      'cta p': "从第一个业务模型开始，让需求、实现和运行围绕同一份业务语义持续演进。",
      'footer-cta-primary .btn-label': '快速开始',
      'footer-cta-secondary .btn-label': '访问 GitHub',
      'footer-brand-title': '潮汐栈',
      'footer-brand-copy': "以业务语义为中心，让 AI 与开发者协同构建企业应用。",
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
    title: "TideStack — Requirements in, applications out",
    description: "Centered on business semantics, AI and developers collaborate to build enterprise applications. Pages, workflows, and code evolve on one platform from modeling through delivery.",
    pages: {
      home: {
        title: "TideStack — Requirements in, applications out",
        description: "Centered on business semantics, AI and developers collaborate to build enterprise applications. Pages, workflows, and code evolve on one platform from modeling through delivery.",
      },
      architecture: {
        title: 'Architecture — TideStack',
        description: "Explore business models, the development platform, runtime foundation, model projections, extensions, and production delivery boundaries.",
      },
      features: {
        title: 'Features — TideStack',
        description: "Organize data, pages, APIs, workflows, and permissions with business models. Build with models, code, and AI while accumulating reusable assets.",
      },
      roadmap: {
        title: 'Roadmap — TideStack',
        description: "Explore the current product foundation, progressive open-source releases, and planned directions for operations tooling and business semantics.",
      },
    },
    themeToggle: {
      light: 'Switch to dark mode',
      dark: 'Switch to light mode',
    },
    localeLabel: 'Language selector',
    text: {
      'feat-integration-external-title': "External APIs",
      'feat-integration-external-body': "Configure authentication, request methods, URLs, and parameter mappings for external HTTP/RPC services, including timeouts and retries. Invoke them from logic flows or code, using backend extensions for specialized protocols or authentication.",
      'feat-nav-feat-feedback': "Notifications and live feedback",
      'feat-feedback-title': "Deliver tasks, results, and status changes to users",
      'feat-feedback-intro': "Use notifications to reach participants when work needs attention or produces a result. Use realtime channels to update online pages when business status changes.",
      'feat-feedback-notification-title': "Notifications",
      'feat-feedback-notification-body': "Configure channels, titles, content templates, and recipient sources. Send notifications when tasks are created, approvals complete, or errors occur. Template variables carry business information, and delivery records support result queries and troubleshooting.",
      'feat-feedback-notification-doc': "Configure notifications →",
      'feat-feedback-realtime-title': "Realtime status updates",
      'feat-feedback-realtime-body': "Push business status changes to authorized users or sessions over WebSocket/STOMP. Pages update their display or query the result when an event arrives, and reload server state after reconnecting.",
      'feat-feedback-realtime-doc': "Explore realtime communication →",
      'feat-permissions-organization-title': "Organization and positions",
      'feat-permissions-organization-body': "Define companies, departments, positions, and employee relationships to express membership and responsibilities. Approval participants and notification recipients can be resolved from these relationships.",
      'feat-permissions-fields-title': "Field access",
      'feat-permissions-fields-body': "Configure field access by role to control which information can be read or written. For example, grant finance access to settlement fields while restricting sensitive amounts and personal information for other roles.",
      'feat-permissions-audit-title': "Business audit",
      'feat-permissions-audit-body': "Configure log templates for key HTTP business operations, recording the actor, time, business object, summary, and result with sensitive fields masked. Trace operations by business key, and use the team’s tracing system for full call chains.",
      'feat-nav-feat-approval': "Approval workflows",
      'feat-approval-title': "Approval workflows: organize human decisions and routing",
      'feat-approval-intro': "Bind a workflow to a business model whose forms and data represent the request. Define who handles each step, which approval actions are available, and the conditions for routing to the next step.",
      'feat-approval-card-0-title': "Participants and approval modes",
      'feat-approval-card-0-body': "Select participants by role, position, initiator, form field, or user choice. Configure single approval or countersigning, with sequential or parallel execution and a required approval percentage.",
      'feat-approval-card-1-title': "Nodes, branches, and approval actions",
      'feat-approval-card-1-body': "Compose approval, handling, copy, and subprocess nodes, with conditional routing. Enable actions such as return, reject, transfer, or adding approvers as required by the business.",
      'feat-approval-card-2-title': "Form permissions and processing records",
      'feat-approval-card-2-body': "Configure field visibility, editability, and required values for each node. Inspect current nodes, candidates, and processing records, and send notifications when tasks are created or approvals complete.",
      'feat-approval-figure-caption': "Approval workflow editor: nodes, participants, and routing",
      'feat-approval-figure-open': "Open full screenshot (Chinese)",
      'feat-approval-doc': "Read the approval workflow guide →",
      'feat-integration-message-title': "Message queues",
      'feat-integration-message-body': "Configure producer or consumer bindings with destinations, groups, and routing parameters. Producers publish messages; consumers pass received payloads to logic flows. Validate failures, retries, and duplicate delivery against middleware and business rules.",
      'arch-contents-label': "Architecture sections",
      'feat-contents-label': "Feature sections",
      'arch-eyebrow': "ARCHITECTURE",
      'arch-nav-arch-overview': "Capability overview",
      'arch-overview-title': "An overview of the enterprise application foundation",
      'arch-overview-intro': "AI-assisted development, IDE coding, and visual building produce application assets that run on a shared foundation. Identity, access control, and plugins span the frontend and backend, supported by cloud-native infrastructure and the technology ecosystem.",
      'arch-overview-figure-caption': "How application assets connect to the foundation’s capabilities. Regions group capabilities; vertical placement does not imply code dependencies.",
      'arch-overview-figure-open': "Open full diagram (Chinese)",
      'arch-nav-arch-collaboration': "System collaboration",
      'arch-nav-arch-platform': "Development platform",
      'arch-nav-arch-runtime': "Runtime foundation",
      'arch-nav-arch-models': "Model assembly",
      'arch-nav-arch-requests': "Request execution",
      'arch-nav-arch-deployment': "Deployment",
      'arch-collaboration-figure-caption': "How the IDE, platform, development helper, test environment, and deployed application collaborate",
      'arch-collaboration-figure-open': "Open full diagram (Chinese)",
      'arch-collaboration-card-0-title': "Development platform",
      'arch-collaboration-card-0-body': "Edit models and UI resources, manage application workspaces and versions, and create development helpers and test environments.",
      'arch-collaboration-card-1-title': "Helpers and test environments",
      'arch-collaboration-card-1-body': "The helper discovers metadata in code extensions. Test environments load the application and return logs and status for debugging and validation.",
      'arch-collaboration-card-2-title': "Application environment",
      'arch-collaboration-card-2-body': "The target runtime loads delivered models and extensions, with its own configuration, access endpoints, and business data.",
      'arch-collaboration-doc': "Read about system collaboration →",
      'arch-collaboration-title': "Development, validation, and deployment have distinct roles",
      'arch-collaboration-intro': "The platform itself reuses the unified runtime. Delivered applications load and run in their target environments while development continues on the platform.",
      'arch-platform-figure-caption': "Development platform: editors, model services, application workspaces, and managed runtime resources",
      'arch-platform-figure-open': "Open full diagram (Chinese)",
      'arch-platform-card-0-title': "Model design and validation",
      'arch-platform-card-0-body': "Business models, pages, logic flows, and approval workflows each have their own editor and contract. Actions, events, and subscriptions expose definition sources and implementation bindings.",
      'arch-platform-card-1-title': "Applications and resources",
      'arch-platform-card-1-body': "Manage application versions, backend extensions, module trees, built-in roles, and positions. Applications reference resources such as data sources and platform component libraries.",
      'arch-platform-card-2-title': "Running and debugging",
      'arch-platform-card-2-body': "Manage helpers and test instances through Docker or Kubernetes debugging backends, start and stop resources, and inspect logs and runtime status.",
      'arch-platform-doc': "Explore the development platform →",
      'arch-platform-title': "The development platform organizes work around an application workspace",
      'arch-platform-intro': "Model editors, model development services, application management, and runtime management work together around business definitions, extension dependencies, UI resources, and versions.",
      'arch-runtime-figure-caption': "Frontend and backend responsibilities, model engines, shared services, and security",
      'arch-runtime-figure-open': "Open full diagram (Chinese)",
      'arch-runtime-card-0-title': "Frontend foundation",
      'arch-runtime-card-0-body': "Manage menus, routes, tabs, and dialogs; render UI Schema with PrismUI; host microfrontends and component packages; and provide authentication, requests, themes, and localization.",
      'arch-runtime-card-1-title': "Backend foundation",
      'arch-runtime-card-1-body': "Load models and extensions; execute data access, business actions, logic flows, and approvals; and provide notifications, scheduling, RPC, and file services.",
      'arch-runtime-card-2-title': "Technology and integration",
      'arch-runtime-card-2-body': "React and the SDK organize frontend extensions. Java 21, Spring Boot, and SPI assemble backend modules. Adapters connect databases, caches, message queues, and external services.",
      'arch-frontend-details': "Expand frontend technical architecture",
      'arch-frontend-figure-caption': "Frontend containers, SDK, shared services, runtime kernels, and build tools",
      'arch-frontend-figure-open': "Open full diagram (Chinese)",
      'arch-backend-details': "Expand backend technical architecture",
      'arch-backend-figure-caption': "Backend protocols, business services, core engines, infrastructure, and security",
      'arch-backend-figure-open': "Open full diagram (Chinese)",
      'arch-runtime-title': "A unified runtime: presentation in the frontend, execution in the backend",
      'arch-runtime-intro': "The frontend and backend share application definitions and communicate over HTTP and WebSocket. The development platform and business applications reuse the same runtime mechanisms.",
      'arch-models-figure-caption': "Definition sources, resolution, business model projections, and runtime model construction",
      'arch-models-figure-open': "Open full diagram (Chinese)",
      'arch-models-card-0-title': "Business projections",
      'arch-models-card-0-body': "Business models project definitions into data, pages, APIs, and permissions. Projections enter the target model’s normal assembly process and retain its contract.",
      'arch-models-card-1-title': "Layered customization",
      'arch-models-card-1-body': "Keep product definitions and application changes in separate layers. Module trees merge menu and permission references; UI Schema selects a complete higher-priority definition. Resolution depends on the model type.",
      'arch-models-card-2-title': "Activation and refresh",
      'arch-models-card-2-body': "Constructed models register page routes, endpoints, and execution contracts. Changes take effect through the refresh or restart required by each model type. Application resources and model runtimes have distinct roles.",
      'arch-models-doc': "Read model assembly and resolution rules →",
      'arch-models-title': "From metadata definitions to effective runtime models",
      'arch-models-intro': "Definitions come from code, plugins, application directories, and supported runtime sources. Each model type resolves, merges, or overrides them according to its own rules before construction and registration.",
      'arch-requests-figure-caption': "Page loading, API dispatch, business actions, logic flows, and data access",
      'arch-requests-figure-open': "Open full diagram (Chinese)",
      'arch-requests-card-0-title': "Action execution",
      'arch-requests-card-0-body': "Actions declare inputs, outputs, and permissions. The runtime validates them, manages the transaction, and invokes the bound logic flow or handler.",
      'arch-requests-card-1-title': "Events and subscriptions",
      'arch-requests-card-1-body': "Business events record facts. Outbox delivery is at least once; failed deliveries support diagnosis and explicit retry, and consumers must handle duplicate delivery.",
      'arch-requests-card-2-title': "Access control",
      'arch-requests-card-2-body': "Menus, pages, endpoints, and data access have distinct permission checks. The backend validates identity, roles, and credential grants; data models enforce row conditions and field scopes.",
      'arch-requests-doc': "Explore request execution and access control →",
      'arch-requests-title': "How a business request reaches execution and data",
      'arch-requests-intro': "UI models define page entry points; UI Schema defines content and interactions. WebAPI contracts dispatch requests to business implementations, which access data through data models.",
      'arch-deployment-figure-caption': "Development and runtime environments, deployment forms, storage, and access boundaries",
      'arch-deployment-figure-open': "Open full diagram (Chinese)",
      'arch-deployment-card-0-title': "Environment isolation",
      'arch-deployment-card-0-body': "Manage endpoints, credentials, data sources, and persistent directories separately for development, test, and production. Retain metadata, logs, uploads, and databases according to their roles.",
      'arch-deployment-card-1-title': "Deployment forms",
      'arch-deployment-card-1-body': "Native, container, and cloud-native deployments host the same definitions and runtime. Images and Compose materials are provided; cluster installation manifests are prepared for the target environment.",
      'arch-deployment-card-2-title': "Delivery handoff",
      'arch-deployment-card-2-body': "Version control records validated model and code combinations. Production deployment, release, and recovery use the team’s delivery process, with data changes managed separately. A standalone operations platform is planned.",
      'arch-deployment-doc': "Read deployment and operations guidance →",
      'arch-deployment-title': "Deploy applications with explicit environment and asset boundaries",
      'arch-deployment-intro': "Development environments retain workspaces and platform management data. Application environments keep their own definitions, configuration, and business data. Instances can be recreated; persistent assets need independent storage.",
      'arch-next-copy': "Explore the concrete features built on these mechanisms.",
      'arch-next': "Explore platform features →",
      'feat-eyebrow': "FEATURES",
      'feat-nav-feat-models': "Business and data",
      'feat-nav-feat-pages': "Pages and interaction",
      'feat-nav-feat-flows': "Logic flows",
      'feat-nav-feat-integration': "Integration",
      'feat-nav-feat-permissions': "Access control",
      'feat-nav-feat-development': "Development",
      'feat-nav-feat-example': "Example",
      'feat-models-figure-caption': "Business model editor: fields, types, validation, and relationships",
      'feat-models-figure-open': "Open full screenshot (Chinese)",
      'feat-models-card-0-title': "Fields and relationships",
      'feat-models-card-0-body': "Configure types, required fields, and validation; relate orders to line items or customers to contacts; and share status values through dictionaries. Custom field types support specialized needs.",
      'feat-models-card-1-title': "Standard pages and APIs",
      'feat-models-card-1-body': "Project list, create, edit, and detail pages from view configuration. Related data structures and WebAPI definitions retain their own runtime contracts.",
      'feat-models-card-2-title': "Actions and facts",
      'feat-models-card-2-body': "Define actions such as submit, approve, and cancel, backed by a logic flow or backend implementation. Record facts such as approval as events for downstream subscriptions.",
      'feat-models-doc': "Follow the business modeling guide →",
      'feat-models-title': "Define business objects, fields, relationships, and actions",
      'feat-models-intro': "Start with objects such as orders, customers, and contracts. Maintain field semantics, relationships, views, actions, and access rules together.",
      'feat-pages-figure-caption': "Visual UI Schema editor: components, layouts, and interactions",
      'feat-pages-figure-open': "Open full screenshot (Chinese)",
      'feat-pages-card-0-title': "Lists, forms, and detail pages",
      'feat-pages-card-0-body': "Standard pages support queries and data entry. Customize layouts, components, endpoints, and actions through UI Schema, rendered by PrismUI.",
      'feat-pages-card-1-title': "Lightweight forms and files",
      'feat-pages-card-1-body': "Use dynamic forms for surveys, registration, or simple ledgers, including filtering and Excel import/export after deployment. Attachments and document features organize uploads and shared materials.",
      'feat-pages-card-2-title': "Dashboards and custom interaction",
      'feat-pages-card-2-body': "Datasets, charts, and dashboards display metrics, while widgets compose workbench sections. Components or microfrontends add specialized scheduling, canvases, and other interactions.",
      'feat-pages-doc': "Choose a page implementation →",
      'feat-pages-title': "From standard forms to specialized workbenches",
      'feat-pages-intro': "Configure standard pages, edit UI Schema when layouts or interactions need customization, and use components or independent page extensions for specialized interactions.",
      'feat-flows-figure-caption': "Logic flow editor: nodes, connections, input/output mapping, and business processing",
      'feat-flows-figure-open': "Open full screenshot (Chinese)",
      'feat-flows-card-0-title': "Nodes and conditional branches",
      'feat-flows-card-0-body': "Connect data operations, transformations, and API calls; configure input/output mappings and branch conditions. For example, validate an order, calculate its total, and save the result.",
      'feat-flows-card-1-title': "Expressions, scripts, and extensions",
      'feat-flows-card-1-body': "Use expressions for defaults and short calculations, scripts for local computation and branching, and custom nodes or code for specialized algorithms and protocols.",
      'feat-flows-card-2-title': "Invocation and debugging",
      'feat-flows-card-2-body': "Use a logic flow to implement a business action or WebAPI, or invoke it from a scheduled task or message consumer. Inspect node inputs and outputs in debugging sessions to locate failures.",
      'feat-flows-doc': "Explore rules, scripts, and logic flows →",
      'feat-flows-title': "Logic flows: compose automated business processing",
      'feat-flows-intro': "Compose data reads, validation, computation, and API calls with nodes and connections. Conditional branches handle automated processing such as pre-save checks, amount calculations, data transformations, and system synchronization.",
      'feat-integration-card-0-title': "Data sources",
      'feat-integration-card-0-body': "Define stable application data source names and bind them to platform data sources per environment. Datasets and logic flows reference those names, while each environment manages its connection details and credentials.",
      'feat-integration-card-1-title': "Scheduled tasks",
      'feat-integration-card-1-body': "Set execution times with a Cron expression, select a logic flow, and configure fixed inputs for daily summaries, periodic synchronization, or scheduled cleanup. One-off delayed processing uses delayed tasks created separately by business logic.",
      'feat-integration-doc': "Read integration and automation guidance →",
      'feat-integration-title': "Connect existing systems and automate asynchronous work",
      'feat-integration-intro': "Connect databases, HTTP APIs, messaging, and scheduling to business processing. ERP synchronization, periodic summaries, and background work each have a configuration or extension path.",
      'feat-permissions-card-0-title': "Role permissions",
      'feat-permissions-card-0-body': "Define application roles, assign users, and grant access to menus, pages, APIs, and business actions. For example, sales staff can submit orders while supervisors can approve them.",
      'feat-permissions-card-1-title': "Row-level data access",
      'feat-permissions-card-1-body': "Use filter conditions to restrict the records a role can access. Sales staff might see their own orders, while department managers see department records. The backend enforces these rules during data access.",
      'feat-permissions-card-2-title': "Authentication",
      'feat-permissions-card-2-body': "Connect OIDC, CAS, enterprise directories, or collaboration platform login through the corresponding adapters to establish identity. Roles and permission rules then govern page, API, and data access.",
      'feat-permissions-doc': "Explore organization, permissions, and configuration →",
      'feat-permissions-title': "Control access from navigation down to individual fields",
      'feat-permissions-intro': "Roles, positions, and organizations describe responsibilities. Permission items control menus, pages, and endpoints; data rules constrain accessible records and fields.",
      'feat-development-figure-caption': "Application workspace: model relationships, development entry points, runtime tools, and recent changes",
      'feat-development-figure-open': "Open full screenshot (Chinese)",
      'feat-development-card-0-title': "Use familiar engineering tools",
      'feat-development-card-0-body': "Edit metadata and bind projects through IDEA/VS Code plugins. Implement backend extensions in Java/Spring Boot, extend interfaces with components or microfrontends, and debug against platform test instances from the IDE.",
      'feat-development-card-1-title': "Give AI the right context",
      'feat-development-card-1-body': "Provide business goals, models, schemas, the handbook, and skills to assist analysis, editing, and validation. Generated models and code enter the existing project for developer review and acceptance.",
      'feat-development-card-2-title': "Validate and deliver versions",
      'feat-development-card-2-body': "Create or refresh test instances, inspect logs, and test success, failure, and unauthorized cases. Versions record matching models and code; production deployment and data changes follow the team’s process.",
      'feat-development-doc': "Read fusion development and debugging guides →",
      'feat-development-title': "Models, code, and AI work within the same application",
      'feat-development-intro': "Visual editors maintain model definitions, code extensions add specialized implementations, and AI assists using model and documentation context. Workspaces, test instances, and version control connect the results.",
      'feat-example-0-title': "Model orders and line items",
      'feat-example-0-body': "Define fields, customer relationships, states, and actions, then configure standard lists, forms, and detail pages.",
      'feat-example-1-title': "Add human approval",
      'feat-example-1-body': "Use an approval workflow for participants and approve/reject paths, with permissions governing submission and approval.",
      'feat-example-2-title': "Synchronize the ERP",
      'feat-example-2-body': "After approval, call an external API from a logic flow. Use a message queue for long-running asynchronous synchronization and retain results and failure information.",
      'feat-example-3-title': "Add a scheduling workbench",
      'feat-example-3-body': "Build components or a microfrontend for specialized scheduling, using the same application APIs and live processing status.",
      'feat-example-4-title': "Validate and record a version",
      'feat-example-4-body': "Test success, rejection, synchronization failure, and unauthorized access. Record the matching version and deliver through the team’s deployment process.",
      'feat-example-doc': "Build your first application →",
      'feat-example-title': "Putting it together: an order approval application",
      'feat-example-intro': "Illustrative scenario: sales enters an order, a supervisor approves it, the order syncs to an ERP, and dispatch staff arrange delivery in a specialized workbench.",
      'feat-next-copy': "See how models, execution engines, and the runtime support these features.",
      'feat-next': "Explore the architecture →",
      'source-link-components': "Open components",
      'source-link-docs': "Read docs",
      'roadmap-detail-3-body': "A standalone operations platform remains planned. Machine-readable business semantics and ontology-oriented capabilities are directions for evolution. Cross-model semantic queries and shared capability contracts will be validated through real use cases; a complete business ontology or autonomous system is not a current commitment.",
      'roadmap-detail-3-title': "Planned and exploratory work",
      'roadmap-detail-2-body': "Continue improving business semantics, model contracts, developer tools, and reusable components. Core components are being open sourced progressively; consult each repository and its release history for status.",
      'roadmap-detail-2-title': "Ongoing work",
      'roadmap-detail-1-body': "The development platform and runtime foundation support application design, test execution, and business operations. Models, code extensions, version management, and existing delivery processes support application development.",
      'roadmap-detail-1-title': "Current foundation",
      'philosophy-card-3-subtitle': "Business meaning before implementation",
      'philosophy-card-2-subtitle': "Choose methods by business value",
      'philosophy-card-1-subtitle': "Open standards, gradual adoption",
      'nav-home': 'Home',
      'nav-brand': 'TideStack',
      'nav-vision': 'Vision',
      'nav-philosophy': 'Ideas',
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
      'section-vision': "Reuse",
      'section-philosophy': "Principles",
      'section-architecture': "Projections",
      'section-fusion': "Collaboration",
      'section-capabilities': "Business model",
      'section-opensource': "Product & openness",
      'section-cta': 'Start',
      'standalone-architecture-title': "Shared model contracts connect development and runtime",
      'standalone-architecture-copy': "The development platform maintains models, UI resources, and code extensions. Test environments validate applications, and the unified runtime foundation runs them in their target environments. Explore the components, contracts, and execution paths.",
      'standalone-features-title': "Build complete applications around business models",
      'standalone-features-copy': "Define orders and customers, configure lists and forms, compose approvals and notifications, connect an ERP, and set access scopes for different roles. Models, configuration, and code work together in one application, with AI assisting analysis, implementation, and checks.",
      'standalone-roadmap-title': 'Roadmap',
      'standalone-roadmap-copy': "Continue improving business semantics, development collaboration, and reuse. Core components are being open sourced progressively. A standalone operations platform remains planned, and future capabilities will be validated through real business scenarios.",
      'hero h1': 'Requirements in, applications out',
      'hero-primary-copy': 'Centered on business semantics, AI and developers collaborate to build enterprise applications.',
      'hero-secondary-copy': 'From business modeling to application delivery, pages, workflows, and code evolve continuously on one platform.',
      'hero-cta-primary .btn-label': 'Quick Start',
      'hero-cta-secondary .btn-label': 'GitHub',
      'vision h2': "Every delivery builds on the last",
      'vision p': "Models preserve business knowledge; components and extensions preserve implementation experience; versions record validated combinations; runtime feedback informs the next improvement. Start with one model, workflow, or business domain, connect to existing systems, and expand as value becomes clear.",
      'vision li:nth-of-type(1) span.ouro-body': "Models preserve business objects, relationships, rules, and behavior",
      'vision li:nth-of-type(2) span.ouro-body': "Components and extensions preserve validated solutions",
      'vision li:nth-of-type(3) span.ouro-body': "Versions and runtime feedback guide the next iteration",
      'loop-model-title': 'Model',
      'loop-model-subtitle': "Business knowledge",
      'loop-app-title': 'App',
      'loop-app-subtitle': "Run & validate",
      'loop-asset-title': 'Asset',
      'loop-asset-subtitle': "Versioned reuse",
      'loop-demand-title': 'Demand',
      'loop-demand-subtitle': 'Business input',
      'loop-ai-title': "AI collaboration",
      'loop-ai-subtitle': "Read · build · check",
      'philosophy h2': "Three principles throughout",
      'philosophy p': "They guide how TideStack expresses business meaning, composes capabilities, and evolves alongside existing systems.",
      'philosophy-card-1-title': 'Open',
      'philosophy-card-1-body': "Open standards, a microkernel, plugins, and clear contracts connect existing systems. Product definitions and project customizations live in separate layers, allowing both to evolve. Core components are being open sourced progressively, so teams can begin at a suitable boundary.",
      'philosophy-card-2-title': 'Integrated',
      'philosophy-card-2-body': "Apply the 80/20 principle: models and configuration cover common needs, code handles complex interactions, algorithms, and integrations, and AI assists with understanding, generation, and validation. Shared models and runtime mechanisms let developers focus on business differentiation.",
      'philosophy-card-3-title': 'Standardized',
      'philosophy-card-3-body': "Declare business objects, relationships, actions, events, views, and permissions in structured models. The platform provides common projections and execution. Models, schemas, and extension contracts give people, AI, and the runtime a shared basis for validation and evolution.",
      'life-card-design-title': "Data & APIs",
      'life-card-design-subtitle': "Structure · Query · API",
      'life-card-runtime-title': "Pages & interaction",
      'life-card-runtime-subtitle': "Forms · Views · UI",
      'life-card-ops-title': "Flows & access",
      'life-card-ops-subtitle': "Actions · Approvals",
      'life-core-title': "Business model",
      'life-core-subtitle': "Shared semantics",
      'architecture h2': "One business definition, a complete application",
      'architecture > copy': "Business definitions project into data, pages, APIs, navigation, and permissions. Workflows and code compose around them. Declare business goals, rules, and constraints; let the platform handle common execution.",
      'architecture-item-1-title': "Data and APIs",
      'architecture-item-1-body': "Models drive data structures, queries, and Web APIs, reducing repeated definitions of the same business rule.",
      'architecture-item-2-title': "Pages and interactions",
      'architecture-item-2-body': "Project standard lists, forms, and detail views from model configuration, then extend interactions through UI Schema, components, and code.",
      'architecture-item-3-title': "Workflows and permissions",
      'architecture-item-3-body': "Logic flows orchestrate automated work; approval flows involve people. Permissions independently govern entry points, operations, and data.",
      'fusion h2': "Common needs through models. Business differences through code.",
      'fusion p': "Use the 80/20 principle to choose methods and allocate effort. Models and configuration cover common needs so developers can focus on high-value features. AI assists with understanding, generation, and validation; people judge and accept the result.",
      'fusion-card-1-title': "Models and configuration",
      'fusion-card-1-body': "Build standard lists, forms, details, permissions, and workflows with models, components, and visual orchestration. The ratio guides trade-offs; each project chooses according to its needs.",
      'fusion-card-2-title': "Code extensions",
      'fusion-card-2-body': "Add complex interactions, specialized algorithms, protocols, and existing-system integrations through frontend and backend extensions that share the platform identity, permissions, and runtime mechanisms.",
      'fusion-card-3-title': "AI collaboration",
      'fusion-card-3-body': "AI reads models, schemas, the handbook, and project code to break down requirements, change definitions and code, and check results. People own design decisions, authorization, and delivery acceptance.",
      'capabilities h2': "Business models give everyone a shared language",
      'capabilities p': "Properties, relationships, actions, events, views, and permissions live in one business definition, giving people, AI, and the runtime direct access to its meaning.",
      'capability-1-title': "Properties",
      'capability-1-body': "Describe object data, types, validation, and constraints",
      'capability-2-title': "Relationships",
      'capability-2-body': "Express links between objects and how related data is organized",
      'capability-3-title': "Actions",
      'capability-3-body': "Declare operation inputs, outputs, conditions, and implementation",
      'capability-4-title': "Events",
      'capability-4-body': "Define business facts and how subscribers respond",
      'capability-5-title': "Views",
      'capability-5-body': "Organize lists, forms, and detail views of business objects",
      'capability-6-title': "Permissions",
      'capability-6-body': "Control access to entry points, data, and business actions",
      'opensource h2': "Build, run, and reuse openly",
      'opensource p': "The development platform and runtime foundation share application definitions. Core components are being open sourced progressively and can be adopted according to their integration contracts.",
      'source-1-title': "Development platform",
      'source-1-body': "Design models, configure pages and workflows, add extensions, manage versions, and test applications.",
      'source-2-title': "Runtime foundation",
      'source-2-body': "Load models and extensions, render pages, expose APIs, and enforce business rules and permissions.",
      'source-3-title': "Production delivery",
      'source-3-body': "Use existing team processes for deployment, release, and recovery. Validate compatibility when upgrading. A standalone operations platform remains planned.",
      'source-4-title': "Data and logic components",
      'source-4-body': "Dynamic data models and logic flows organize structures, queries, and business processing through explicit extension points.",
      'source-5-title': "PrismUI and metadata schemas",
      'source-5-body': "UI Schema drives enterprise interfaces; structured metadata provides shared contracts for people, AI, and the runtime.",
      'source-6-title': "Skills and IDE plugins",
      'source-6-body': "The handbook, schemas, skills, and developer tools support modeling, coding, and validation within existing version workflows.",
      'source-link-github': 'GitHub repo',
      'source-link-prismui': 'PrismUI website',
      'cta h2': 'The tide is here. Start building.',
      'cta p': "Start with one business model. Let requirements, implementation, and runtime evolve around shared business semantics.",
      'footer-cta-primary .btn-label': 'Quick Start',
      'footer-cta-secondary .btn-label': 'Visit GitHub',
      'footer-brand-title': 'TideStack',
      'footer-brand-copy': "Centered on business semantics, AI and developers collaborate to build enterprise applications.",
      'footer-product-title': 'Product',
      'footer-product-capabilities': 'Capabilities',
      'footer-product-architecture': 'Architecture',
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
  'hero-primary-copy': '#hero .ouro-body-lg',
  'hero-secondary-copy': '#hero .ouro-body',
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
  'philosophy-card-1-body': '#philosophy .ouro-philosophy-panel:nth-of-type(1) p.ouro-body',
  'philosophy-card-2-title': '#philosophy .ouro-philosophy-panel:nth-of-type(2) h3',
  'philosophy-card-2-body': '#philosophy .ouro-philosophy-panel:nth-of-type(2) p.ouro-body',
  'philosophy-card-3-title': '#philosophy .ouro-philosophy-panel:nth-of-type(3) h3',
  'philosophy-card-3-body': '#philosophy .ouro-philosophy-panel:nth-of-type(3) p.ouro-body',
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
  'footer-privacy': '[data-dom-id="footer-privacy"]',
  'footer-terms': '[data-dom-id="footer-terms"]',
  'footer-github .btn-label': '[data-dom-id="footer-github"] .btn-label',
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
    path: wave.querySelector('path:not(.ouro-wave-back)'),
    backPath: wave.querySelector('.ouro-wave-back'),
    section: wave.closest('.ouro-page-section'),
    isBottom: wave.classList.contains('ouro-wave-bottom'),
    seed: index * 0.64,
  }))
  .filter((item) => item.path && item.section);

boundaryWaves.forEach(({ wave, path, backPath }) => {
  if (backPath) wave.insertBefore(backPath, path);
});
const sectionLinks = Array.from(document.querySelectorAll('[data-section-dot][href^="#"]'));
const sections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);
const finalSection = document.querySelector('#cta');
const snapSections = sections.filter((section) => section !== finalSection);

let waveFrame = 0;
const desktopWaveQuery = window.matchMedia('(min-width: 768px)');
let waveMotionFrame = 0;

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
  const isLongSection = (index) => snapSections[index].offsetHeight > window.innerHeight + threshold;
  const sectionBottom = (index) => Math.max(
    points[index],
    snapSections[index].offsetTop + snapSections[index].offsetHeight - window.innerHeight,
  );
  const currentIndex = points.findLastIndex((point) => point <= currentTop + threshold);

  // Let long sections scroll fully before snapping to the next boundary.
  if (currentIndex >= 0) {
    const top = points[currentIndex];
    const bottom = sectionBottom(currentIndex);
    if (isLongSection(currentIndex)
      && (direction > 0 ? currentTop < bottom - threshold : currentTop > top + threshold)) {
      return null;
    }
  }

  if (direction > 0) {
    return points.find((point) => point > currentTop + threshold) ?? null;
  }

  const previousIndex = points.findLastIndex((point) => point < currentTop - threshold);
  if (previousIndex < 0) return null;
  return isLongSection(previousIndex) ? sectionBottom(previousIndex) : points[previousIndex];
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

function getWaveReveal(section, scrollTop) {
  if (!desktopWaveQuery.matches) return 1;

  const distance = Math.abs(scrollTop - getSectionOffset(section));
  if (prefersReducedMotion) return distance <= 1 ? 1 : 0;

  const revealDistance = clamp(window.innerHeight * 0.32, 180, 360);
  return smoothStep(1 - clamp(distance / revealDistance, 0, 1));
}

function buildWavePath({ isBottom, seed, phaseOffset = 0 }, scrollProgress, transitionProgress, flowProgress, flowPhase) {
  const xs = [0, 180, 360, 540, 720, 900, 1080, 1260, 1440];
  const waveFrequency = Math.PI * 4;
  const baseY = isBottom ? 58 : 54;
  const restAmplitude = isBottom ? 20 : 18;
  const amplitudeScale = 0.92 + Math.sin(seed * 1.9) * 0.08;
  const phase = phaseOffset + seed * 0.08
    + Math.sin(scrollProgress * Math.PI * 2 + seed) * 0.18 * transitionProgress
    + flowPhase * 0.72 * flowProgress
    + Math.sin(flowPhase * 0.75 + seed * 0.4) * 0.08 * flowProgress;
  const drift = Math.sin(scrollProgress * Math.PI * 1.4 + seed) * 3;
  const points = xs.map((x) => {
    const progress = x / 1440;
    const edgeEase = Math.sin(progress * Math.PI);
    const edgeEnvelope = 0.78 + edgeEase * 0.22;
    const edgeGuard = Math.pow(1 - edgeEase, 2) * 18;
    const primary = Math.sin(progress * waveFrequency + phase) * restAmplitude * amplitudeScale;
    const variation = Math.sin(progress * waveFrequency * 0.5 + seed * 0.35 + flowPhase * 0.16) * 0.9;
    return clamp(baseY + (primary + variation) * edgeEnvelope + drift + edgeGuard, 20, 100);
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
  const flowPhase = desktopWaveQuery.matches && !prefersReducedMotion
    ? performance.now() * 0.00042
    : 0;
  let hasFlowingWave = false;

  boundaryWaves.forEach((item, index) => {
    const reveal = getWaveReveal(item.section, scrollTop);
    const transitionProgress = 1 - reveal;
    const direction = index % 2 === 0 ? 1 : -1;
    const pathProgress = transitionProgress;
    const flowProgress = reveal;
    const x = Math.sin(scrollProgress * Math.PI * 3 + index * 0.5) * 7 * transitionProgress * direction;

    item.wave.style.setProperty('--ouro-wave-reveal', reveal.toFixed(3));
    item.wave.style.setProperty('--ouro-wave-rise', `${((1 - reveal) * 100).toFixed(2)}%`);
    item.wave.style.setProperty('--ouro-wave-x', `${x.toFixed(2)}px`);
    item.wave.style.setProperty('--ouro-wave-y', '0px');
    item.path.setAttribute('d', buildWavePath(item, scrollProgress, pathProgress, flowProgress, flowPhase));
    if (item.backPath) {
      const backX = Math.sin(scrollProgress * Math.PI * 2.1 + index * 0.76) * 3.5 * transitionProgress * direction;
      item.wave.style.setProperty('--ouro-wave-back-x', `${backX.toFixed(2)}px`);
      item.backPath.setAttribute(
        'd',
        buildWavePath(
          { ...item, seed: item.seed + 0.48, phaseOffset: Math.PI * 0.62 },
          scrollProgress,
          pathProgress * 0.72,
          flowProgress,
          flowPhase,
        ),
      );
    }
    hasFlowingWave ||= desktopWaveQuery.matches && reveal > 0;
  });

  if (hasFlowingWave && !waveMotionFrame) {
    waveMotionFrame = window.requestAnimationFrame(() => {
      waveMotionFrame = 0;
      requestWaveUpdate();
    });
  }
}

function requestWaveUpdate() {
  if (waveFrame) return;
  waveFrame = window.requestAnimationFrame(updateWaves);
}

bindSectionSnap();

if (waves.length > 0) {
  updateWaves();
  window.addEventListener('scroll', requestWaveUpdate, { passive: true });
  window.addEventListener('resize', requestWaveUpdate);
  desktopWaveQuery.addEventListener('change', requestWaveUpdate);
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
