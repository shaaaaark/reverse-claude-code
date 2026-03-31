import { build } from 'esbuild';
import path from 'node:path';
import fs from 'node:fs';

const root = path.resolve('../../..');
const exp = path.resolve('.');
const outdir = path.resolve('./dist-min');
fs.mkdirSync(outdir, { recursive: true });

const EXTERNALS = [
  // core recovered runtime likely expects these at runtime; keep external to avoid bundling explosion
  'axios', 'strip-ansi', 'chalk', 'ignore', 'execa', '@anthropic-ai/sdk',
  'lodash-es', 'lodash-es/*',
  'react', 'react/jsx-runtime', 'ink',
  'zod', 'semver', 'tar', 'glob', 'ws', 'open', 'ora', 'yaml', 'diff',
  'commander', 'chokidar', 'eventsource', 'mime-types', 'jsonwebtoken',
  'node-pty', 'sharp', 'fsevents'
];

await build({
  entryPoints: [path.join(root, 'src/entrypoints/cli.tsx')],
  bundle: true,
  platform: 'node',
  format: 'esm',
  outfile: path.join(outdir, 'cli.bundle.mjs'),
  sourcemap: true,
  logLevel: 'info',
  packages: 'external',
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
      name: 'min-shims',
      setup(build) {
        build.onResolve({ filter: /^bun:bundle$/ }, () => ({ path: 'bun:bundle', namespace: 'shim' }));
        build.onLoad({ filter: /.*/, namespace: 'shim' }, () => ({
          contents: 'export function feature(){ return false; }',
          loader: 'js'
        }));
        build.onResolve({ filter: /snipCompact\.js$/ }, () => ({ path: path.join(exp, 'stubs/snipCompact.js') }));
        build.onResolve({ filter: /snipProjection\.js$/ }, () => ({ path: path.join(exp, 'stubs/snipProjection.js') }));
        build.onResolve({ filter: /protectedNamespace\.js$/ }, () => ({ path: path.join(exp, 'stubs/protectedNamespace.js') }));
        build.onResolve({ filter: /assistant\/index\.js$/ }, () => ({ path: path.join(exp, 'stubs/assistant/index.js') }));
        build.onResolve({ filter: /proactive\/index\.js$/ }, () => ({ path: path.join(exp, 'stubs/proactive/index.js') }));
        build.onResolve({ filter: /udsMessaging\.js$/ }, () => ({ path: path.join(exp, 'stubs/utils/udsMessaging.js') }));
        build.onResolve({ filter: /agents-platform\/index\.js$/ }, () => ({ path: path.join(exp, 'stubs/commands/agents-platform-index.js') }));
        build.onResolve({ filter: /commands\/proactive\.js$/ }, () => ({ path: path.join(exp, 'stubs/commands/proactive.js') }));
        build.onResolve({ filter: /remoteControlServer\/index\.js$/ }, () => ({ path: path.join(exp, 'stubs/commands/remoteControlServer-index.js') }));
        build.onResolve({ filter: /force-snip\.js$/ }, () => ({ path: path.join(exp, 'stubs/commands/force-snip.js') }));
        build.onResolve({ filter: /workflows\/index\.js$/ }, () => ({ path: path.join(exp, 'stubs/commands/workflows-index.js') }));
        build.onResolve({ filter: /skillSearch\/localSearch\.js$/ }, () => ({ path: path.join(exp, 'stubs/services/skillSearch/localSearch.js') }));
        build.onResolve({ filter: /subscribe-pr\.js$/ }, () => ({ path: path.join(exp, 'stubs/commands/subscribe-pr.js') }));
        build.onResolve({ filter: /commands\/torch\.js$/ }, () => ({ path: path.join(exp, 'stubs/commands/torch.js') }));
        build.onResolve({ filter: /commands\/peers\/index\.js$/ }, () => ({ path: path.join(exp, 'stubs/commands/peers-index.js') }));
        build.onResolve({ filter: /commands\/fork\/index\.js$/ }, () => ({ path: path.join(exp, 'stubs/commands/fork-index.js') }));
        build.onResolve({ filter: /commands\/buddy\/index\.js$/ }, () => ({ path: path.join(exp, 'stubs/commands/buddy-index.js') }));
        build.onResolve({ filter: /WorkflowTool\/createWorkflowCommand\.js$/ }, () => ({ path: path.join(exp, 'stubs/tools/WorkflowTool/createWorkflowCommand.js') }));
        build.onResolve({ filter: /TungstenTool\/TungstenTool\.js$/ }, () => ({ path: path.join(exp, 'stubs/tools/TungstenTool/TungstenTool.js') }));
        build.onResolve({ filter: /attributionHooks\.js$/ }, () => ({ path: path.join(exp, 'stubs/utils/attributionHooks.js') }));
        build.onResolve({ filter: /reactiveCompact\.js$/ }, () => ({ path: path.join(exp, 'stubs/services/compact/reactiveCompact.js') }));
        build.onResolve({ filter: /contextCollapse\/operations\.js$/ }, () => ({ path: path.join(exp, 'stubs/services/contextCollapse/operations.js') }));
        build.onResolve({ filter: /contextCollapse\/index\.js$/ }, () => ({ path: path.join(exp, 'stubs/services/contextCollapse/index.js') }));
        build.onResolve({ filter: /utils\/ultraplan\/prompt\.txt$/ }, () => ({ path: path.join(exp, 'stubs/utils/ultraplan/prompt.txt') }));
        build.onResolve({ filter: /types\/connectorText\.js$/ }, () => ({ path: path.join(exp, 'stubs/types/connectorText.js') }));
        build.onResolve({ filter: /messages\/SnipBoundaryMessage\.js$/ }, () => ({ path: path.join(exp, 'stubs/messages/SnipBoundaryMessage.js') }));
        build.onResolve({ filter: /tools\/SendUserFileTool\/prompt\.js$/ }, () => ({ path: path.join(exp, 'stubs/tools/SendUserFileTool/prompt.js') }));
        build.onResolve({ filter: /systemThemeWatcher\.js$/ }, () => ({ path: path.join(exp, 'stubs/utils/systemThemeWatcher.js') }));
        build.onResolve({ filter: /UserGitHubWebhookMessage\.js$/ }, () => ({ path: path.join(exp, 'stubs/messages/UserGitHubWebhookMessage.js') }));
        build.onResolve({ filter: /UserForkBoilerplateMessage\.js$/ }, () => ({ path: path.join(exp, 'stubs/messages/UserForkBoilerplateMessage.js') }));
        build.onResolve({ filter: /UserCrossSessionMessage\.js$/ }, () => ({ path: path.join(exp, 'stubs/messages/UserCrossSessionMessage.js') }));
        build.onResolve({ filter: /ReviewArtifactTool\/ReviewArtifactTool\.js$/ }, () => ({ path: path.join(exp, 'stubs/tools/ReviewArtifactTool/ReviewArtifactTool.js') }));
        build.onResolve({ filter: /ReviewArtifactPermissionRequest\/ReviewArtifactPermissionRequest\.js$/ }, () => ({ path: path.join(exp, 'stubs/components/permissions/ReviewArtifactPermissionRequest/ReviewArtifactPermissionRequest.js') }));
        build.onResolve({ filter: /WorkflowTool\/WorkflowTool\.js$/ }, () => ({ path: path.join(exp, 'stubs/tools/WorkflowTool/WorkflowTool.js') }));
        build.onResolve({ filter: /WorkflowPermissionRequest\.js$/ }, () => ({ path: path.join(exp, 'stubs/tools/WorkflowTool/WorkflowPermissionRequest.js') }));
        build.onResolve({ filter: /MonitorTool\/MonitorTool\.js$/ }, () => ({ path: path.join(exp, 'stubs/tools/MonitorTool/MonitorTool.js') }));
        build.onResolve({ filter: /MonitorPermissionRequest\/MonitorPermissionRequest\.js$/ }, () => ({ path: path.join(exp, 'stubs/components/permissions/MonitorPermissionRequest/MonitorPermissionRequest.js') }));
        build.onResolve({ filter: /WorkflowDetailDialog\.js$/ }, () => ({ path: path.join(exp, 'stubs/components/WorkflowDetailDialog.js') }));
        build.onResolve({ filter: /MonitorMcpTask\/MonitorMcpTask\.js$/ }, () => ({ path: path.join(exp, 'stubs/tasks/MonitorMcpTask/MonitorMcpTask.js') }));
        build.onResolve({ filter: /MonitorMcpDetailDialog\.js$/ }, () => ({ path: path.join(exp, 'stubs/components/MonitorMcpDetailDialog.js') }));
        build.onResolve({ filter: /cachedMCConfig\.js$/ }, () => ({ path: path.join(exp, 'stubs/services/compact/cachedMCConfig.js') }));
        build.onResolve({ filter: /DiscoverSkillsTool\/prompt\.js$/ }, () => ({ path: path.join(exp, 'stubs/tools/DiscoverSkillsTool/prompt.js') }));
        build.onResolve({ filter: /skillSearch\/featureCheck\.js$/ }, () => ({ path: path.join(exp, 'stubs/services/skillSearch/featureCheck.js') }));
        build.onResolve({ filter: /WorkflowTool\/constants\.js$/ }, () => ({ path: path.join(exp, 'stubs/tools/WorkflowTool/constants.js') }));
        build.onResolve({ filter: /SnapshotUpdateDialog\.js$/ }, () => ({ path: path.join(exp, 'stubs/components/agents/SnapshotUpdateDialog.js') }));
        build.onResolve({ filter: /AssistantSessionChooser\.js$/ }, () => ({ path: path.join(exp, 'stubs/assistant/AssistantSessionChooser.js') }));
        build.onResolve({ filter: /commands\/assistant\/assistant\.js$/ }, () => ({ path: path.join(exp, 'stubs/commands/assistant/assistant.js') }));
        build.onResolve({ filter: /sdk\/runtimeTypes\.js$/ }, () => ({ path: path.join(exp, 'stubs/sdk/runtimeTypes.js') }));
      }
    }
  ],
  external: EXTERNALS,
});
