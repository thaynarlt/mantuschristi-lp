export const WHATSAPP_LINK = "https://wa.me/5500000000000";
export const GOOGLE_FORM_LINK = "https://forms.gle/SEU_FORMULARIO";

export type FeaturedRelease = {
  name: string;
  release: string;
  description: string;
  highlights: string[];
  image: string;
};

export type PreviousCollection = {
  name: string;
  theme: string;
  description: string;
  image: string;
  availability: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type ValuePoint = {
  title: string;
  description: string;
};

export const featuredRelease: FeaturedRelease = {
  name: "Camiseta São Pier Giorgio Frassati",
  release: "Lançamento Novembro · Edição Limitada",
  description:
    "A camiseta São Pier Giorgio Frassati é uma homenagem ao santo italiano, que foi um jovem católico que morreu em 1925, aos 24 anos, em um acidente de carro. Ele foi um dos primeiros santos jovens do século XX.",
  highlights: [
    "Arte autoral produzida em parceria com artistas católicos",
    "Tecido premium 30.1 penteado · 100% algodão com toque suave",
    "Disponível em cor exclusiva da coleção · Modelagem unissex",
  ],
  image: "/produtos/spgf.jpg",
};

export const previousCollections: PreviousCollection[] = [
  {
    name: "Sementes que Evangelizam",
    theme: "Catequese em movimento",
    description:
      "Mensagens que brotam no cotidiano e geram testemunho: uma coleção pensada para quem vive a missão no dia a dia.",
    image: "/produtos/sntev.jpg",
    availability: "Disponível apenas na cor original da coleção.",
  },
  {
    name: "Nossa Senhora de Fátima",
    theme: "Consolo e esperança",
    description:
      "Cores suaves e traços delicados para lembrar o cuidado de Maria em cada detalhe da caminhada.",
    image: "/produtos/nsf.jpg",
    availability: "Modelo mantido em edição limitada na cor original.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Janela de pedidos",
    description:
      "Abrimos um período determinado para você garantir o último lançamento.",
  },
  {
    title: "Faça o pedido no WhatsApp",
    description:
      "Entre no nosso WhatsApp, informe seus dados, endereço e tamanho desejado.",
  },
  {
    title: "Prazo e entrega combinados",
    description:
      "Nossa equipe informa o tempo de confecção e combina com você a melhor forma de entrega.",
  },
];

export const valuePoints: ValuePoint[] = [
  {
    title: "Fé em cada traço",
    description:
      "Desenvolvemos artes originais que carregam símbolos e histórias da Igreja com respeito e beleza.",
  },
  {
    title: "Qualidade que dura",
    description:
      "Selecionamos malhas confortáveis, com caimento moderno e acabamento que resiste ao uso do dia a dia.",
  },
  {
    title: "Experiência humana",
    description:
      "Proximidade para entender o que você precisa, enviar sugestões e acompanhar o pedido até chegar.",
  },
];

