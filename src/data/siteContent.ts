export const companyInfo = {
  name: "LD Materiais Elétricos",
  shortName: "LD",
  tagline: "Energia, qualidade e confiança para cada projeto",
  phoneNumber: "5531988197055",
  phoneDisplay: "(31) 98819-7055",
  whatsappDisplay: "(31) 98819-7055",
  whatsappNumber: "5531988197055",
  email: "contato@ldmateriaiseletricos.com.br",
  instagram: "@ldmateriaiseletricos",
  instagramUrl: "https://instagram.com/ldmateriaiseletricos",
  address: "Avenida Central, 1200 - Centro, São Paulo - SP",
  hours: "Seg a Sex, das 8h às 18h | Sáb, das 8h às 13h",
};

export const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Produtos", href: "#produtos" },
  { label: "Categorias", href: "#categorias" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Orçamento", href: "#orcamento" },
  { label: "Contato", href: "#contato" },
];

export const topHighlights = [
  "Loja online com atendimento especializado",
  "Ofertas para eletricistas, empresas e obras",
  "Suporte comercial via WhatsApp e telefone",
];

export const heroIndicators = [
  "Compra segura",
  "Departamentos técnicos",
  "Retirada e entrega",
  "Suporte comercial",
];

export const stats = [
  { value: "+2.000", label: "itens na vitrine digital" },
  { value: "12x", label: "estrutura pronta para condições comerciais" },
  { value: "24h", label: "para retorno em pedidos especiais" },
];

export type Department = {
  id: string;
  name: string;
  description: string;
  details: string;
  heroTitle: string;
  heroText: string;
  subcategories: string[];
};

export const departmentCatalog: Department[] = [
  {
    id: "fios-cabos",
    name: "Fios e cabos",
    description: "Cabos flexíveis, rolos técnicos e soluções para diferentes cargas.",
    details: "Opções para instalações residenciais, comerciais e industriais.",
    heroTitle: "Fios e cabos para instalações com desempenho e segurança",
    heroText:
      "Página preparada para apresentar bobinas, rolos, cabos flexíveis e linhas técnicas para diferentes tipos de obra.",
    subcategories: [
      "Cabos flexíveis",
      "Cabos PP",
      "Cabos paralelos",
      "Cabos de comando",
      "Arames e acessórios",
      "Conectores elétricos",
    ],
  },
  {
    id: "tomadas-interruptores",
    name: "Tomadas e interruptores",
    description: "Linhas modernas e robustas para acabamento e segurança.",
    details: "Modelos padronizados, modulares e com excelente durabilidade.",
    heroTitle: "Tomadas e interruptores para acabamento profissional",
    heroText:
      "Estrutura voltada para linhas residenciais e comerciais, com destaque para acabamento, modularidade e durabilidade.",
    subcategories: [
      "Interruptores simples",
      "Tomadas 10A e 20A",
      "Espelhos e suportes",
      "Conjuntos modulares",
      "Linhas premium",
      "Acessórios de instalação",
    ],
  },
  {
    id: "disjuntores-protecao",
    name: "Disjuntores e proteção",
    description: "Proteção elétrica confiável para quadros e circuitos.",
    details: "Curvas, amperagens e acessórios para maior segurança da instalação.",
    heroTitle: "Disjuntores e proteção elétrica para projetos exigentes",
    heroText:
      "Página ideal para organizar disjuntores, DPS, DR e soluções de proteção para quadros e painéis.",
    subcategories: [
      "Disjuntores monopolares",
      "Disjuntores bipolares",
      "Disjuntores tripolares",
      "DR e IDR",
      "DPS",
      "Acessórios para proteção",
    ],
  },
  {
    id: "iluminacao",
    name: "Iluminação",
    description: "Lâmpadas, refletores, perfis e luminárias eficientes.",
    details: "Mais desempenho, economia e conforto visual para o seu projeto.",
    heroTitle: "Iluminação para residências, comércios e áreas técnicas",
    heroText:
      "Catálogo preparado para luminárias, painéis LED, refletores, fitas e soluções de iluminação decorativa ou técnica.",
    subcategories: [
      "Painéis LED",
      "Lâmpadas LED",
      "Refletores",
      "Perfis de alumínio",
      "Spots e plafons",
      "Fitas e fontes",
    ],
  },
  {
    id: "quadros-eletricos",
    name: "Quadros elétricos",
    description: "Estruturas, barramentos e organização para distribuição.",
    details: "Modelos compactos e soluções para painéis de baixa tensão.",
    heroTitle: "Quadros elétricos com organização e proteção da distribuição",
    heroText:
      "Página pensada para apresentar quadros de distribuição, barramentos, trilhos e acessórios de montagem.",
    subcategories: [
      "Quadros embutir",
      "Quadros sobrepor",
      "Barramentos",
      "Trilhos DIN",
      "Organização interna",
      "Acessórios de montagem",
    ],
  },
  {
    id: "ferramentas",
    name: "Ferramentas",
    description: "Alicate, multímetro, kits de corte e instrumentos de apoio.",
    details: "Ferramentas pensadas para produtividade e precisão em campo.",
    heroTitle: "Ferramentas para eletricistas e equipes de manutenção",
    heroText:
      "Ambiente preparado para destacar ferramentas manuais, medição, corte, testes e manutenção elétrica.",
    subcategories: [
      "Alicates e chaves",
      "Multímetros",
      "Testadores",
      "Ferramentas isoladas",
      "Kits profissionais",
      "Organização e bolsas",
    ],
  },
  {
    id: "eletrodutos-conduites",
    name: "Eletrodutos e conduítes",
    description: "Proteção e condução de cabos com padrão técnico confiável.",
    details: "Soluções rígidas, flexíveis e acessórios de fixação.",
    heroTitle: "Eletrodutos e conduítes para proteger e organizar instalações",
    heroText:
      "Espaço preparado para tubos, curvas, caixas, abraçadeiras e itens de condução para obras e manutenções.",
    subcategories: [
      "Conduítes corrugados",
      "Eletrodutos rígidos",
      "Curvas e luvas",
      "Caixas de passagem",
      "Abraçadeiras",
      "Fixação e suportes",
    ],
  },
  {
    id: "instalacoes",
    name: "Materiais para instalações",
    description: "Fixação, conectores, terminais e itens de apoio técnico.",
    details: "Tudo para fechar a lista de materiais sem improviso.",
    heroTitle: "Materiais para instalações com foco em produtividade de obra",
    heroText:
      "Página para reunir conectores, terminais, fixadores e itens complementares usados diariamente em campo.",
    subcategories: [
      "Conectores",
      "Terminais",
      "Fitas isolantes",
      "Canaletas",
      "Fixadores",
      "Itens de acabamento",
    ],
  },
  {
    id: "extensoes-adaptadores",
    name: "Extensões e adaptadores",
    description: "Mais mobilidade, compatibilidade e praticidade para o dia a dia.",
    details: "Modelos residenciais, comerciais e reforçados.",
    heroTitle: "Extensões e adaptadores para uso residencial e profissional",
    heroText:
      "Ambiente pensado para mostrar extensões, filtros de linha, adaptadores e soluções de conexão rápida.",
    subcategories: [
      "Extensões residenciais",
      "Extensões reforçadas",
      "Filtros de linha",
      "Adaptadores de tomada",
      "Benjamins",
      "Acessórios de energia móvel",
    ],
  },
  {
    id: "industriais",
    name: "Materiais elétricos industriais",
    description: "Itens para demandas técnicas de maior porte e exigência.",
    details: "Atendimento consultivo para especificações e compras recorrentes.",
    heroTitle: "Materiais elétricos industriais para operações técnicas",
    heroText:
      "Página focada em itens de maior porte, compras recorrentes, linhas especiais e atendimento consultivo.",
    subcategories: [
      "Contatores",
      "Relés",
      "Sinaleiros",
      "Botões de comando",
      "Tomadas industriais",
      "Linhas especiais",
    ],
  },
];

export const categories = departmentCatalog.map((department) => ({
  id: department.id,
  name: department.name,
  description: department.description,
  details: department.details,
  subcategories: department.subcategories,
}));

export const featuredProducts = [
  {
    id: "cabo-flex-750v",
    name: "Cabo flexível 750V",
    categoryId: "fios-cabos",
    category: "Fios e cabos",
    description: "Rolo demonstrativo para alimentação e distribuição com capa resistente.",
    badge: "Mais procurado",
    image: "/product-wire.svg",
    price: "R$ 189,90",
    installment: "ou 6x de R$ 31,65",
    availability: "Pronta entrega",
  },
  {
    id: "interruptor-modular",
    name: "Interruptor modular premium",
    categoryId: "tomadas-interruptores",
    category: "Tomadas e interruptores",
    description: "Acabamento moderno para obras residenciais e comerciais.",
    badge: "Destaque",
    image: "/product-switch.svg",
    price: "R$ 24,90",
    installment: "ou 3x de R$ 8,30",
    availability: "Estoque local",
  },
  {
    id: "disjuntor-tripolar",
    name: "Disjuntor tripolar",
    categoryId: "disjuntores-protecao",
    category: "Disjuntores e proteção",
    description: "Proteção eficiente para circuitos críticos e quadros de distribuição.",
    badge: "Segurança",
    image: "/product-breaker.svg",
    price: "R$ 79,90",
    installment: "ou 4x de R$ 19,97",
    availability: "Pronta entrega",
  },
  {
    id: "painel-led",
    name: "Painel LED de alto rendimento",
    categoryId: "iluminacao",
    category: "Iluminação",
    description: "Iluminação uniforme para ambientes corporativos e residenciais.",
    badge: "Novidade",
    image: "/product-lighting.svg",
    price: "R$ 54,90",
    installment: "ou 5x de R$ 10,98",
    availability: "Envio em 24h",
  },
  {
    id: "quadro-distribuicao",
    name: "Quadro de distribuição",
    categoryId: "quadros-eletricos",
    category: "Quadros elétricos",
    description: "Organização, proteção e expansão para instalações elétricas.",
    badge: "Destaque",
    image: "/product-panel.svg",
    price: "R$ 129,90",
    installment: "ou 6x de R$ 21,65",
    availability: "Sob consulta",
  },
  {
    id: "kit-eletricista",
    name: "Kit eletricista profissional",
    categoryId: "ferramentas",
    category: "Ferramentas",
    description: "Ferramentas demonstrativas para manutenção, montagem e instalação.",
    badge: "Profissional",
    image: "/product-tools.svg",
    price: "R$ 219,90",
    installment: "ou 8x de R$ 27,48",
    availability: "Pronta entrega",
  },
];

export const storeDepartments = departmentCatalog.map((department) => department.name);

export const benefits = [
  {
    title: "Produtos selecionados e de qualidade",
    description: "Curadoria pensada para entregar segurança, desempenho e bom acabamento.",
  },
  {
    title: "Atendimento rápido e personalizado",
    description: "A equipe entende sua lista, esclarece dúvidas e orienta a melhor compra.",
  },
  {
    title: "Variedade para diferentes projetos",
    description: "Da obra residencial à demanda industrial, com mix preparado para cotação.",
  },
  {
    title: "Orçamentos sem compromisso",
    description: "Envie a relação de materiais e receba retorno comercial com agilidade.",
  },
];

export const aboutHighlights = [
  {
    title: "História",
    text: "Estrutura criada para atender desde pequenas reformas até projetos técnicos com maior escala.",
  },
  {
    title: "Missão",
    text: "Levar materiais elétricos confiáveis com atendimento próximo, ágil e seguro.",
  },
  {
    title: "Visão",
    text: "Ser referência regional em atendimento consultivo e qualidade de fornecimento.",
  },
  {
    title: "Valores",
    text: "Compromisso, clareza comercial, responsabilidade técnica e respeito ao cliente.",
  },
];

export const professionalAudiences = [
  "Eletricistas",
  "Construtoras",
  "Empresas",
  "Síndicos",
  "Prestadores de serviço",
  "Profissionais de manutenção",
];

export const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "Eletricista autônomo",
    quote:
      "Atendimento rápido e muita atenção na escolha dos materiais. Consegui fechar a obra com mais segurança.",
  },
  {
    name: "Ana Paula Souza",
    role: "Gestora de compras",
    quote:
      "Recebemos orientação clara para uma cotação técnica. A comunicação pelo WhatsApp facilitou todo o processo.",
  },
  {
    name: "Marcos Ferreira",
    role: "Síndico residencial",
    quote:
      "A equipe ajudou a montar uma lista equilibrada para manutenção predial, com retorno dentro do prazo combinado.",
  },
];

export const footerQuickLinks = [
  "Fios e cabos",
  "Iluminação",
  "Disjuntores",
  "Quadros elétricos",
  "Ferramentas",
  "Orçamentos",
];

export const quoteCustomerTypes = [
  "Residencial",
  "Profissional",
  "Empresa",
  "Construtora",
];
