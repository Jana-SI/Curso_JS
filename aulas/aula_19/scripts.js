// tipo primitivo
const mensagem = '   minha primeira mensagem';
console.log(typeof mensagem, 
            mensagem.length, 
            mensagem[7], 
            mensagem.includes('primeira'),
            mensagem.startsWith('meu'),
            mensagem.endsWith('mensagem'),
            mensagem.indexOf('primeira'),
            mensagem.replace('minha','sua'),
            mensagem.trim(),
            mensagem.split(' '));

// tipo objeto
const outraMensagem = new String('    Bom dia');
console.log(typeof outraMensagem, 
            outraMensagem.length,
            outraMensagem[5],
            outraMensagem.includes('noite'),
            outraMensagem.startsWith('Bom'),
            outraMensagem.endsWith('tarde'),
            outraMensagem.indexOf('dia'),
            outraMensagem.replace('dia','noite'),
            outraMensagem.trim(),
            outraMensagem.split(' '));