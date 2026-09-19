import {access,readFile,readdir} from "node:fs/promises";
import {dirname,join,resolve} from "node:path";
import {fileURLToPath} from "node:url";

const root=join(dirname(fileURLToPath(import.meta.url)),".."),out=join(root,"dist"),files=[],fail=[];
async function walk(dir){for(const entry of await readdir(dir,{withFileTypes:true})){const path=join(dir,entry.name);if(entry.isDirectory())await walk(path);else if(entry.name.endsWith(".html"))files.push(path)}}
await walk(out);
for(const file of files){const html=await readFile(file,"utf8");for(const req of ["<title>",'name="description"','rel="canonical"','lang="','id="main"'])if(!html.includes(req))fail.push(`${file}: missing ${req}`);for(const match of html.matchAll(/(?:src|href)="(\/sahkoturvallisuus-s1-s3-web\/[^"?#]+)"/g)){const rel=match[1].replace("/sahkoturvallisuus-s1-s3-web/","");if(/^(fi|sv|assets)\//.test(rel)){let target=resolve(out,rel);if(!target.includes("."))target=join(target,"index.html");try{await access(target)}catch{fail.push(`${file}: broken ${match[1]}`)}}}}
for(const path of ["index.html","404.html","sitemap.xml","robots.txt",".nojekyll","fi/index.html","sv/index.html"])try{await access(join(out,path))}catch{fail.push(`missing ${path}`)}
if(files.length!==36)fail.push(`expected 36 HTML, found ${files.length}`);
const all=(await Promise.all(files.map(file=>readFile(file,"utf8")))).join("\n");
for(const req of ["app.mcyj.examprep.glb0686","6813341421","180","75%","120 euroa","120 euro","tukes.fi","finlex.fi","S1","S2","S3"])if(!all.includes(req))fail.push(`missing ${req}`);
for(const bad of ["Coming soon","Kommer snart","Tulossa","148-minute","46–117","73.7%","official exam app","virallinen tutkintosovellus"])if(all.includes(bad))fail.push(`stale or unsupported content: ${bad}`);
const css=await readFile(join(out,"assets/styles.css"),"utf8");for(const req of ["word-break:keep-all","store-badge-frame-sync","width:194px","height:75px"])if(!css.includes(req))fail.push(`CSS missing ${req}`);
const sitemap=await readFile(join(out,"sitemap.xml"),"utf8");if((sitemap.match(/<url>/g)||[]).length!==34)fail.push("expected 34 sitemap URLs");
if(fail.length){console.error(fail.join("\n"));process.exit(1)}
console.log(`Checked ${files.length} HTML files, 34 routes, both Store identities, official current exam facts, keep-all, and equal 194×75 badge frames.`);
