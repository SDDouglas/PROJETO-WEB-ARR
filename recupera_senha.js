//
document.getElementById('recovery-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém o valor do campo de e-mail
    const email = document.getElementById('email').value;

    // Exemplo de lógica para recuperação de senha
    // Aqui você geralmente faria uma solicitação para o servidor
    // para processar a recuperação de senha.

    // Mensagem de sucesso ou erro (exemplo simples)
    const messageElement = document.getElementById('message');
    
    if (email) {
        // Simulação de sucesso
        messageElement.textContent = `Instruções de recuperação de senha foram enviadas para ${email}.`;
        messageElement.style.color = 'green';
    } else {
        // Simulação de erro
        messageElement.textContent = 'Por favor, insira um e-mail válido.';
        messageElement.style.color = 'red';
    }
});
//