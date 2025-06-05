# Lista de Tarefas em React

Uma aplicação simples de **Lista de Tarefas** desenvolvida em React, utilizando apenas Hooks (`useState`, `useEffect`) e armazenamento local (`localStorage`). Este projeto foi criado com o objetivo de reforçar conceitos básicos de React, estado imutável e manipulação de efeitos colaterais, além de praticar boas práticas de UX e responsividade com CSS puro.

---

## 📋 Descrição

Este app permite ao usuário:

- **Adicionar tarefas**  
- **Marcar/Desmarcar como concluída** (clique no texto da tarefa para riscar ou retornar ao status “pendente”)  
- **Remover itens individualmente** ou **“Limpar tudo”** para esvaziar a lista  
- **Persistir tarefas no navegador**: todas as entradas são salvas no `localStorage` e só são apagadas se o usuário desejar  
- **Interface em modo escuro e responsiva**, construída apenas com CSS (Flexbox e Media Queries), funcionado bem em desktop e mobile

---

## 🚀 Funcionalidades

1. **Adicionar uma nova tarefa**  
   - Campo de input para digitar o título da tarefa  
   - Botão de confirmação para adicionar à lista  

2. **Marcar/Desmarcar tarefa como concluída**  
   - Clique no texto da tarefa para alternar entre “concluída” ou “pendente”  
   - Tarefas concluídas são riscadas e estilizadas de forma diferenciada  

3. **Remover tarefas individualmente**  
   - Cada item possui um ícone ou botão “🗑️” para exclusão  

4. **Limpar todas as tarefas**  
   - Botão para remover todos os itens da lista de uma vez  

5. **Persistência com `localStorage`**  
   - Ao recarregar a página ou fechar o navegador, as tarefas permanecem salvas  
   - Sem necessidade de backend ou banco de dados externo  

6. **Design Dark Mode e Responsivo**  
   - Construído com CSS puro (Flexbox e Media Queries)  
   - Funciona em diferentes tamanhos de tela (desktop e dispositivos móveis)  

---

## 🛠 Tecnologias Utilizadas

- **React** (versão 18+)
  - Hooks: `useState`, `useEffect`
- **CSS** puro
  - Flexbox para layout
  - Media Queries para responsividade
- **LocalStorage** (API do navegador)
- **Vite** (opcional, mas recomendado para rodar o projeto localmente)

---

## Instalar Dependências

# Usando npm
npm install

# Ou usando Yarn
yarn install

---

## Executar em modo de desenvolvimento

# Usando npm
npm run dev

# Ou usando Yarn
yarn dev



