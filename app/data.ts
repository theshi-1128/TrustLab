export type Project = {id:string; name:string; title:string; en:string; area:string; status:string; kind:'conference'|'journal'|'manuscript'; summary:string; problem:string; method:string[]; tags:string[]; authors?:string; paper?:string; code?:string};
export const projects:Project[] = [
 {id:'recast',name:'RECAST',title:'大语言模型多轮安全风险预测与预警',en:'Forecasting Trajectory-Level Safety Risks in Black-Box Multi-Turn Interactions',authors:'Shi Lin, Peng Qian, Dinghao Liu, Renjie Sun, Sifan Wu, Dezhang Kong, Chenpei Wang, Xun Wang',paper:'https://arxiv.org/abs/2607.26820',area:'大模型安全',status:'研究稿件',kind:'manuscript',summary:'从对话轨迹中捕捉逐步积累的风险，在安全失效发生前发出预警。',problem:'单轮检测难以发现跨轮次积累的风险。我们关注对话尚未失效时，能否利用已有交互预测未来的首次安全失败。',method:['联合局部交互窗口与长程记忆，表征多尺度风险上下文。','以当前轮次为条件重新审视历史证据，识别风险转折。','预测未来窗口内的首次失效风险，为提前干预提供依据。'],tags:['多轮对话','轨迹建模','提前预警']},
 {id:'halluprop',name:'HalluProp',title:'多智能体系统的执行前幻觉风险推断',en:'Before Agents Speak: Pre-hoc Failure Risk Inference in Multi-Agent Systems',authors:'Shi Lin, Chenpei Wang, Peng Qian, Dezhang Kong, Minghao Li, Yufeng Li, Xun Wang',paper:'https://arxiv.org/abs/2607.26836',area:'多智能体可信',status:'研究稿件',kind:'manuscript',summary:'结合角色语义与通信拓扑，分析智能体的内在风险及其潜在传播。',problem:'多智能体系统中的局部错误可能沿通信网络扩散。仅在交互结束后评估答案，难以为系统配置与预防提供及时反馈。',method:['结合任务与角色信息，估计智能体的能力和风险易感性。','根据通信关系建模边上的信息传输与风险传播。','融合内在风险与传播影响，定位需要重点关注的智能体。'],tags:['执行前推断','通信拓扑','风险传播']},
 {id:'evoguard',name:'EvoGuard',title:'基于演化博弈的多智能体幻觉治理',en:'XXX',area:'多智能体可信',status:'研究稿件',kind:'manuscript',summary:'协同调整智能体策略与通信结构，在抑制幻觉的同时保留有效协作。',problem:'删除高风险节点或通信连接可能抑制错误传播，也可能损害集体推理能力。我们研究风险控制与协作保持之间的动态平衡。',method:['持续估计节点内在风险、边传输影响与系统传播风险。','将自我反思、拓扑治理和策略演化纳入统一治理过程。','依据交互反馈自适应调整策略与拓扑，保留有益信息流。'],tags:['演化博弈','动态治理','协作保持']},
 {id:'lara',name:'LARA',title:'检索增强的大模型引导智能合约模糊测试',en:'Unlocking Underexplored States: LLM-Enhanced Smart Contract Fuzzing with Retrieval-Augmented Generation',area:'智能合约安全',status:'研究稿件',kind:'manuscript',summary:'将漏洞知识检索与大模型推理结合，探索深层合约状态和漏洞触发路径。',problem:'合约漏洞往往依赖特定交易序列与状态条件，传统输入变异难以充分覆盖深层状态空间。',method:['检索与目标合约相关的漏洞知识，为分析提供上下文。','利用大模型理解合约逻辑与状态约束，生成有针对性的测试输入。','结合执行反馈持续引导测试，探索尚未充分覆盖的状态。'],tags:['检索增强','漏洞挖掘','模糊测试']},
 {id:'redpj',name:'ReDPJ',title:'基于两阶段自适应推理引导的大模型越狱测试',en:'Reasoning as a Weapon: Adaptive Dual-Path Jailbreak Attack on Large Language Models',authors:'Shi Lin, Peng Qian, Hongming Yang, Renjie Sun, Dezhang Kong, Xun Wang',paper:'https://arxiv.org/abs/2407.16205',code:'https://github.com/theshi-1128/ReDPJ',area:'大模型安全',status:'PRICAI 2026 · 已接收',kind:'conference',summary:'围绕风险推理路径开展自适应安全测试，研究大模型的潜在安全边界。',problem:'固定提示难以覆盖模型内部多样的风险推理路径。安全评估需要更充分地探索不同推理策略下的潜在失效模式。',method:['构建两阶段推理引导过程，组织多样化的安全测试路径。','依据目标模型的反馈自适应调整测试策略。','分析测试结果与失效模式，为防御研究提供实验依据。'],tags:['安全评估','自适应推理','攻防测试']}
];
export const areas=[
 {id:'llm-safety',name:'大模型安全',en:'LLM Safety & Security',icon:'shield',description:'理解模型的安全边界，预测多轮交互中的风险演化。',questions:'如何在安全失效发生之前，识别风险的积累与转折？',topics:['越狱攻击与防御','多轮安全风险预测','轨迹级提前预警'],projects:['recast','redpj']},
 {id:'agent-trust',name:'多智能体可信',en:'Trustworthy Multi-agent Systems',icon:'network',description:'追踪幻觉在协作网络中的传播，构建可靠的智能体系统。',questions:'如何在保留有效协作的同时，抑制风险在智能体之间传播？',topics:['执行前风险推断','幻觉传播与归因','自适应风险治理'],projects:['halluprop','evoguard']},
 {id:'contract-security',name:'智能合约安全',en:'Smart Contract Security',icon:'code',description:'融合大模型推理与程序分析，发现深层漏洞及其触发路径。',questions:'如何让语义理解、漏洞知识和执行反馈共同提升漏洞发现能力？',topics:['检索增强漏洞挖掘','状态感知模糊测试','可信自动化分析'],projects:['lara']}
];
export const news=[
 {date:'2026.09',category:'学术交流',title:'关注智能体安全与生成式内容安全',body:'围绕安全学术论坛中的智能体安全、生成式内容安全和漏洞挖掘议题，整理研究观察与后续讨论问题。',href:'/community#exchange'},
 {date:'2026',category:'论文进展',title:'ReDPJ 被 PRICAI 2026 接收',body:'探索基于两阶段自适应推理引导的大模型越狱测试方法。',href:'/projects/redpj'},
 {date:'研究中',category:'研究方向',title:'从风险检测走向轨迹预测与动态治理',body:'围绕大模型多轮交互和多智能体协作，开展风险建模、提前预警与治理研究。',href:'/research'},
 {date:'研究中',category:'研究项目',title:'探索大模型与漏洞知识协同的合约安全分析',body:'以检索增强生成和执行反馈为基础，推进智能合约模糊测试研究。',href:'/projects/lara'}
];
export const pages:Record<string,{title:string;en:string;intro:string}>= {
 research:{title:'研究方向',en:'Research',intro:'围绕模型、交互与系统三个层面，研究智能系统的风险发现、预测与治理。'},
 publications:{title:'学术成果',en:'Publications',intro:'我们关注大语言模型安全、多智能体可信和智能合约安全。以下收录代表性工作与在研稿件。'},
 projects:{title:'研究项目',en:'Projects',intro:'从问题出发，连接风险建模、方法设计与实验验证。'},
 people:{title:'团队成员',en:'People',intro:'以共同的研究问题连接不同背景，探索可信人工智能与系统安全。'},
 community:{title:'学术动态',en:'Community',intro:'记录研究交流，分享问题、方法与思考。'},
 resources:{title:'学习与教学',en:'Learning & Teaching',intro:'围绕实验室研究方向组织的入门路径与科研实践建议。'},
 join:{title:'加入我们',en:'Join TrustLab',intro:'对可信人工智能与系统安全感兴趣？欢迎从一个具体的研究问题开始。'}
};

// Replace literal XXX values with confirmed laboratory information.
export const labDetails = {
  email: 'XXX', office: 'XXX', admissions: 'XXX',
  admissionQuota: 'XXX', applicationDeadline: 'XXX',
  academicAppointments: 'XXX', programCommittees: 'XXX', reviewing: 'XXX',
  courses: 'XXX', teachingMaterials: 'XXX'
};
export const memberGroups = [
  {en:'Faculty & Researchers', title:'教师与研究人员', members:[{name:'XXX',photo:'XXX',role:'XXX',research:'XXX',homepage:'XXX',email:'XXX'}]},
  {en:'Graduate Students', title:'在读研究生', members:[{name:'XXX',photo:'XXX',role:'XXX',research:'XXX',year:'XXX',homepage:'XXX',email:'XXX'}]},
  {en:'Alumni', title:'毕业成员', members:[{name:'XXX',photo:'XXX',role:'XXX',research:'XXX',year:'XXX',destination:'XXX',homepage:'XXX',email:'XXX'}]}
];
