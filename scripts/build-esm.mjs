import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

const outPath = new URL('../dist/run.node.esm.mjs', import.meta.url);
await mkdir(dirname(outPath.pathname), { recursive: true });

const content = `import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const Run = require("../lib/index.js");

export default Run;
`;

await writeFile(outPath, content, 'utf8');
