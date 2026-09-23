import Link from 'next/link';
export default function NotFound(){return <main className="not-found"><span className="eyebrow">TRUSTLAB / 404</span><h1>这个页面暂时不存在</h1><p>可以从实验室主页继续浏览研究方向与学术成果。</p><Link href="/" className="primary-button">返回主页</Link></main>}
