import { notFound } from 'next/navigation';
import { LabSite } from '../site';
import { pages } from '../data';
export async function generateMetadata({params}:{params:Promise<{section:string}>}) { const {section}=await params; return {title:pages[section]?.title||'Page not found'}; }
export default async function Page({params}:{params:Promise<{section:string}>}) { const {section}=await params; if(!pages[section])notFound(); return <LabSite section={section}/>; }

export const dynamicParams = false;
export function generateStaticParams(){ return Object.keys(pages).map(section => ({section})); }
