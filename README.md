# Raddar Representações — Landing Page

Landing page de conversão da Raddar, voltada para compradores de supermercados
e atacados do Rio Grande do Norte. Construída com **React + Vite + Motion**, tema escuro
editorial (Instrument Serif + Geist), conversão única via **WhatsApp**.

As imagens (logo Raddar, foto do fundador e logos das marcas) ficam em
`src/assets/` e são otimizadas/versionadas pelo Vite no build.

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

Tudo que muda com frequência está em `src/content.js`:

| O que                         | Onde                                                  |
| ----------------------------- | ----------------------------------------------------- |
| Número do WhatsApp            | `WHATS_NUMBER` em `src/content.js`                    |
| Mensagens pré-preenchidas     | objeto `MSG` (uma por seção = atribuição)             |
| Marcas do portfólio           | array `BRANDS` + imagens em `src/assets/brands/`      |
| Números do topo               | array `STATS`                                         |
| Dores / passos / FAQ          | arrays `PAINS`, `STEPS`, `FAQ`                        |
| Redes (faixa em movimento)    | array `NETWORKS`                                      |
| Cidades do mapa de cobertura  | array `CITIES`                                        |
| Citação do fundador           | objeto `FOUNDER` + foto em `src/assets/founder.webp`  |
| Cores, fontes e espaçamentos  | variáveis `:root` no topo de `src/styles.css`         |
| Layout de cada seção          | `src/components/*.jsx` (um arquivo por seção)         |

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
├── index.html              # título, meta tags, OG (SEO) e fontes
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx            # ponto de entrada
    ├── App.jsx             # ordem das seções
    ├── content.js          # textos, marcas, WhatsApp
    ├── styles.css          # todo o visual
    ├── assets/             # logo, foto do fundador, logos das marcas
    └── components/         # uma seção por arquivo + Reveal/Counter (animações)
```

As animações respeitam a preferência do sistema "reduzir movimento".
