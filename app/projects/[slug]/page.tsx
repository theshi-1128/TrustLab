import { notFound } from 'next/navigation';
import { LabSite } from '../../site';
import { projects } from '../../data';
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; return {title:projects.find(p=>p.id===slug)?.name||'项目未找到'}; }
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}) {const {slug}=await params; if(!projects.some(p=>p.id===slug))notFound();return <LabSite section="project-detail" projectId={slug}/>}

export const dynamicParams = false;
export function generateStaticParams(){ return projects.map(project => ({slug:project.id})); }
