/* ============================================================
   RADDAR — conteúdo da landing
   Tudo que muda com frequência mora aqui.
   ============================================================ */

import plastilania from "./assets/brands/plastilania.webp";
import mpr from "./assets/brands/mpr.webp";
import bocardo from "./assets/brands/bocardo.webp";
import chasReal from "./assets/brands/chas_real.webp";
import massasSantana from "./assets/brands/massas_santana.webp";
import ciaDosFrios from "./assets/brands/cia_dos_frios.webp";
import cocoCia from "./assets/brands/coco_cia.webp";

export const WHATS_NUMBER = "5584994476556";

export const whats = (msg) =>
  `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(msg)}`;

export const go = (msg) => window.open(whats(msg), "_blank", "noopener");

/* Mensagens diferentes por CTA = atribuição de origem sem pixel */
export const MSG = {
  header: "Olá! Vim pelo site da Raddar e gostaria de fazer um orçamento.",
  hero: "Olá! Vim pelo site da Raddar e gostaria de fazer um orçamento.",
  steps: "Olá! Vim pelo site da Raddar e gostaria de fazer um orçamento.",
  final: "Olá! Vim pelo site da Raddar e gostaria de fazer um orçamento.",
  float: "Olá! Vim pelo site da Raddar e gostaria de fazer um orçamento.",
  brand: (b) => `Olá! Vim pelo site da Raddar e gostaria de fazer um orçamento da ${b}.`,
};

export const STATS = [
  { value: 28, suffix: " anos", label: "de varejo no Rio Grande do Norte" },
  { value: 12, suffix: "+ redes", label: "no relacionamento comercial do fundador" },
  { value: 10, prefix: "+", suffix: " marcas", label: "líderes geridas no portfólio" },
];

export const PAINS = [
  {
    n: "01",
    title: "Camadas de revenda no preço",
    desc: "Cada intermediário entre a fábrica e o seu CD adiciona margem. Essa diferença sai de um lugar só: do seu lucro.",
  },
  {
    n: "02",
    title: "Ruptura na prateleira",
    desc: "O cliente que não encontra o produto leva o do concorrente — e, muitas vezes, o carrinho inteiro junto.",
  },
  {
    n: "03",
    title: "Vendedor que some",
    desc: "Sem acompanhamento de giro, o problema só aparece quando a prateleira já está vazia. Aí o prejuízo já aconteceu.",
  },
];

export const STEPS = [
  {
    n: "01",
    title: "Mande um WhatsApp",
    desc: "Você fala direto com o dono. Tabela e condições no mesmo dia — sem cadastro, sem compromisso.",
  },
  {
    n: "02",
    title: "Escolha o mix para a sua praça",
    desc: "Indicamos o que gira na sua região, com base em 28 anos de varejo no RN. Visitamos sua loja se preferir.",
  },
  {
    n: "03",
    title: "Pedido faturado pela fábrica",
    desc: "Nota direto da indústria, no seu CNPJ. A Raddar acompanha entrega, giro e reposição.",
  },
];

export const BRANDS = [
  { key: "plastilania", logo: plastilania, name: "Plastilânia", cat: "Descartáveis e utilidades plásticas" },
  { key: "mpr", logo: mpr, name: "Grupo MPR", cat: "Higiene, limpeza e perfumação", sub: "Coperalcool · Coala Home · Vinagreen · Zulu" },
  { key: "bocardo", logo: bocardo, name: "Bocardo", cat: "Doces, recheios e refrescos" },
  { key: "chas_real", logo: chasReal, name: "Chás Real", cat: "Chás e erva-mate · desde 1834" },
  { key: "massas_santana", logo: massasSantana, name: "Massas Santana", cat: "Massas alimentícias" },
  { key: "cia_dos_frios", logo: ciaDosFrios, name: "Cia dos Frios", cat: "Frios e pescados congelados" },
  { key: "coco_cia", logo: cocoCia, name: "Coco & Cia", cat: "Derivados de coco" },
];

export const NETWORKS = [
  "Super Fácil Atacado", "Atacadão Vicunha", "Rede Mais Supermercados",
  "Supermercados Nordestão", "Comercial do Trigo", "Central Distribuição JL",
  "Favoritos Supermercados", "Casa Norte", "Rebouças Supermercado",
  "Rede Cidade", "Rede Queiroz", "Rede Oeste", "Rede Seridó",
  "O Baratão das Embalagens", "Brasil Distribuidora de Embalagens",
  "Eloi Chaves", "Estrelão Distribuidora", "Seridó Plast",
];

/* Polos atendidos (lon/lat aproximados, usados no mapa) */
export const CITIES = [
  { name: "Natal", region: "Capital e Grande Natal", lon: -35.21, lat: -5.79 },
  { name: "Mossoró", region: "Oeste potiguar", lon: -37.34, lat: -5.19 },
  { name: "Caicó", region: "Seridó", lon: -37.1, lat: -6.46 },
];

export const FAQ = [
  {
    q: "Tem pedido mínimo?",
    a: "Cada indústria tem a sua política, mas conversar não tem mínimo. Diga o tamanho da sua operação e montamos a condição que cabe na sua compra.",
  },
  {
    q: "Atende a minha cidade?",
    a: "Atuamos em Natal, Mossoró, Caicó e nos principais polos do RN. Fora desses eixos, pergunte mesmo assim — em boa parte dos casos conseguimos atender.",
  },
  {
    q: "Como funciona o faturamento?",
    a: "O pedido é faturado direto pela indústria, no CNPJ da sua loja, com nota da fábrica. A representação não custa nada para você.",
  },
  {
    q: "E se o produto não girar?",
    a: "Não empurramos volume. Começamos com um mix enxuto, acompanhamos o sell-out e ajustamos o pedido seguinte com base no que realmente vendeu.",
  },
];

export const FOUNDER = {
  name: "Marc'Antônio Câmara",
  role: "Fundador, Raddar Representações",
  quote:
    "Eu vivo de varejo no RN há 28 anos. Nesse tempo, aprendi que comprador não precisa de promessa bonita — precisa de fornecedor que atende o telefone. Por isso meu combinado é simples: o que eu prometo, eu cumpro. E se der problema, você fala direto comigo, não com um 0800.",
  pastBrands: ["Nestlé", "Ferrero", "Red Bull", "Bauducco", "Ajinomoto", "Nissin", "Kellogg's", "Diageo", "Campari"],
};

export const CONTACT = {
  phone: "(84) 99447-6556",
  email: "raddar.rep@hotmail.com",
};
