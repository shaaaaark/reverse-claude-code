export default { name: 'force-snip', type: 'local', description: 'stub force-snip', source: 'builtin', isEnabled(){ return false; }, async call(){ return { type: 'text', text: 'stub' }; } };
