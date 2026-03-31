export default { name: 'torch', type: 'local', description: 'stub torch', source: 'builtin', isEnabled(){ return false; }, async call(){ return { type: 'text', text: 'stub' }; } };
