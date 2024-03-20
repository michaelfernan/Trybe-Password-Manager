# Gerenciador de Senhas

## Descrição
O "Gerenciador de Senhas" é um aplicativo desenvolvido como uma avaliação de front-end no primeiro período. Este aplicativo permite aos usuários gerenciar de forma eficiente e segura suas senhas de diversos serviços.

## Requisitos

1. **Crie um título para a aplicação**: Adiciona um título 'Gerenciador de senhas' em uma tag `<h1>` dentro do componente App.
2. **Crie um componente Form**: Implementa um formulário com inputs para nome do serviço, login, senha e URL, além de botões para cadastrar e cancelar.
3. **Renderize condicionalmente o formulário**: Inicialmente, mostra apenas um botão "Cadastrar nova senha" que, ao ser clicado, revela o formulário.
4. **Valide os campos do formulário**: Assegura que todos os campos sejam preenchidos corretamente, incluindo verificações específicas para a senha.
5. **Crie um display para a validação da senha**: Mostra mensagens de validação para a senha, alterando classes CSS conforme o usuário digita.
6. **Implemente a função do botão "Cadastrar" do formulário**: Permite cadastrar novos serviços, exibindo-os na tela, e retorna para o estado inicial após o cadastro.
7. **Permita apagar um serviço cadastrado**: Adiciona a funcionalidade de remover serviços cadastrados.
8. **Implemente um checkbox para esconder/mostrar as senhas**: Inclui um checkbox que alterna entre exibir e ocultar as senhas cadastradas.

### Requisitos Bônus
9. **Botão de esconder/mostrar senha no formulário**: Implementa um botão para alternar a visibilidade da senha sendo digitada no formulário.
10. **Exibe um alerta ao cadastrar um novo serviço**: Mostra um alerta com a biblioteca sweetalert2 após o cadastro bem-sucedido de um serviço.

## Como Usar
1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Inicie o aplicativo com `npm start`.
4. Siga as instruções na tela para gerenciar suas senhas.

## Tecnologias Utilizadas
- HTML/CSS/JavaScript
- React
- Biblioteca sweetalert2 (para alertas)

## Autor
Michael Fernandes

## Notas
Este projeto foi desenvolvido como parte de uma avaliação de front-end, focando na criação de interfaces interativas e validações de formulário com React.

## Contribuições
Contribuições para melhorar a aplicação são sempre bem-vindas. Siga estes passos para contribuir:
1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/novaFeature`).
3. Faça o commit das suas alterações (`git commit -am 'Adiciona nova funcionalidade'`).
4. Faça o push para a branch (`git push origin feature/novaFeature`).
5. Abra um Pull Request.

