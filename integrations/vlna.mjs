// České typografické pravidlo: jednopísmenné předložky a spojky (v, s, z, k, o, u, a, i)
// nesmí zůstat na konci řádku. Po sestavení webu za ně vloží nezlomitelnou mezeru.
// Totéž pro čísla s mezerou (5 000) a data (10. 11. 2026).
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const NB = ' ';
export function vlna(text) {
  let t = text;
  for (let i = 0; i < 2; i++) {
    t = t.replace(/(^|[\s („"–])([AIKOSUVZaikosuvz]) +/g, `$1$2${NB}`);
  }
  t = t.replace(/(\d) (?=\d{3}(?!\d))/g, `$1${NB}`); // 5 000
  t = t.replace(/(\d{1,2}\.) (?=\d)/g, `$1${NB}`); // 10. 11. 2026
  return t;
}

function processHtml(html) {
  const parts = html.split(/(<[^>]+>)/);
  let skip = false;
  return parts
    .map((p) => {
      if (p.startsWith('<')) {
        if (/^<(script|style)\b/i.test(p)) skip = true;
        else if (/^<\/(script|style)>/i.test(p)) skip = false;
        return p;
      }
      return skip ? p : vlna(p);
    })
    .join('');
}

async function* htmlFiles(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* htmlFiles(p);
    else if (e.name.endsWith('.html')) yield p;
  }
}

export default function vlnaIntegration() {
  return {
    name: 'vlna',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        for await (const f of htmlFiles(fileURLToPath(dir))) {
          await writeFile(f, processHtml(await readFile(f, 'utf8')));
        }
      },
    },
  };
}
