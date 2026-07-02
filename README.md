# 🚀 Desenvolvimento Web e Mobile — Portfólio de Práticas Academicas

**🔗 Repositório Oficial:** [github.com/arthurhanquier081/trabalho-web-mobile](https://github.com/arthurhanquier081/trabalho-web-mobile) 

<p align="center">
  <img src="https://img.shields.io/badge/Ambiente-Node.js%20LTS-green?style=for-the-badge&logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/Front--End-React%20%2F%20Vite-blue?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/Back--End-Express.js-lightgrey?style=for-the-badge&logo=express" alt="Express">
  <img src="https://img.shields.io/badge/Estilo-CSS3%20Responsivo-orange?style=for-the-badge&logo=css3" alt="CSS3">
</p>

> **Status do Projeto:** 📊 Concluído (Práticas 3 e 4 Finalizadas com Sucesso)

Este repositório centraliza e documenta de forma profissional as soluções full-stack desenvolvidas para as disciplinas de Desenvolvimento Web e Mobile. O projeto adota a arquitetura de **Monorepo**, isolando dependências e microsserviços em pacotes específicos para garantir a escalabilidade.

---

## 📁 Estrutura de Pastas e Componentes

O repositório está organizado de forma modular para separar as regras de negócio das APIs e as interfaces visuais:

```text
📁 Web-Mobile/
├── 📁 backend-agenda/   # API Node.js (Express) - Gestão de Contatos (Prática 3)
├── 📁 backend-todo/     # API Node.js (Express) - Gestão de Tarefas (Prática 4)
├── 📁 frontend-web/     # Interface Web SPA em React (Vite) - Agenda (Prática 3)
├── 📁 frontend-todo/    # Interface Mobile Mockup em React (Vite) - To-Do List (Prática 4)
└── README.md            # Documentação Master do Repositório (Padrão Alura) ```

### 🛠️ Tecnologias e Ferramentas Utilizadas
Back-end
Node.js & Express.js: Criação de servidores HTTP leves e rápidos.

CORS: Configuração de Cross-Origin Resource Sharing para liberação de acessos locais de portas distintas.

Front-end (Web & Mobile Mockup)
React.js (Vite): Estruturação de Single Page Applications (SPAs) otimizadas.

Hooks (useState, useEffect): Controle total de estados de inputs e ciclos de vida assíncronos.

CSS3 Avançado: Mockups simulados nativos e regras de responsividade com @media queries.

### 🗺️ Mapeamento Arquitetural das APIs (Rotas)

📇 1. API Agenda de Contatos (`backend-agenda` — Porta `8080`)
* **Modelo do Objeto:** `{ id: Number, name: String, email: String, phone: String }`

| Método | Endpoint | Objetivo técnico | Status Code |
| :--- | :--- | :--- | :--- |
| **GET** | `/contatos` | Retorna o array de contatos registrados na agenda | `200 OK` |
| **POST** | `/contatos` | Cria um novo contato validados por parâmetros | `201 Created` |

📝 2. API To-Do List (`backend-todo` — Porta `8181`)
* **Modelo do Objeto:** `{ id: Number, title: String, completed: Boolean }`

| Método | Endpoint | Objetivo técnico | Status Code |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/tasks` | Retorna o array completo de afazeres | `200 OK` |
| **GET** | `/api/tasks/:id` | Busca os dados específicos de uma tarefa filtrada por ID | `200 / 404` |
| **POST** | `/api/tasks` | Insere uma nova meta no servidor com status padrão false | `201 Created` |
| **PUT** | `/api/tasks/:id` | Altera propriedades ou inverte o estado de conclusão | `200 OK` |
| **DELETE** | `/api/tasks/:id` | Remove fisicamente um registro através do ID | `200 OK` |


### 💻 Demonstração das Aplicações
### 📅 Prática 3: Agenda Full-Stack (Web)
Interface desktop adaptável com formulário síncrono. Consome dados via fetch() na porta 8080 e realiza re-renderização automática e reativa em tela imediatamente após a validação do salvamento de novos contatos.

### 📱 Prática 4: To-Do List (Mockup Mobile)
Aplicação mobile voltada para a melhor usabilidade do usuário (UX). Construído sob a metodologia Mobile-First, o app simula nativamente a carcaça física de um smartphone no browser, permitindo a listagem, adição via requisições assíncronas, exclusão por IDs e o efeito visual de texto riscado no clique via método PUT.

### ⚙️ Como Executar os Projetos Localmente
### 📋 Pré-requisitos
Antes de começar, certifique-se de ter o Node.js (LTS) instalado em sua máquina.

### 🏁 Passo a Passo de Inicialização
### 🚀 1. Rodando a Prática 3 (Agenda de Contatos)
Abra dois terminais paralelos no seu editor de código:

#Terminal 1: Ligar o Servidor Back-end
cd backend-agenda
npm install
npm run dev

#Terminal 2: Abrir a Interface Web React
cd frontend-web
npm install
npm run dev

### 🚀 2. Rodando a Prática 4 (To-Do List Mobile)
Abra outros dois terminais dedicados:

#Terminal 1: Iniciar a API de Tarefas
cd backend-todo
node server.js

#Terminal 2: Abrir a Interface de Celular
cd frontend-todo
npm install
npm run dev

Aplicações desenvolvidas por Arthur Hanquier. Práticas validadas e prontas para avaliação! 🚀