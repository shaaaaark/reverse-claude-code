export default { name: 'assistant', type: 'local', description: 'stub assistant', source: 'builtin', isEnabled(){ return false; }, async call(){ return { type: 'text', text: 'stub' }; } };
