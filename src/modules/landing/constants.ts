export const WHATSAPP_LINK = "https://wa.me/5500000000000";
export const GOOGLE_FORM_LINK = "https://forms.gle/B6E56U3aJ9qihbwe7";

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
  release: "Lançamento Dezembro · Edição Limitada",
  description:
    "Homenagem a São Pier Giorgio Frassati, jovem que viveu a fé com ousadia e caridade nas ruas da Itália.",
  highlights: [
    "Arte autoral produzida por nossa equipe",
    "Tecido premium 30.1 penteado · 100% algodão com toque suave",
    "Disponível em cor exclusiva da coleção · Modelagem unissex",
  ],
  image: "/produtos/spgf.jpg",
};

export const previousCollections: PreviousCollection[] = [
  {
    name: "Se Ninguém Te Adorar, Eu Vou",
    theme: "Lançamento Julho",
    description:
      "Inspirada na música da Colo de Deus: 'Se Ninguém Te Adorar, Eu Vou'.",
    image: "/produtos/sntev.jpg",
    availability: "Disponível apenas na cor original da coleção.",
  },
  {
    name: "Nossa Senhora de Fátima",
    theme: "Lançamento Julho",
    description:
      "Cores suaves e traços delicados para lembrar o cuidado de Maria em cada detalhe da caminhada.",
    image: "/produtos/nsf.jpg",
    availability: "Modelo mantido em edição limitada na cor original.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Lançamento do mês",
    description:
      "Todo começo de mês apresentamos o modelo exclusivo daquela coleção e abrimos as vendas.",
  },
  {
    title: "Pedidos por 7 dias",
    description:
      "Você tem uma semana para garantir o seu pedido — tudo acontece pelo nosso WhatsApp.",
  },
  {
    title: "Produção em 20 dias",
    description:
      "Confeccionamos com carinho nessas três semanas; quando o pedido fica pronto, combinamos a entrega.",
  },
  {
    title: "Portfólio vivo",
    description:
      "Quer um modelo antigo? Preencha o formulário de interesse para avaliarmos um relançamento.",
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
