import { build } from 'esbuild';
import path from 'node:path';
import fs from 'node:fs';

const root = path.resolve('../../..');
const exp = path.resolve('.');
const outdir = path.resolve('./dist');
fs.mkdirSync(outdir, { recursive: true });

await build({
  entryPoints: [path.join(root, 'src/entrypoints/cli.tsx')],
  bundle: true,
  platform: 'node',
  format: 'esm',
  outfile: path.join(outdir, 'cli.bundle.mjs'),
  sourcemap: true,
  logLevel: 'info',
  define: {
    'MACRO.VERSION': '"0.0.0-recovered"',
    'MACRO.PACKAGE_URL': '"@anthropic-ai/claude-code"',
    'MACRO.FEEDBACK_CHANNEL': '"#reverse-engineering"',
    'MACRO.NATIVE_PACKAGE_URL': '"@anthropic-ai/claude-code-native"',
    'MACRO.BUILD_TIME': '"1970-01-01T00:00:00.000Z"',
    'MACRO.VERSION_CHANGELOG': '""',
    'MACRO.ISSUES_EXPLAINER': '"https://github.com/anthropics/claude-code/issues"'
  },
  banner: {
    js: 'globalThis.MACRO = globalThis.MACRO || { VERSION: "0.0.0-recovered", PACKAGE_URL: "@anthropic-ai/claude-code", FEEDBACK_CHANNEL: "#reverse-engineering", NATIVE_PACKAGE_URL: "@anthropic-ai/claude-code-native", BUILD_TIME: "1970-01-01T00:00:00.000Z", VERSION_CHANGELOG: "", ISSUES_EXPLAINER: "https://github.com/anthropics/claude-code/issues" };'
  },
  plugins: [
    {
      name: 'bun-bundle-shim-and-stubs',
      setup(build) {
        build.onResolve({ filter: /^bun:bundle$/ }, () => ({ path: 'bun:bundle', namespace: 'shim' }));
        build.onLoad({ filter: /.*/, namespace: 'shim' }, () => ({
          contents: 'export function feature(){ return false; }',
          loader: 'js'
        }));
        build.onResolve({ filter: /snipCompact\.js$/ }, () => ({ path: path.join(exp, 'stubs/snipCompact.js') }));
        build.onResolve({ filter: /snipProjection\.js$/ }, () => ({ path: path.join(exp, 'stubs/snipProjection.js') }));
      }
    }
  ],
  external: [
    'fsevents'
  ]
});
