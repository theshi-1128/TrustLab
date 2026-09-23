'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight, ArrowRight, MapPin, Building2, ShieldCheck, Network,
  Code2, BookOpen, GraduationCap, Users, Menu, X, ChevronRight,
  Globe2, FileText, ExternalLink, Mail, Microscope,
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { areas, projects, news, pages, labDetails, memberGroups, advisorProfile, type Project } from './data';

const nav = [
  ['home', 'Home', '/'], ['advisor', 'Advisor', '/advisor'],
  ['research', 'Research', '/research'], ['publications', 'Publications', '/publications'],
  ['projects', 'Projects', '/projects'], ['people', 'People', '/people'],
  ['community', 'News', '/community'], ['join', 'Join Us', '/join'],
];

function Mark({ large = false }: { large?: boolean }) {
  return <span className={large ? 'brand-mark large' : 'brand-mark'} aria-hidden="true"><b>T</b><i>L</i></span>;
}

function AreaIcon({ id }: { id: string }) {
  return id === 'shield' ? <ShieldCheck /> : id === 'network' ? <Network /> : <Code2 />;
}

function SectionTitle({ title, href, label = 'View all' }: { title: string; href?: string; label?: string }) {
  return <div className="section-title"><h2>{title}</h2>{href && <Link href={href}>{label}<ArrowUpRight size={15} /></Link>}</div>;
}

function Sidebar() {
  return <aside className="lab-profile" aria-label="About TrustLab">
    <Link className="identity" href="/" aria-label="TrustLab home">
      <Mark large /><h2>TrustLab<span className="brand-dot">.</span></h2>
      <p className="profile-subtitle">Trustworthy AI &amp;<br />System Security</p>
    </Link>
    <div className="affiliation"><Building2 /><div><strong>Zhejiang Gongshang University</strong><p>School of Computer and Information Engineering</p></div></div>
    <p className="location"><MapPin size={16} />Hangzhou, China</p>
    <div className="profile-links">
      <Link href="/research"><Microscope />Research<ArrowUpRight /></Link>
      <Link href="/publications"><BookOpen />Publications<ArrowUpRight /></Link>
      <Link href="/join#contact"><Mail />Contact<ArrowUpRight /></Link>
    </div>
    <div className="sidebar-note"><span className="small-label">OUR RESEARCH</span><p>Understanding risk.<br />Building trust.</p><div className="small-rule" /><span>Models · Interactions · Systems</span></div>
    <Link className="learning-link" href="/resources"><GraduationCap size={17} />Learning &amp; Teaching<ArrowUpRight size={14} /></Link>
  </aside>;
}

function Diagram({type}:{type:string}){return <div className={'paper-diagram '+type}><svg viewBox="0 0 250 130" role="img" aria-label={type==='recast'?'Dialogue trajectory and early warning diagram':type==='lara'?'Knowledge retrieval and contract testing loop diagram':'Agent risk propagation diagram'}>
{type==='recast'?<><path className="axis" d="M25 20V103H227"/><path d="M29 90L62 86L94 77L128 69L160 43L191 32L223 19" className="trace"/><path d="M160 17V104" className="dashed"/><path d="M25 54H227" className="dashed pale"/>{[[29,90],[62,86],[94,77],[128,69],[160,43],[191,32],[223,19]].map(([x,y],i)=><circle key={x} cx={x} cy={y} r="4" className={i>=4?'risk-point':'point'}/>)}<text x="26" y="119">Dialogue trajectory</text><text x="166" y="70" className="blue-text">Early warning</text></>:type==='lara'?<><rect x="14" y="40" width="62" height="43" rx="6"/><rect x="94" y="40" width="62" height="43" rx="6"/><rect x="174" y="40" width="62" height="43" rx="6"/><path className="flow" d="M77 61H92m66 0h14M204 87v19H45V86"/><path className="arrow-tip" d="M86 57l6 4-6 4m80-8 6 4-6 4"/><text x="45" y="58" textAnchor="middle">Knowledge</text><text x="45" y="73" textAnchor="middle">retrieval</text><text x="125" y="58" textAnchor="middle">LLM</text><text x="125" y="73" textAnchor="middle">reasoning</text><text x="205" y="58" textAnchor="middle">Contract</text><text x="205" y="73" textAnchor="middle">testing</text><text x="125" y="122" textAnchor="middle">Execution feedback</text></>:<><path className="network-edge" d="M45 66L95 28L158 35L207 77L155 108L91 103Z M45 66L158 35L155 108L95 28L91 103L207 77M91 103L158 35"/>{[[45,66],[95,28],[158,35],[207,77],[155,108],[91,103]].map(([x,y],i)=><g key={x}><circle cx={x} cy={y} r="13" className={i===2?'risk-node':'agent-node'}/><circle cx={x} cy={y-2} r="3" fill={i===2?'#b8714a':'#4c7598'}/><path d={`M${x-5} ${y+5}q5-5 10 0`} stroke={i===2?'#b8714a':'#4c7598'} fill="none"/></g>)}</>}
</svg><span>{type==='recast'?'TRAJECTORY · FORECASTING':type==='lara'?'RETRIEVAL · REASONING · TESTING':'AGENTS · TOPOLOGY · RISK'}</span></div>}

function PaperRow({ p, diagram = false }: { p: Project; diagram?: boolean }) {
  return <article className={'paper-row' + (diagram ? ' with-diagram' : '')}>
    {diagram && <Link tabIndex={-1} aria-hidden="true" href={'/projects/' + p.id}><Diagram type={p.id} /></Link>}
    <div className="paper-info">
      <div className="paper-topline"><span className={'venue ' + (p.kind === 'conference' ? 'accepted' : '')}>{p.status}</span><span className="paper-area">{p.area}</span></div>
      <h3><Link href={'/projects/' + p.id}>{!diagram && p.en !== 'XXX' ? p.en : <><b>{p.name}</b><span className="title-separator">:</span>{p.title}</>}</Link></h3>
      {!diagram && <p className="paper-authors">Authors: {p.authors || 'XXX'}</p>}
      <p>{p.summary}</p>
      <div className="paper-links">
        <Link href={'/projects/' + p.id}>Project<ArrowUpRight size={13} /></Link>
        {p.paper && <a href={p.paper} target="_blank" rel="noreferrer">Paper<FileText size={13} /></a>}
        {p.code && <a href={p.code} target="_blank" rel="noreferrer">Code<Code2 size={13} /></a>}
      </div>
    </div>
  </article>;
}

function Home() {
  return <>
    <section className="intro">
      <div className="eyebrow">WELCOME TO TRUSTLAB</div>
      <h1>Trustworthy intelligence.<br />Secure systems<span>.</span></h1>
      <p className="intro-en">Understanding risks. Building trust.</p>
      <p className="intro-body">TrustLab studies <strong>trustworthy artificial intelligence and system security</strong>. We investigate how risks emerge, evolve, and propagate in large language models, multi-agent systems, and smart contracts.</p>
      <p className="intro-body">Our research connects interpretable risk prediction with adaptive mitigation, turning a deeper understanding of security into reliable methods and tools.</p>
      <div className="intro-bottom"><div className="topic-tags"><span>AI Safety</span><span>Multi-agent Systems</span><span>System Security</span></div><Link href="/research" className="text-link">Explore our research<ArrowRight size={15} /></Link></div>
    </section>
    <section className="home-section research-overview">
      <SectionTitle title="Research Areas" href="/research" label="Explore research" />
      <div className="area-grid">{areas.map((a, i) => <Link key={a.id} href={'/research#' + a.id} className="area-card">
        <div className="area-top"><AreaIcon id={a.icon} /><span>0{i + 1}</span></div><h3>{a.name}</h3>
        {a.en !== a.name && <p className="area-en">{a.en}</p>}<p>{a.description}</p><ArrowUpRight className="card-arrow" size={17} />
      </Link>)}</div>
    </section>
    <section className="home-section">
      <SectionTitle title="News" href="/community" />
      <div className="news-list">{news.map((n, i) => <div className="news-row" key={n.title}><time>{n.date}</time><span className={'news-category category-' + i}>{n.category}</span><Link href={n.href}>{n.title}<ArrowUpRight size={14} /></Link></div>)}</div>
    </section>
    <section className="home-section">
      <SectionTitle title="Selected Research" href="/publications" label="All publications" />
      <div className="selected-papers">{[projects[0], projects[1], projects[3]].map(p => <PaperRow key={p.id} p={p} diagram />)}</div>
      <p className="figure-note">Diagrams illustrate the research ideas. Publication status is indicated for each work.</p>
    </section>
    <section className="join-strip"><div><span className="small-label">RESEARCH WITH US</span><h2>Help build intelligence we can trust.</h2><p>We welcome students and researchers interested in AI safety and system security.</p></div><Link href="/join">Join TrustLab<ArrowUpRight size={18} /></Link></section>
  </>;
}

function Advisor() {
  return <>
    <section className="advisor-profile">
      <div className="advisor-portrait" role="img" aria-label="Advisor portrait placeholder">{advisorProfile.photo}</div>
      <div className="advisor-profile-content"><span className="small-label">FACULTY PROFILE</span><h2>{advisorProfile.name}</h2><p className="advisor-position">{advisorProfile.title}</p><p className="advisor-affiliation">{advisorProfile.department}<br />{advisorProfile.institution}</p>
        <p className="advisor-address"><MapPin size={15} />Hangzhou, Zhejiang 310018, China</p>
        <dl className="advisor-quick-facts"><div><dt>Email</dt><dd>{advisorProfile.email}</dd></div><div><dt>Office</dt><dd>{advisorProfile.office}</dd></div></dl>
        <div className="advisor-external"><span>Homepage: {advisorProfile.homepage}</span><span>Google Scholar: {advisorProfile.scholar}</span><span>CV: {advisorProfile.cv}</span></div>
      </div>
    </section>
    <nav className="advisor-index" aria-label="Advisor profile sections">
      {[['about', 'About'], ['interests', 'Research'], ['education', 'Education'], ['appointments', 'Experience'], ['selected-research', 'Publications'], ['service', 'Service'], ['teaching', 'Teaching'], ['contact', 'Contact']].map(([id, label]) => <a href={'#' + id} key={id}>{label}</a>)}
    </nav>
    <section className="advisor-section" id="about"><SectionTitle title="About" /><p>{advisorProfile.bio}</p></section>
    <section className="advisor-section" id="interests"><SectionTitle title="Research Interests" /><p>{advisorProfile.research}</p><Link href="/research" className="text-link">Explore TrustLab research areas<ArrowRight size={15} /></Link></section>
    <section className="advisor-section" id="education"><SectionTitle title="Education" /><div className="academic-records">{advisorProfile.education.map((item, i) => <article key={i}><span className="record-period">{item.period}</span><div><h3>{item.degree}</h3><p>{item.institution}</p></div></article>)}</div></section>
    <section className="advisor-section" id="appointments"><SectionTitle title="Academic Appointments & Experience" /><div className="academic-records">{advisorProfile.experience.map((item, i) => <article key={i}><span className="record-period">{item.period}</span><div><h3>{item.position}</h3><p>{item.institution}</p></div></article>)}</div></section>
    <section className="advisor-section" id="selected-research"><SectionTitle title="Selected Laboratory Research" href="/publications" label="All publications" /><p className="advisor-context">Representative work from TrustLab. The authors of each paper are listed below.</p>{[projects[0], projects[1], projects[4]].map(p => <PaperRow key={p.id} p={p} />)}</section>
    <section className="advisor-section" id="honors"><SectionTitle title="Honors & Awards" /><ul className="academic-list">{advisorProfile.awards.map((item, i) => <li key={i}>{item}</li>)}</ul></section>
    <section className="advisor-section" id="service"><SectionTitle title="Academic Service" /><ul className="academic-list">{advisorProfile.service.map((item, i) => <li key={i}>{item}</li>)}</ul><dl className="placeholder-fields"><div><dt>Academic roles</dt><dd>{labDetails.academicAppointments}</dd></div><div><dt>Program committees</dt><dd>{labDetails.programCommittees}</dd></div><div><dt>Reviewing</dt><dd>{labDetails.reviewing}</dd></div></dl></section>
    <section className="advisor-section" id="teaching"><SectionTitle title="Teaching & Supervision" /><ul className="academic-list">{advisorProfile.teaching.map((item, i) => <li key={i}>{item}</li>)}</ul><dl className="placeholder-fields"><div><dt>Courses</dt><dd>{labDetails.courses}</dd></div><div><dt>Teaching materials</dt><dd>{labDetails.teachingMaterials}</dd></div><div><dt>Student supervision</dt><dd>XXX</dd></div></dl><div className="advisor-actions"><Link href="/people" className="text-link">Meet the team<ArrowRight size={15} /></Link><Link href="/join" className="text-link">Prospective students<ArrowRight size={15} /></Link></div></section>
    <section className="advisor-section" id="contact"><SectionTitle title="Contact" /><dl className="placeholder-fields"><div><dt>Email</dt><dd>{advisorProfile.email}</dd></div><div><dt>Office</dt><dd>{advisorProfile.office}</dd></div><div><dt>Postal address</dt><dd>{advisorProfile.department}<br />{advisorProfile.institution}<br />Hangzhou, Zhejiang 310018, China</dd></div></dl></section>
  </>;
}

function Research() {
  return <><div className="research-index">{areas.map((a, i) => <a key={a.id} href={'#' + a.id}><span>0{i + 1}</span>{a.name}<ChevronRight size={16} /></a>)}</div>
    {areas.map((a, i) => <section className="research-detail" id={a.id} key={a.id}><span className="section-number">0{i + 1}</span><div>
      <div className="research-detail-heading"><AreaIcon id={a.icon} /><span>{a.en}</span></div><h2>{a.name}</h2><p className="research-question">{a.questions}</p><p>{a.description}</p>
      <div className="topic-tags">{a.topics.map(t => <span key={t}>{t}</span>)}</div><h3 className="minor-heading">Related research</h3>
      {projects.filter(p => a.projects.includes(p.id)).map(p => <Link className="related-row" key={p.id} href={'/projects/' + p.id}><strong>{p.name}</strong><span>{p.title}</span><ArrowUpRight size={17} /></Link>)}
    </div></section>)}
  </>;
}

function Publications() {
  return <>
    <div className="subtle-note"><FileText size={18} /><p>Accepted papers and research manuscripts are listed separately. Manuscripts do not indicate formal publication. Missing details are marked XXX.</p></div>
    <Tabs defaultValue="all" className="publication-tabs">
      <TabsList variant="line" aria-label="Publication categories"><TabsTrigger value="all">All<span>{projects.length}</span></TabsTrigger><TabsTrigger value="conference">Conference papers<span>{projects.filter(p => p.kind === 'conference').length}</span></TabsTrigger><TabsTrigger value="manuscript">Manuscripts<span>{projects.filter(p => p.kind === 'manuscript').length}</span></TabsTrigger></TabsList>
      {['all', 'conference', 'manuscript'].map(filter => <TabsContent value={filter} key={filter}><div className="year-heading"><h2>2026</h2><span>RESEARCH COLLECTION</span></div>{projects.filter(p => filter === 'all' || p.kind === filter).sort((a, b) => (a.kind === 'conference' ? -1 : 1) - (b.kind === 'conference' ? -1 : 1)).map(p => <PaperRow key={p.id} p={p} />)}</TabsContent>)}
    </Tabs>
  </>;
}

function Projects() {
  return <div className="project-grid">{projects.map((p, i) => <article className="project-card" key={p.id}>
    <div className="project-card-top"><span className="small-label">{p.area}</span><span className="project-index">0{i + 1}</span></div>
    <h2><Link href={'/projects/' + p.id}>{p.name}<ArrowUpRight size={20} /></Link></h2><h3>{p.title}</h3><p>{p.summary}</p>
    <div className="topic-tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div><div className="project-card-bottom"><span>{p.status}</span><Link href={'/projects/' + p.id}>View project<ArrowRight size={15} /></Link></div>
  </article>)}</div>;
}

function People() {
  return <>
    <div className="people-intro"><Users /><div><h2>Connected by questions. Built on collaboration.</h2><p>We study LLM safety, trustworthy multi-agent systems, and smart contract security through clear problem definitions, rigorous experiments, and open discussion.</p></div></div>
    <Link href="/advisor" className="resource-banner"><GraduationCap /><div><strong>Meet our advisor</strong><span>Biography, education, research, teaching, and academic service</span></div><ArrowUpRight /></Link>
    <div className="people-categories">{memberGroups.map(group => <section className="member-section" key={group.title}><h2>{group.title}</h2><div className="member-cards">{group.members.map((member, i) => <article className="member-card" key={i}>
      <div className="member-photo" role="img" aria-label="Member portrait placeholder">{member.photo}</div><div className="member-content"><h3>{member.name}</h3><p>Position / role: {member.role}</p><p>Research interests: {member.research}</p>{'year' in member && <p>{group.title === 'Alumni' ? 'Graduation year' : 'Entry year'}: {member.year}</p>}{'destination' in member && <p>Current affiliation: {member.destination}</p>}<p>Homepage: {member.homepage}</p><p>Email: {member.email}</p></div>
    </article>)}</div></section>)}</div>
    <div className="interest-panel"><h3>Questions that bring us together</h3><div className="topic-tags">{['Model safety boundaries', 'Risk evolution', 'Hallucination propagation', 'Reliable collaboration', 'Semantic vulnerability discovery'].map(t => <span key={t}>{t}</span>)}</div><Link href="/join" className="text-link">Join our research community<ArrowRight size={16} /></Link></div>
  </>;
}

function Community() {
  return <>
    <SectionTitle title="Updates" /><div className="timeline">{news.map(n => <article key={n.title} className="timeline-item"><time>{n.date}</time><div><span className="news-category">{n.category}</span><h2><Link href={n.href === '/community#exchange' ? '#exchange' : n.href}>{n.title}</Link></h2><p>{n.body}</p>{n.href !== '/community#exchange' && <Link href={n.href} className="text-link">Read more<ArrowUpRight size={15} /></Link>}</div></article>)}</div>
    <section id="exchange" className="exchange-panel"><span className="small-label">RESEARCH CONVERSATIONS</span><h2>New questions through academic exchange</h2><p>Security research extends from individual model outputs to multi-turn interactions, agent tool use, and system-level risk mitigation. We ask when risks arise, how they propagate, and how to act before failure.</p><div className="discussion-grid"><div><span>01</span><h3>Agent &amp; multi-agent safety</h3><p>How messages, roles, and communication topologies shape security risks.</p></div><div><span>02</span><h3>Trustworthy generation</h3><p>How hallucinations emerge, spread, and can be mitigated with verifiable evidence.</p></div><div><span>03</span><h3>Intelligent vulnerability discovery</h3><p>How to connect language model reasoning with program execution evidence.</p></div></div></section>
    <section className="service-section"><SectionTitle title="Academic Service" /><dl className="placeholder-fields"><div><dt>Academic roles</dt><dd>{labDetails.academicAppointments}</dd></div><div><dt>Program committees</dt><dd>{labDetails.programCommittees}</dd></div><div><dt>Reviewing</dt><dd>{labDetails.reviewing}</dd></div></dl></section>
    <Link href="/resources" className="resource-banner"><GraduationCap /><div><strong>Learning &amp; Teaching</strong><span>Getting started · Reading papers · Research practice</span></div><ArrowUpRight /></Link>
  </>;
}

function Resources() {
  const learning = [
    { number: '01', title: 'Foundations', subtitle: 'Build a shared technical vocabulary', items: ['Deep learning and Transformer fundamentals', 'LLM training, fine-tuning, and inference', 'Probability, graphical models, and program analysis'] },
    { number: '02', title: 'Entering a research area', subtitle: 'Understand the questions and existing methods', items: ['LLM safety evaluation and jailbreak defenses', 'Multi-agent interactions, hallucinations, and risk propagation', 'Smart contracts, vulnerabilities, and fuzz testing'] },
    { number: '03', title: 'Research practice', subtitle: 'Develop conclusions that can be tested', items: ['Reproduce a representative method and document configurations', 'Design comparisons and ablations around a specific question', 'Analyze failure cases and limitations, then write a research report'] },
  ];
  return <>
    <section className="learning-intro"><BookOpen /><p>Start with the foundations, then develop research skills through paper reading, method reproduction, and discussions around concrete questions.</p></section>
    <div className="learning-path">{learning.map(item => <article key={item.number}><span className="learning-number">{item.number}</span><div><h2>{item.title}</h2><p>{item.subtitle}</p><ul>{item.items.map(t => <li key={t}>{t}</li>)}</ul></div></article>)}</div>
    <section className="teaching-panel"><SectionTitle title="Courses & Materials" /><dl className="placeholder-fields"><div><dt>Courses</dt><dd>{labDetails.courses}</dd></div><div><dt>Teaching materials</dt><dd>{labDetails.teachingMaterials}</dd></div></dl></section>
    <section className="reading-panel"><h2>Four questions to ask when reading a paper</h2><ol><li>What problem does the paper address, and why does it matter?</li><li>Is there sufficient evidence for the limitations of existing methods?</li><li>How do the method's key design choices address the problem?</li><li>What do the experiments establish, and what remains uncertain?</li></ol><Link className="text-link" href="/publications">Browse our research<ArrowUpRight size={16} /></Link></section>
  </>;
}

function Join() {
  return <>
    <div className="join-intro"><span className="small-label">CURIOSITY · RIGOR · COLLABORATION</span><h2>Stay curious. Follow the evidence.</h2><p>Interested in model safety boundaries, reliable agent collaboration, or automated program security analysis? Explore our research. We value the ability to ask good questions as much as the answers already available.</p></div>
    <div className="join-options"><section><GraduationCap /><h3>Students &amp; research projects</h3><p>For students exploring research, a graduation project, or further academic training.</p><ul><li>Read research papers and test ideas in practice</li><li>Develop programming and mathematical foundations</li><li>Keep clear records and participate in regular discussions</li></ul></section><section><Globe2 /><h3>Academic collaboration</h3><p>Exchange methods, experimental experience, and security challenges around shared research questions.</p><ul><li>LLM and agent safety evaluation</li><li>Hallucination inference, propagation, and mitigation</li><li>LLM-assisted program security analysis</li></ul></section></div>
    <section className="prepare-panel"><h2>Before getting in touch</h2><div className="prepare-row"><span>01</span><p><strong>A short introduction</strong>Your background, research interests, and relevant experience.</p></div><div className="prepare-row"><span>02</span><p><strong>A specific question</strong>A research problem you care about and your current ideas.</p></div><div className="prepare-row"><span>03</span><p><strong>Previous work, if available</strong>Code, experiment logs, project reports, or reading notes.</p></div></section>
    <section className="contact-panel" id="contact"><div><span className="small-label">GET IN TOUCH</span><h2>Contact TrustLab</h2><p><Building2 size={17} /><span>School of Computer and Information Engineering<br />Zhejiang Gongshang University</span></p><p><MapPin size={17} />Hangzhou, Zhejiang 310018, China</p><Link href="/advisor" className="text-link">Advisor profile<ArrowUpRight size={15} /></Link></div><div className="contact-pending"><Mail size={23} /><strong>Email: {labDetails.email}</strong><p>Office: {labDetails.office}</p><p>Admissions: {labDetails.admissions}</p><p>Available positions: {labDetails.admissionQuota}</p><p>Application deadline: {labDetails.applicationDeadline}</p></div></section>
    <p className="figure-note">Admission requirements, available positions, and deadlines are subject to official announcements.</p>
  </>;
}

function ProjectDetail({ id }: { id: string }) {
  const p = projects.find(p => p.id === id)!;
  return <>
    <Link href="/projects" className="back-link">← Back to projects</Link>
    <div className="project-hero"><div className="paper-topline"><span className="venue">{p.status}</span><span className="paper-area">{p.area}</span></div><h1>{p.name}<span>.</span></h1><h2>{p.title}</h2><p>{p.summary}</p><div className="topic-tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div></div>
    <section className="project-section"><SectionTitle title="The Question" /><p>{p.problem}</p></section>
    <section className="project-section"><SectionTitle title="Our Approach" /><div className="method-steps">{p.method.map((m, i) => <div key={m}><span>0{i + 1}</span><p>{m}</p></div>)}</div></section>
    <section className="project-section"><SectionTitle title="Research Context" /><p>This project contributes to TrustLab's research in {p.area.toLowerCase()}. We examine how methods work in real interactions or program execution, with an emphasis on reproducible evaluation, failure cases, and limitations.</p><Link className="text-link" href={'/research#' + areas.find(a => a.projects.includes(p.id))?.id}>Explore the research area<ArrowRight size={16} /></Link></section>
    <section className="project-resources"><h2>Paper &amp; Resources</h2><div className="bibliography"><strong>{p.en}</strong><p>Authors: {p.authors || 'XXX'}</p></div>{p.paper ? <a href={p.paper} target="_blank" rel="noreferrer"><FileText size={18} />Read paper<ExternalLink size={16} /></a> : <p>Paper link: XXX</p>}{p.code ? <a href={p.code} target="_blank" rel="noreferrer"><Code2 size={18} />Project code<ExternalLink size={16} /></a> : <p>Project code: XXX</p>}<p className="citation-placeholder">Citation: XXX</p><p className="figure-note">Current status: {p.status}. This page is updated as the research progresses.</p></section>
    <SectionTitle title="Related Projects" />{projects.filter(q => q.area === p.area && q.id !== p.id).map(q => <PaperRow key={q.id} p={q} />)}{p.id === 'lara' && <Link href="/research#contract-security" className="related-row"><Code2 /><span>Smart Contract Security</span><ArrowUpRight size={18} /></Link>}
  </>;
}

export function LabSite({ section, projectId }: { section: string; projectId?: string }) {
  const [menu, setMenu] = useState(false);
  const current = section === 'project-detail' ? 'projects' : section;
  const page = pages[section];
  return <>
    <a href="#main-content" className="skip-link">Skip to main content</a>
    <header className="site-header"><div className="header-inner">
      <Link className="wordmark" href="/" aria-label="TrustLab home"><Mark /><span>TrustLab<span className="brand-dot">.</span></span></Link>
      <button className="mobile-menu" aria-label={menu ? 'Close navigation' : 'Open navigation'} aria-expanded={menu} aria-controls="main-nav" onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button>
      <nav id="main-nav" aria-label="Main navigation" className={menu ? 'main-nav open' : 'main-nav'}>{nav.map(([key, label, href]) => <Link key={key} className={current === key ? 'active' : ''} aria-current={current === key ? 'page' : undefined} href={href} onClick={() => setMenu(false)}>{label}</Link>)}</nav>
    </div></header>
    <div className="site-body"><Sidebar /><main id="main-content" className="main-content">
      {page && <div className="page-heading"><div className="breadcrumb"><Link href="/">TrustLab</Link><ChevronRight size={13} /><span>{page.title}</span></div>{page.en !== page.title && <span className="eyebrow">{page.en}</span>}<h1>{page.title}<span>.</span></h1><p>{page.intro}</p></div>}
      {section === 'home' ? <Home /> : section === 'advisor' ? <Advisor /> : section === 'research' ? <Research /> : section === 'publications' ? <Publications /> : section === 'projects' ? <Projects /> : section === 'people' ? <People /> : section === 'community' ? <Community /> : section === 'resources' ? <Resources /> : section === 'join' ? <Join /> : projectId ? <ProjectDetail id={projectId} /> : null}
      <footer className="site-footer"><div><Link href="/" className="footer-brand">TrustLab<span>.</span></Link><span>Trustworthy AI &amp; System Security</span></div><div><Link href="/resources">Learning &amp; Teaching</Link><Link href="/join#contact">Contact</Link><a href="#main-content">Back to top ↑</a></div><p>© 2026 TrustLab <span>Zhejiang Gongshang University · Hangzhou</span></p></footer>
    </main></div>
  </>;
}
