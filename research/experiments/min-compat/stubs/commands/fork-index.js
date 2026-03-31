export default { name: 'fork', type: 'local', description: 'stub fork', source: 'builtin', isEnabled(){ return false; }, async call(){ return { type: 'text', text: 'stub' }; } };
