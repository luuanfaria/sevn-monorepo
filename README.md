---

# Sevn Monorepo

Este é um repositório monorepo que contém dois pacotes: `web` e `server`.

## Descrição

Este monorepo é um projeto que utiliza a abordagem de monorepo para compartilhar código entre os projetos `web` e `server`. O `web` é uma aplicação Next.js que utiliza o App Router do Next.js, enquanto o `server` é uma aplicação Node.js com Express.

## Estrutura do Projeto

- **packages/web**: Contém o código-fonte da aplicação web, construída com Next.js e App Router.
- **packages/server**: Contém o código-fonte do servidor, construído com Node.js e Express.

## Scripts Disponíveis

### `web`

Este script inicia a aplicação web.

```bash
pnpm run web
```

### `server`

Este script inicia o servidor.

```bash
pnpm run server
```

### `start:all`

Este script inicia tanto a aplicação web quanto o servidor simultaneamente.

```bash
pnpm run start:all
```

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/luuanfaria/sevn-monorepo.git
```

2. Instale as dependências:

```bash
cd sevn-monorepo
pnpm install
```
---