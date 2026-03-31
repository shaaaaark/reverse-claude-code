export default { name: 'subscribe-pr', type: 'local', description: 'stub subscribe-pr', source: 'builtin', isEnabled(){ return false; }, async call(){ return { type: 'text', text: 'stub' }; } };
