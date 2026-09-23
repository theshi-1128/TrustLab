export type Project = {id:string; name:string; title:string; en:string; area:string; status:string; kind:'conference'|'journal'|'manuscript'; summary:string; problem:string; method:string[]; tags:string[]; authors?:string; paper?:string; code?:string};
export const projects:Project[] = [
 {
  id:'recast',name:'RECAST',title:'Forecasting Safety Risks Across Multi-turn Conversations',
  en:'Forecasting Trajectory-Level Safety Risks in Black-Box Multi-Turn Interactions',
  authors:'Shi Lin, Peng Qian, Dinghao Liu, Renjie Sun, Sifan Wu, Dezhang Kong, Chenpei Wang, Xun Wang',
  paper:'https://arxiv.org/abs/2607.26820',area:'LLM Safety',status:'Research Manuscript',kind:'manuscript',
  summary:'Model how risks accumulate along a conversation and issue warnings before a safety failure occurs.',
  problem:'Single-turn checks can overlook risks that develop across an interaction. We study whether a conversation prefix can reveal the likelihood and timing of a future first safety failure.',
  method:[
   'Combine local interaction windows with long-term memory to represent risk at multiple timescales.',
   'Revisit historical evidence in the context of the current turn to identify changes in risk.',
   'Estimate first-failure risk within a future window to support timely intervention.'
  ],tags:['Multi-turn Interaction','Risk Trajectories','Early Warning']
 },
 {
  id:'halluprop',name:'HalluProp',title:'Inferring Hallucination Risks Before Agents Interact',
  en:'Before Agents Speak: Pre-hoc Failure Risk Inference in Multi-Agent Systems',
  authors:'Shi Lin, Chenpei Wang, Peng Qian, Dezhang Kong, Minghao Li, Yufeng Li, Xun Wang',
  paper:'https://arxiv.org/abs/2607.26836',area:'Trustworthy Agents',status:'Research Manuscript',kind:'manuscript',
  summary:'Use role semantics and communication topology to infer intrinsic agent risks and their potential propagation.',
  problem:'A local error can spread through a multi-agent communication network. Evaluating answers only after interaction ends provides limited guidance for preventive system configuration.',
  method:[
   'Estimate agent capability and susceptibility from task and role information.',
   'Model information transfer and risk propagation along communication links.',
   'Combine intrinsic risk with propagation effects to identify agents requiring closer attention.'
  ],tags:['Pre-interaction Inference','Communication Topology','Risk Propagation']
 },
 {
  id:'evoguard',name:'EvoGuard',title:'Governing Multi-agent Hallucinations Through Evolutionary Games',
  en:'XXX',area:'Trustworthy Agents',status:'Research Manuscript',kind:'manuscript',
  summary:'Adapt agent strategies and communication structures to reduce hallucinations while preserving useful collaboration.',
  problem:'Removing risky agents or communication links may contain errors but also weaken collective reasoning. We study how to balance risk mitigation and collaboration as interactions evolve.',
  method:[
   'Continuously estimate intrinsic node risk, edge transmission effects, and propagated risk.',
   'Integrate self-reflection, topology governance, and strategy evolution into a shared governance process.',
   'Adapt strategies and topology using interaction feedback while retaining beneficial information flow.'
  ],tags:['Evolutionary Games','Adaptive Governance','Collaboration Preservation']
 },
 {
  id:'lara',name:'LARA',title:'Retrieval-augmented LLM Guidance for Smart Contract Fuzzing',
  en:'Unlocking Underexplored States: LLM-Enhanced Smart Contract Fuzzing with Retrieval-Augmented Generation',
  area:'Contract Security',status:'Research Manuscript',kind:'manuscript',
  summary:'Combine vulnerability knowledge retrieval with LLM reasoning to explore deeper contract states and vulnerability-triggering paths.',
  problem:'Smart contract vulnerabilities often require specific transaction sequences and state conditions. Conventional input mutation can struggle to cover these deeper states.',
  method:[
   'Retrieve vulnerability knowledge relevant to a target contract to provide analysis context.',
   'Use LLM reasoning about contract logic and state constraints to generate targeted test inputs.',
   'Incorporate execution feedback to guide further testing toward underexplored states.'
  ],tags:['Retrieval Augmentation','Vulnerability Discovery','Fuzzing']
 },
 {
  id:'redpj',name:'ReDPJ',title:'Adaptive Reasoning Guidance for LLM Jailbreak Testing',
  en:'Reasoning as a Weapon: Adaptive Dual-Path Jailbreak Attack on Large Language Models',
  authors:'Shi Lin, Peng Qian, Hongming Yang, Renjie Sun, Dezhang Kong, Xun Wang',
  paper:'https://arxiv.org/abs/2407.16205',code:'https://github.com/theshi-1128/ReDPJ',
  area:'LLM Safety',status:'PRICAI 2026 · Accepted',kind:'conference',
  summary:'Explore risky reasoning paths through adaptive testing to better understand the safety boundaries of large language models.',
  problem:'Fixed prompts provide limited coverage of the reasoning paths that may lead to model failures. Safety evaluation needs to examine potential failure modes across different reasoning strategies.',
  method:[
   'Use a two-stage reasoning-guidance process to organize diverse safety-testing paths.',
   'Adapt testing strategies in response to feedback from the target model.',
   'Analyze outcomes and failure patterns to inform defensive research.'
  ],tags:['Safety Evaluation','Adaptive Reasoning','Adversarial Testing']
 }
];
export const areas=[
 {
  id:'llm-safety',name:'LLM Safety',en:'Language Model Safety & Security',icon:'shield',
  description:'Understand model safety boundaries and forecast how risks evolve across multi-turn interactions.',
  questions:'How can we recognize accumulating risks and turning points before a safety failure occurs?',
  topics:['Jailbreak Attacks & Defenses','Multi-turn Risk Prediction','Trajectory-level Early Warning'],projects:['recast','redpj']
 },
 {
  id:'agent-trust',name:'Trustworthy Agents',en:'Reliable Multi-agent Systems',icon:'network',
  description:'Trace hallucination propagation through collaborative networks and build more reliable agent systems.',
  questions:'How can we limit risk propagation between agents while preserving useful collaboration?',
  topics:['Pre-interaction Risk Inference','Hallucination Propagation & Attribution','Adaptive Risk Governance'],projects:['halluprop','evoguard']
 },
 {
  id:'contract-security',name:'Contract Security',en:'Smart Contract Analysis & Testing',icon:'code',
  description:'Combine LLM reasoning with program analysis to uncover deeper vulnerabilities and their triggering paths.',
  questions:'How can semantic understanding, vulnerability knowledge, and execution feedback improve vulnerability discovery together?',
  topics:['Retrieval-augmented Vulnerability Discovery','State-aware Fuzzing','Trustworthy Automated Analysis'],projects:['lara']
 }
];
export const news=[
 {date:'2026.09',category:'Academic Exchange',title:'Exploring Agent and Generative Content Security',body:'Research observations and discussion questions from a security forum, covering agent security, generative content security, and vulnerability discovery.',href:'/community#exchange'},
 {date:'2026',category:'Publication',title:'ReDPJ Accepted at PRICAI 2026',body:'Our work explores LLM jailbreak testing through adaptive dual-path reasoning guidance.',href:'/projects/redpj'},
 {date:'Ongoing',category:'Research Direction',title:'From Risk Detection to Trajectory Forecasting and Adaptive Governance',body:'We study risk modeling, early warning, and governance in multi-turn LLM interactions and multi-agent collaboration.',href:'/research'},
 {date:'Ongoing',category:'Research Project',title:'Bringing LLM Reasoning and Vulnerability Knowledge Together',body:'Our smart contract fuzzing research combines retrieval-augmented generation with execution feedback.',href:'/projects/lara'}
];
export const pages:Record<string,{title:string;en:string;intro:string}>= {
 research:{title:'Research',en:'Questions & Directions',intro:'We investigate risk discovery, prediction, and governance across models, interactions, and intelligent systems.'},
 publications:{title:'Publications',en:'Selected Research',intro:'Selected publications and research manuscripts on LLM safety, trustworthy multi-agent systems, and smart contract security.'},
 projects:{title:'Projects',en:'Research in Progress',intro:'Connecting research questions with risk modeling, method design, and experimental validation.'},
 advisor:{title:'Advisor',en:'About the Advisor',intro:'Research, teaching, and academic service.'},
 people:{title:'People',en:'Our Team',intro:'Bringing together different backgrounds to explore trustworthy AI and system security.'},
 community:{title:'Community',en:'News & Academic Life',intro:'Sharing research questions, methods, and perspectives through academic exchange.'},
 resources:{title:'Learning & Teaching',en:'Resources for Researchers',intro:'Learning paths and research practices connected to the laboratory’s research directions.'},
 join:{title:'Join TrustLab',en:'Work With Us',intro:'Interested in trustworthy AI and system security? Start with a research question you would like to explore.'}
};

// Replace literal XXX values with confirmed laboratory information.
export const labDetails = {
 email:'XXX',office:'XXX',admissions:'XXX',
 admissionQuota:'XXX',applicationDeadline:'XXX',
 academicAppointments:'XXX',programCommittees:'XXX',reviewing:'XXX',
 courses:'XXX',teachingMaterials:'XXX'
};

// The advisor’s identity, biography, and credentials must be confirmed before publication.
export const advisorProfile = {
 name:'XXX',title:'XXX',photo:'XXX',
 department:'School of Computer and Information Engineering',
 institution:'Zhejiang Gongshang University',
 bio:'XXX',research:'XXX',
 education:[{period:'XXX',degree:'XXX',institution:'XXX'}],
 experience:[{period:'XXX',position:'XXX',institution:'XXX'}],
 awards:['XXX'],service:['XXX'],teaching:['XXX'],
 email:'XXX',office:'XXX',homepage:'XXX',scholar:'XXX',cv:'XXX'
};

export const memberGroups = [
 {en:'Academic Team',title:'Faculty & Researchers',members:[{name:'XXX',photo:'XXX',role:'XXX',research:'XXX',homepage:'XXX',email:'XXX'}]},
 {en:'Current Members',title:'Graduate Students',members:[{name:'XXX',photo:'XXX',role:'XXX',research:'XXX',year:'XXX',homepage:'XXX',email:'XXX'}]},
 {en:'Beyond TrustLab',title:'Alumni',members:[{name:'XXX',photo:'XXX',role:'XXX',research:'XXX',year:'XXX',destination:'XXX',homepage:'XXX',email:'XXX'}]}
];
