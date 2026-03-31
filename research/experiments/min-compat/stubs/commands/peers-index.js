export default { name: 'peers', type: 'local', description: 'stub peers', source: 'builtin', isEnabled(){ return false; }, async call(){ return { type: 'text', text: 'stub' }; } };
