import { Product, CategoryInfo, Testimonial, FaqItem } from '../models/product.model';

export const FREE_ENEM_DRIVE_URL = 'https://drive.google.com/drive/folders/1mappia-enem-5-mapas-gratuitos?usp=sharing';
export const WHATSAPP_PHONE = '11987973086';
export const WHATSAPP_PHONE_FORMATTED = '(11) 98797-3086';
export const WHATSAPP_URL = 'https://wa.me/5511987973086?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20os%20mapas%20mentais%20da%20Mappia!';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'enem-2026',
    slug: 'enem-2026',
    title: 'ENEM 2026 & Vestibulares',
    shortTitle: 'ENEM 2026',
    description: 'A preparação definitiva para o ENEM 2026: Combo 150 Mapas Mentais + Simulado Oficial 40 Questões.',
    icon: 'local_fire_department',
    color: '#082B5C',
    badgeText: 'Destaque Principal'
  },
  {
    id: 'mapas-mentais',
    slug: 'mapas-mentais',
    title: 'Mapas Mentais',
    shortTitle: 'Mapas Mentais',
    description: 'Todos os mapas mentais visuais em PDF para aprender, revisar e memorizar com máxima eficiência.',
    icon: 'hub',
    color: '#0D4F91',
    badgeText: 'Metodologia Visual'
  },
  {
    id: 'biblicos',
    slug: 'biblicos',
    title: 'Bíblicos',
    shortTitle: 'Bíblicos',
    description: 'Estude a Bíblia de forma visual, cronológica e organizada com mapas conceituais e genealogias.',
    icon: 'menu_book',
    color: '#082B5C',
    badgeText: 'Linha Bíblica'
  },
  {
    id: 'estudos',
    slug: 'estudos',
    title: 'Estudos & Concursos',
    shortTitle: 'Estudos',
    description: 'Conteúdos estruturados para escola, faculdade, concursos públicos e técnicas de memorização.',
    icon: 'school',
    color: '#0D4F91',
    badgeText: 'Concursos & Graduação'
  },
  {
    id: 'ingles',
    slug: 'ingles',
    title: 'Inglês',
    shortTitle: 'Inglês',
    description: 'Mapas mentais para aprender inglês com mais facilidade: tempos verbais, vocabulário e expressões.',
    icon: 'language',
    color: '#082B5C',
    badgeText: 'Em Breve'
  },
  {
    id: 'programacao',
    slug: 'programacao',
    title: 'Programação',
    shortTitle: 'Programação',
    description: 'Conceitos de programação, algoritmos, lógica, Python e estruturas de dados de forma visual.',
    icon: 'terminal',
    color: '#0D4F91',
    badgeText: 'Em Breve'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'enem-5-mapas-gratuitos',
    slug: '5-mapas-enem-gratis',
    title: '5 MAPAS MENTAIS ENEM 2026 — BRINDE GRATUITO',
    shortDescription: 'Amostra oficial com 5 mapas estratégicos cobrindo Matemática, Humanas, Natureza, Linguagens e Redação em PDF pronto para imprimir.',
    fullDescription: 'Experimente a metodologia visual da Mappia sem pagar nada! Este material gratuito reúne 5 mapas mentais completos e objetivos com os temas mais recorrentes do ENEM 2026: Porcentagem no ENEM, Revolução Industrial, Ecologia no ENEM, Interpretação de Texto e Redação Nota 1000 com as 5 Competências do Inep. Arquivo em PDF de altíssima definição (300 DPI), formato A4 pronto para imprimir ou revisar direto no seu celular ou computador.',
    price: 0,
    originalPrice: 19.90,
    badge: '100% GRÁTIS • BRINDE OFICIAL',
    categories: ['enem-2026', 'mapas-mentais'],
    image: '/assets/images/enem-brinde.png',
    mapsCount: 5,
    format: 'PDF Grátis',
    pagesEstimated: 6,
    rating: 5.0,
    reviewsCount: 2340,
    isFeatured: true,
    isBestSeller: true,
    kiwifyCheckoutUrl: FREE_ENEM_DRIVE_URL,
    subjects: [
      'Matemática: Porcentagem no ENEM (Fórmulas e Casos Práticos)',
      'Ciências Humanas: Revolução Industrial (1ª e 2ª Fases)',
      'Ciências da Natureza: Ecologia no ENEM (Cadeia e Ciclos)',
      'Linguagens: Interpretação de Texto (Estratégias de Resolução)',
      'Redação ENEM: Estrutura em 4 Parágrafos & 5 Competências'
    ],
    whatYouGet: [
      'Arquivo PDF completo em alta resolução pronto para impressão em A4',
      '5 Mapas Mentais ilustrados das 5 áreas do conhecimento',
      'Esquemas mnemônicos e dicas do que mais cai na prova',
      'Download imediato e direto pelo Google Drive, sem custo'
    ],
    targetAudience: [
      'Estudantes que vão prestar o ENEM 2026 e querem conhecer os mapas da Mappia',
      'Vestibulandos que precisam de revisões rápidas e certeiras'
    ]
  },
  {
    id: 'combo-enem-supremo',
    slug: 'enem-2026-mapas-e-simulado',
    title: 'ENEM 2026: 150 MAPAS MENTAIS + SIMULADO',
    shortDescription: '150 Mapas Mentais cobrindo as 5 áreas do conhecimento + Simulado Oficial com 40 questões, gabarito comentado e folha de respostas.',
    fullDescription: 'O material definitivo para a sua aprovação no ENEM 2026. Reúne em um único pacote completo os 150 mapas mentais organizados estrategicamente por disciplina (Matemática, Humanas, Natureza, Linguagens e Redação Nota 1000) e o Simulado Oficial com 40 questões nas 5 áreas, gabarito comentado passo a passo e Folha de Respostas oficial para diagnóstico de tempo e acertos. Arquivos em PDF de altíssima resolução gráfica (300 DPI) prontos para imprimir ou estudar no celular, tablet e computador. Estude. Revise. Memorize. Conquiste.',
    price: 19.99,
    originalPrice: 49.90,
    badge: 'MAIS VENDIDO • DESTAQUE ENEM 2026',
    categories: ['enem-2026', 'mapas-mentais'],
    image: '/assets/images/combo-enem.png',
    mapsCount: 150,
    format: 'PDF + Simulado',
    pagesEstimated: 235,
    rating: 5.0,
    reviewsCount: 1890,
    isFeatured: true,
    isBestSeller: true,
    kiwifyCheckoutUrl: 'https://pay.kiwify.com.br/nsHOTy9',
    subjects: [
      '150 Mapas Mentais completos de todas as 5 áreas',
      'Matemática e Funções (Afim, Quadrática, Geometria e Estatística)',
      'Ciências Humanas, História do Brasil, Filosofia e Geografia',
      'Ciências da Natureza: Biomas, Genética, Termodinâmica e Química Orgânica',
      'Linguagens, Gêneros Textuais e Figuras de Linguagem',
      'Modelos Prontos de Estrutura para Redação Nota 1000',
      'Simulado Oficial com 40 Questões comentadas',
      'Folha de Respostas Oficial com Controle de Acertos'
    ],
    whatYouGet: [
      'Acesso imediato aos 150 mapas mentais em PDF formato A4 (300 DPI)',
      'Simulado Oficial completo com 40 questões selecionadas nas 5 áreas',
      'Gabarito oficial com resolução e fundamentação comentada',
      'Folha de respostas oficial padronizada para treino de tempo',
      'Tabela de diagnóstico de desempenho "Meu Resultado ENEM"',
      'Versão colorida de alta nitidez e versão econômica para impressão',
      'Atualizações gratuitas de edital para o ENEM 2026'
    ],
    targetAudience: [
      'Estudantes que prestarão o ENEM 2026 e vestibulares concorridos',
      'Vestibulandos que precisam de revisões rápidas sem perder dias relendo livros imensos',
      'Quem quer testar a retenção real dos conteúdos com simulação prática de prova'
    ],
    samplePreview: {
      title: 'Amostra: 150 Mapas Mentais + Simulado 40 Questões',
      description: 'Diagramação colorida de alta resolução com divisão conceitual e síntese visual.',
      previewUrl: '/assets/images/mockup_enem_mapas_1790955321600.jpg'
    }
  },
  {
    id: 'simulado-enem-2026',
    slug: 'simulado-enem-2026',
    title: 'SIMULADO ENEM 2026 — 40 QUESTÕES',
    shortDescription: '40 questões oficiais nas 5 áreas do conhecimento com gabarito oficial comentado e Folha de Respostas oficial com controle de acertos.',
    fullDescription: 'Descubra exatamente o que você já domina e onde precisa reforçar seus estudos antes da prova. O Simulado ENEM 2026 traz 40 questões criteriosamente selecionadas no padrão oficial do Inep para as 5 áreas (Matemática, Humanas, Natureza, Linguagens e Redação), com caderno de questões diagramado, gabarito detalhado com resolução comentada e Folha de Respostas oficial com autodiagnóstico de pontos fracos. Treine o ritmo de prova e evolua com assertividade.',
    price: 9.99,
    originalPrice: 29.90,
    badge: 'TREINO REAL',
    categories: ['enem-2026', 'estudos'],
    image: '/assets/images/simulado-enem.png',
    format: 'PDF + Gabarito',
    pagesEstimated: 65,
    rating: 4.8,
    reviewsCount: 810,
    isFeatured: true,
    isBestSeller: true,
    kiwifyCheckoutUrl: 'https://pay.kiwify.com.br/ssL2FTp',
    subjects: [
      '40 Questões oficiais distribuídas nas 5 Áreas',
      'Matemática (Questões 01 a 08)',
      'Ciências Humanas (Questões 09 a 16)',
      'Ciências da Natureza (Questões 17 a 24)',
      'Linguagens e Códigos (Questões 25 a 32)',
      'Redação e Temas Críticos (Questões 33 a 40)',
      'Gabarito Oficial com Solução Comentada',
      'Folha de Respostas com Gestão de Tempo'
    ],
    whatYouGet: [
      'Caderno de Simulado Oficial diagramado no estilo ENEM em PDF',
      'Gabarito oficial comentado com explicação passo a passo de cada alternativa',
      'Folha de Respostas oficial para impressão e treino prático',
      'Tabela de diagnóstico de desempenho por matéria',
      'Acesso imediato no Pix ou cartão de crédito via Kiwify'
    ],
    targetAudience: [
      'Estudantes que buscam treinar controle de tempo e pressão de prova',
      'Candidatos que desejam diagnosticar lacunas de aprendizagem antes do exame'
    ]
  },
  {
    id: 'biblia-em-mapas-mentais',
    slug: 'biblia-em-mapas-mentais',
    title: 'BÍBLIA EM MAPAS MENTAIS',
    shortDescription: 'Estude o Antigo e Novo Testamento com mapas cronológicos, resumos de livros, genealogias e sínteses temáticas visuais.',
    fullDescription: 'Uma forma totalmente nova de compreender as Escrituras Sagradas. A Bíblia em Mapas Mentais sintetiza os 66 livros da Bíblia em esquemas visuais que destacam o contexto histórico de cada livro, tema central, personagens principais, mapas geográficos, genealogias e aplicações práticas. Ideal para líderes, professores da Escola Bíblica, jovens e estudantes.',
    price: 19.99,
    originalPrice: 59.90,
    badge: 'POPULAR',
    categories: ['biblicos', 'mapas-mentais'],
    image: '/assets/images/biblia_mentais.png',
    mapsCount: 65,
    format: 'PDF Digital',
    pagesEstimated: 120,
    rating: 4.9,
    reviewsCount: 940,
    isFeatured: true,
    isBestSeller: true,
    kiwifyCheckoutUrl: 'https://pay.kiwify.com.br/VG5saHT',
    subjects: [
      'Pentateuco e Origens Históricas',
      'Livros Históricos e Reis de Israel',
      'Poéticos e Sapienciais (Salmos e Provérbios)',
      'Profetas Maiores e Menores',
      'Os 4 Evangelhos e a Vida de Cristo',
      'Atos e Viagens Missionárias de Paulo',
      'Epístolas Paulinas e Gerais',
      'Apocalipse e Cronologia Escatológica'
    ],
    whatYouGet: [
      '65 Mapas Mentais completos em PDF de alta qualidade para impressão',
      'Linha do tempo bíblica ilustrada de Gênesis a Apocalipse',
      'Resumo visual de cada um dos 66 livros bíblicos',
      'Acesso vitalício e download imediato após a compra'
    ],
    targetAudience: [
      'Cristãos que desejam aprofundar seu conhecimento bíblico de forma organizada',
      'Professores de EBD, pregadores e líderes de pequenos grupos'
    ]
  },
  {
    id: 'ingles-em-mapas-mentais',
    slug: 'ingles-em-mapas-mentais',
    title: 'INGLÊS EM MAPAS MENTAIS',
    shortDescription: 'Aprenda e destrave seu inglês com mapas mentais de gramática, tempos verbais, phrasal verbs e vocabulário prático do dia a dia.',
    fullDescription: 'O método visual para finalmente dominar a gramática e destravar a conversação em inglês. Com esquemas mnemônicos, mapas de tempos verbais (Past, Present, Future, Perfect Tenses), conectivos, preposições (In, On, At) e os 100 Phrasal Verbs mais usados. Esqueça regras confusas e decorebas maçantes.',
    price: 27.90,
    originalPrice: 54.90,
    badge: 'EM BREVE',
    categories: ['ingles', 'mapas-mentais'],
    image: '/assets/images/product_ingles_mockup_1790962982763.jpg',
    mapsCount: 65,
    format: 'PDF Digital',
    pagesEstimated: 95,
    rating: 4.8,
    reviewsCount: 680,
    isFeatured: true,
    isBestSeller: false,
    isComingSoon: true,
    kiwifyCheckoutUrl: 'https://pay.kiwify.com.br/mappia-ingles-mapas',
    subjects: [
      'Todos os Tempos Verbais (Simple, Continuous, Perfect)',
      'Preposições de Lugar e Tempo (In, On, At sem erros)',
      'Top 100 Phrasal Verbs com Exemplos em Frases',
      'Guia Visual de Pronúncia e Falsos Cognatos',
      'Vocabulário para Viagens e Negócios'
    ],
    whatYouGet: [
      '65 mapas mentais organizados por níveis (Básico ao Avançado)',
      'Guia de consulta rápida em PDF A4 de alta definição',
      'Árvores conceituais de vocabulário temático'
    ],
    targetAudience: [
      'Quem está aprendendo inglês e se confunde com regras gramaticais',
      'Estudantes que buscam memorizar vocabulário de forma rápida e visual'
    ]
  },
  {
    id: 'estudos-concursos-mapas-mentais',
    slug: 'estudos-concursos-mapas-mentais',
    title: 'ESTUDOS & CONCURSOS EM MAPAS MENTAIS',
    shortDescription: 'Técnicas de estudo de alta performance, memorização acelerada, Direito Constitucional e Administrativo sintetizados.',
    fullDescription: 'Criado especialmente para quem estuda para concursos públicos, faculdade ou certificações e precisa reter grandes volumes de conteúdo em pouco tempo. Inclui resumos estruturados dos temas mais recorrentes de Direito Constitucional, Administrativo, Língua Portuguesa e o método mnemônico Mappia de revisão ativa.',
    price: 32.90,
    originalPrice: 65.00,
    badge: 'CONCURSOS',
    categories: ['estudos', 'mapas-mentais'],
    image: '/assets/images/product_estudos_mockup_1790962993357.jpg',
    mapsCount: 80,
    format: 'PDF Digital',
    pagesEstimated: 140,
    rating: 4.9,
    reviewsCount: 750,
    isFeatured: true,
    isBestSeller: false,
    kiwifyCheckoutUrl: 'https://pay.kiwify.com.br/mappia-concursos-mapas',
    subjects: [
      'Direito Constitucional: Direitos Fundamentais e Organização do Estado',
      'Direito Administrativo: Atos, Poderes e Licitações',
      'Português para Concursos: Crase, Pontuação e Sintaxe',
      'Metodologia de Revisão Espaçada e Ciclo de Estudos'
    ],
    whatYouGet: [
      '80 mapas mentais em PDF de alta qualidade vetorial',
      'Roteiro de revisão rápida para véspera de prova',
      'Material 100% atualizado para os editais vigentes'
    ],
    targetAudience: [
      'Concurseiros de carreiras administrativas, policiais e jurídicas',
      'Universitários e profissionais que buscam memorização acelerada'
    ]
  },
  {
    id: 'programacao-em-mapas-mentais',
    slug: 'programacao-em-mapas-mentais',
    title: 'PROGRAMAÇÃO EM MAPAS MENTAIS',
    shortDescription: 'Conceitos de programação, lógica, algoritmos, estruturas de dados, JavaScript e Python em esquemas visuais fáceis de entender.',
    fullDescription: 'Aprender a programar pode ser muito mais visual e intuitivo. Este guia reúne mapas mentais que explicam com clareza desde lógica de programação, variáveis, loops e condicionais, até estruturas de dados (pilhas, filas, árvores, grafos), orientação a objetos, arquitetura de software e as linguagens Python e JavaScript.',
    price: 34.90,
    originalPrice: 69.90,
    badge: 'EM BREVE',
    categories: ['programacao', 'mapas-mentais'],
    image: '/assets/images/product_dev_mockup_1790963003528.jpg',
    mapsCount: 70,
    format: 'PDF Digital',
    pagesEstimated: 110,
    rating: 4.9,
    reviewsCount: 520,
    isFeatured: true,
    isBestSeller: false,
    isComingSoon: true,
    kiwifyCheckoutUrl: 'https://pay.kiwify.com.br/mappia-programacao-mapas',
    subjects: [
      'Lógica de Programação e Fluxogramas Visuais',
      'Estruturas de Dados e Algoritmos Essenciais',
      'Programação Orientada a Objetos (POO) Descomplicada',
      'Cheat-Sheets Visuais de Python e JavaScript',
      'Git, GitHub e Fluxo de Trabalho de Desenvolvimento'
    ],
    whatYouGet: [
      '70 mapas mentais de ciência da computação e desenvolvimento',
      'PDF em alta resolução para consultar no monitor enquanto programa',
      'Diagramas explicativos de sintaxe e resolução de bugs'
    ],
    targetAudience: [
      'Iniciantes e estudantes de tecnologia e desenvolvimento de software',
      'Programadores que buscam fixar conceitos fundamentais e arquitetura'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Ana Beatriz Souza',
    role: 'Aprovada em Medicina (UFRJ)',
    location: 'Rio de Janeiro, RJ',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    stars: 5,
    comment: 'O Combo ENEM com os 150 mapas e o simulado com 40 questões comentadas foram decisivos na minha aprovação. Eu revisava Biologia e História em minutos antes de dormir. O visual é impecável!',
    material: 'ENEM 2026: 150 Mapas Mentais + Simulado'
  },
  {
    id: 'test-2',
    name: 'Lucas Mendes',
    role: 'Nota 960 na Redação ENEM',
    location: 'Belo Horizonte, MG',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    stars: 5,
    comment: 'Material de altíssimo nível. A folha de respostas e o gabarito comentado do simulado me deram o ritmo exato que eu precisava. O melhor investimento para o ENEM.',
    material: 'ENEM 2026: 150 Mapas Mentais + Simulado'
  },
  {
    id: 'test-3',
    name: 'Mariana Carvalho',
    role: 'Estudante de Direito',
    location: 'Curitiba, PR',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    stars: 5,
    comment: 'Comprei o material de Bíblia e depois o de Estudos e Concursos. A clareza visual é impressionante! Você bate o olho e o cérebro memoriza na hora.',
    material: 'Bíblia em Mapas Mentais'
  },
  {
    id: 'test-4',
    name: 'Gabriel Ribeiro',
    role: 'Aprovado em Engenharia (USP)',
    location: 'São Paulo, SP',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    stars: 5,
    comment: 'O Simulado de 40 questões é muito fiel ao estilo do Inep. Diagnostiquei exatamente onde precisava reforçar em Física e Química.',
    material: 'Simulado ENEM 2026'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Como recebo meu material?',
    answer: 'Imediatamente após a aprovação do seu pagamento no Kiwify, você recebe um e-mail com o link direto e seguro para baixar seus arquivos em PDF. O acesso também fica liberado instantaneamente na tela de confirmação.'
  },
  {
    question: 'O pagamento pelo Kiwify é seguro?',
    answer: 'Sim, 100% seguro! A Kiwify é uma das maiores plataformas de produtos digitais do Brasil, com criptografia de ponta a ponta e liberação instantânea no Pix e Cartão de Crédito.'
  },
  {
    question: 'Posso imprimir os mapas mentais e o simulado?',
    answer: 'Sim! Todos os materiais da Mappia são diagramados no formato padrão A4 em altíssima resolução gráfica (300 DPI vetorial), ideais tanto para impressão em casa quanto para encadernação em gráfica rápida.'
  },
  {
    question: 'Em quanto tempo recebo o acesso?',
    answer: 'Para pagamentos via Pix ou Cartão de Crédito, a liberação pela Kiwify é instantânea (em menos de 1 minuto). Para pagamentos via Boleto, a compensação ocorre em até 24 a 48 horas úteis.'
  },
  {
    question: 'Os mapas mentais do ENEM 2026 são atualizados?',
    answer: 'Sim, nossos materiais são constantemente revisados de acordo com os editais e matrizes de referência mais recentes do ENEM 2026. Você recebe as atualizações sem qualquer custo adicional.'
  },
  {
    question: 'Posso estudar pelo celular ou tablet?',
    answer: 'Com certeza! Os arquivos PDF são compatíveis com qualquer smartphone iOS e Android, tablets, iPads (GoodNotes, Notability) e computadores.'
  }
];
