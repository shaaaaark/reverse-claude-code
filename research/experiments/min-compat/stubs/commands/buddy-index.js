export default { name: 'buddy', type: 'local', description: 'stub buddy', source: 'builtin', isEnabled(){ return false; }, async call(){ return { type: 'text', text: 'stub' }; } };
