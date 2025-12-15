import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

// Static ESM wrapper so bundlers (Convex) can include the referenced CJS bundle.
// Avoid createRequire/relative runtime requires, since Convex flattens deps into its own module system.

const outPath = new URL('../dist/run.node.esm.mjs', import.meta.url);
await mkdir(dirname(outPath.pathname), { recursive: true });

const content = `import Run from "./run-sdk.node.min.js";

export default Run;
`;

await writeFile(outPath, content, 'utf8');
