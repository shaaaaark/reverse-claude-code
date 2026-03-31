export default { name: 'workflows', type: 'local', description: 'stub workflows', source: 'builtin', isEnabled(){ return false; }, async call(){ return { type: 'text', text: 'stub' }; } };
