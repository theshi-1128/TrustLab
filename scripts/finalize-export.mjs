import { existsSync, writeFileSync } from 'node:fs';
if (!existsSync('out/index.html')) throw new Error('Static export did not produce out/index.html');
writeFileSync('out/.nojekyll', '');
writeFileSync('out/site-config.json', JSON.stringify({basePath:(process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '')}, null, 2)+'\n');
console.log('Static website ready in out/');
