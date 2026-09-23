import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title:{default:'TrustLab | 可信人工智能与系统安全',template:'%s · TrustLab'},
 description:'TrustLab 聚焦大模型安全、多智能体可信与智能合约安全，研究风险预测、幻觉传播治理和智能漏洞挖掘。',
 icons:{icon:`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.svg`,shortcut:`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.svg`}
};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="zh-CN"><body>{children}</body></html>; }
