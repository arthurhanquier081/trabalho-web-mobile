# Trabalho Prático: Desenvolvimento Web e Mobile
**Repositório Oficial:** arthurhanquier081/trabalho-web-mobile

Este repositório centraliza o desenvolvimento das atividades práticas das disciplinas de desenvolvimento Web e Mobile. O projeto consiste na arquitetura unificada de soluções Full-Stack, integrando APIs de Back-end em Node.js com interfaces modernas para Web (React) e dispositivos móveis (React Native).

---

## 📁 Estrutura de Pastas (Monorepo)

O projeto adota o padrão de múltiplos pacotes em um único repositório para garantir o isolamento de escopo de cada aplicação:

```text
📁 Web-Mobile/
├── 📁 backend-agenda/   # API Node.js (Express) para gestão de contatos (Prática 3)
├── 📁 backend-todo/     # API Node.js (Express) para gestão de tarefas (Prática 4)
├── 📁 frontend-web/      # Interface Web Single Page Application em React/Vite (Prática 3)
└── README.md            # Documentação arquitetural do projeto

## 🛠️ Stack Tecnológica
Ambiente de Execução: Node.js LTS

Back-end: Express.js, Cors (Cross-Origin Resource Sharing)

Front-end Web: React.js, Vite, Hooks (useState, useEffect), CSS3 Responsivo

##🚀 Progresso do Projeto & Funcionalidades Implementadas
##⚙️ Engenharia de Back-end (Concluído)
Isolamento de Portas: A API de Contatos foi fixada na porta 8080 e a API To-Do configurada na porta 8181 para viabilizar a execução simultânea dos microsserviços sem conflitos de rede (EADDRINUSE).

Validação de Rotas: Endpoints de métodos HTTP GET e POST validados e testados individualmente utilizando o Postman, garantindo respostas com status codes 200 OK e 201 Created.

## 💻 Front-end Web — Prática 3 (Concluído)
Setup do Ambiente: Criação da SPA Web estruturada a partir do ecossistema Vite para otimização do bundling.

Gerenciamento de Estado: Implementação do Hook useState para controle estrito e captura em tempo real dos dados inseridos nos inputs (Nome, E-mail e Telefone).

Usabilidade e Responsividade: Componentização de um formulário limpo com CSS avançado e regras de @media queries que garantem adaptabilidade fluida tanto para desktops quanto para displays mobile menores.

Integração com a API (Full-Stack):

Consumo de dados utilizando o hook useEffect realizando requisições assíncronas (GET) com fetch() apontando para a porta 8080 para renderização dinâmica da lista de contatos salvos.

Envio de dados via requisição assíncrona (POST) com cabeçalho application/json e validação do Status 201 Created.

Mecanismo de re-renderização automática para recarregar a lista na tela imediatamente após um cadastro bem-sucedido.

##📱 Front-end Mobile — Prática 4 (Próximo Passo)
[ ] Inicialização da estrutura mobile utilizando o Expo para o desenvolvimento do aplicativo de tarefas (To-Do List) integrado à API da porta 8181.

Instruções para Inicialização dos Ambientes Localmente
## 📑 Pré-requisitos
Possuir o ambiente de execução do Node.js instalado globalmente no sistema operacional.

1. Inicialização do Back-end (API Agenda)
Em um terminal dedicado na pasta raiz do projeto, execute:

cd backend-agenda
npm install
npm run dev

2. Inicialização do Front-end Web (React)
Em um segundo terminal aberto na pasta raiz do projeto, execute:

cd frontend-web
npm install
npm run dev

O compilador Vite gerará a URL de acesso à aplicação local (por padrão, http://localhost:5173), consumindo os dados diretamente da porta.