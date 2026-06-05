# Raddar Representações — Landing Page

Landing page de conversão da Raddar, voltada para compradores de supermercados
e atacados do Rio Grande do Norte. Construída com **React + Vite**, tema escuro
minimalista, conversão única via **WhatsApp**.

Todas as imagens (logo Raddar, foto do fundador e logos das marcas) estão
**embutidas no código** — não há dependência de arquivos externos ou CDN.

---

## Requisitos

- **Node.js 18+** (recomendado 20 ou superior) → https://nodejs.org
- **pnpm** → se ainda não tiver, instale com:

```bash
npm install -g pnpm
```

## Rodando na sua máquina

```bash
# 1. Entre na pasta do projeto
cd raddar-landing

# 2. Instale as dependências
pnpm install

# 3. Suba o servidor de desenvolvimento
pnpm dev
```

A página abre em **http://localhost:5173**. Qualquer alteração no código
recarrega automaticamente.

> Se o `pnpm install` mostrar o aviso "Ignored build scripts: esbuild",
> pode ignorar — é o comportamento padrão do pnpm 10+. Caso o `pnpm dev`
> reclame do esbuild, rode `pnpm approve-builds` e aprove o esbuild.

## Build de produção

```bash
pnpm build      # gera a pasta dist/ pronta para publicar
pnpm preview    # testa o build localmente
```

O conteúdo de `dist/` é estático — pode ser hospedado em **Vercel**,
**Netlify**, **Cloudflare Pages** ou qualquer servidor. Na Vercel, basta
importar o repositório: ela detecta Vite sozinha.

---

## Onde editar cada coisa

Tudo que muda com frequência está no topo de `src/RaddarLanding.jsx`:

| O que                         | Onde                                          |
| ----------------------------- | --------------------------------------------- |
| Número do WhatsApp            | constante `WHATS_NUMBER`                      |
| Mensagens pré-preenchidas     | objeto `MSG` (uma por seção = atribuição)     |
| Marcas do portfólio           | array `BRANDS` + imagens em `BLOGO`           |
| Dores / passos / FAQ          | arrays `PAINS`, `STEPS`, `FAQ`                |
| Redes (prova social)          | array `NETWORKS`                              |
| Citação do fundador           | seção "QUEM ATENDE" no JSX                    |
| Cores e tipografia            | bloco `css` no fim do arquivo (variáveis `:root`) |

### Atribuição de leads sem pixel

Cada botão da página abre o WhatsApp com uma mensagem diferente
(hero, passos, marca específica, fim da página). Ao receber o contato,
a primeira mensagem do lead revela **de qual seção ele veio** — é o
tracking possível num funil 100% WhatsApp. Não altere os textos do
objeto `MSG` sem manter essa diferenciação.

---

## Estrutura

```
raddar-landing/
├── index.html              # título, meta tags e OG (SEO)
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx            # ponto de entrada
    └── RaddarLanding.jsx   # toda a página (componente + estilos + imagens)
```
