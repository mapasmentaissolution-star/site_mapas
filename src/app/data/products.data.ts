import { Product, CategoryInfo, Testimonial, FaqItem } from '../models/product.model';

export const FREE_ENEM_PDF_URL = '/assets/mapa-enem-gratis.pdf';
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
    title: 'Concursos/Vestibulares',
    shortTitle: 'Concursos/Vestibulares',
    description: 'Mapas mentais para ETEC, escola, faculdade e concursos, com conteúdos organizados para facilitar a revisão.',
    icon: 'school',
    color: '#0D4F91',
    badgeText: 'ETEC disponível'
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
    description: 'Aprenda lógica de programação com 20 mapas mentais que organizam os fundamentos, os dados e operadores, as estruturas de decisão, a organização de código e a prática de resolução de problemas.',
    icon: 'terminal',
    color: '#0D4F91',
    badgeText: '20 mapas mentais disponíveis'
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
    kiwifyCheckoutUrl: FREE_ENEM_PDF_URL,
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
      'Download imediato e direto em PDF, sem custo'
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
    id: 'detran-sp-2026-simulado-completo',
    slug: 'detran-sp-2026-simulado-completo',
    title: 'DETRAN-SP 2026 — SIMULADO COMPLETO + GABARITO COMENTADO + GUIA BÔNUS',
    shortDescription: 'Simulado com 60 questões, gabarito comentado por matéria, proposta de redação e guia bônus de revisão expressa.',
    fullDescription: 'Prepare-se para o DETRAN-SP 2026 com um material completo de revisão: simulado com 60 questões, folha de respostas, gabarito comentado, proposta de redação com textos motivadores e critérios de avaliação, além de um guia bônus de revisão expressa com checklist final.',
    price: 19.99,
    badge: 'DETRAN-SP 2026',
    categories: ['estudos'],
    image: '/assets/images/detran.png',
    contentLabel: 'Simulado · 60 questões + bônus',
    format: 'PDF + Gabarito + Guia',
    rating: 0,
    reviewsCount: 0,
    subjects: [
      'Língua Portuguesa',
      'Matemática e Raciocínio Lógico',
      'Noções de Informática',
      'Direito Constitucional',
      'Direito Administrativo',
      'Legislação de Trânsito',
      'Redação',
      'Revisão expressa e checklist final'
    ],
    whatYouGet: [
      'Caderno de simulado completo com 60 questões e modelo de folha de respostas',
      'Gabarito comentado de Português, Matemática e Raciocínio Lógico, Informática, Direito Constitucional, Direito Administrativo e Legislação de Trânsito',
      'Proposta de redação com textos motivadores, orientações e espaço para rascunho',
      'Guia bônus de revisão expressa com checklist final'
    ],
    targetAudience: [
      'Candidatos que estão se preparando para o DETRAN-SP 2026',
      'Estudantes que querem praticar questões e revisar os principais conteúdos antes da prova'
    ],
    isFeatured: true,
    isBestSeller: false,
    kiwifyCheckoutUrl: 'https://pay.kiwify.com.br/Ce0ayHQ'
  },
  {
    id: 'detran-2026-50-mapas-mentais-3-simulados-cnh',
    slug: 'detran-2026-50-mapas-mentais-3-simulados-cnh',
    title: 'DETRAN 2026 — 50 MAPAS MENTAIS + 3 SIMULADOS DA CNH',
    shortDescription: '50 mapas mentais para estudar, compreender e revisar os principais conteúdos de trânsito, com três simulados da CNH.',
    fullDescription: 'Prepare-se para a prova teórica do DETRAN 2026 com 50 mapas mentais organizados em seis unidades: fundamentos e legislação; sinalização viária; circulação e conduta; infrações e responsabilidades; direção defensiva, emergências e veículo; e revisão com simulados. Inclui três simulados da CNH para praticar os conteúdos e revisar antes da prova.',
    price: 19.99,
    badge: '50 MAPAS + 3 SIMULADOS',
    categories: ['estudos', 'mapas-mentais'],
    image: '/assets/images/detranmotorista-mapas.png',
    contentLabel: 'DETRAN 2026 · 50 mapas mentais + 3 simulados da CNH',
    mapsCount: 50,
    format: 'PDF + 3 Simulados',
    rating: 0,
    reviewsCount: 0,
    whatYouGet: [
      '50 mapas mentais sobre os principais conteúdos da prova teórica de trânsito',
      'Três simulados da CNH para praticar e revisar',
      'Conteúdo organizado em seis unidades temáticas, da legislação à revisão final'
    ],
    subjects: [
      'Fundamentos e legislação: fundamentos do trânsito e cidadania; Sistema Nacional de Trânsito — órgãos e competências; CTB — conceitos, definições e vias terrestres; categorias de habilitação e requisitos; documentos do condutor e do veículo',
      'Sinalização viária: fundamentos e classificação; placas de regulamentação, advertência e indicação e serviços auxiliares; marcas viárias, linhas e símbolos no pavimento; semáforos e sinalização luminosa; gestos de agentes e sinais do condutor; sinalização temporária e obras na via',
      'Circulação e conduta: normas gerais de circulação e conduta; preferência, cruzamentos e rotatórias; ultrapassagem e mudança de faixa; velocidade, distância de segurança e frenagem; parada, estacionamento e imobilização; circulação de pedestres, ciclistas e motociclistas; transporte de passageiros, crianças e uso do cinto; circulação em rodovias, túneis e condições especiais',
      'Infrações e responsabilidades: classificação e exemplos de infrações de trânsito; penalidades, pontuação e medidas administrativas; álcool, substâncias psicoativas e direção; habilitação, suspensão e cassação; crimes de trânsito — noções fundamentais; responsabilidade do condutor e consequências das infrações; fiscalização, abordagem e condutas legais',
      'Direção defensiva, emergências e veículo: princípios fundamentais de direção defensiva; percepção de riscos e prevenção de acidentes; chuva, neblina, noite e outras condições adversas; comportamento seguro e fatores de risco; primeiros socorros — segurança e avaliação inicial; acidentes de trânsito — sinalização e acionamento de socorro; condutas proibidas ou perigosas em emergências; meio ambiente, poluição e sustentabilidade; mecânica básica — motor, painel e funcionamento; pneus, freios, suspensão e direção; iluminação, equipamentos e itens de segurança; manutenção preventiva e cuidados com o veículo; segurança veicular e inspeção antes de viajar',
      'Revisão e simulados: revisão integrada de legislação, sinalização, direção defensiva, primeiros socorros, meio ambiente e mecânica; questões de revisão sobre legislação e circulação; questões de revisão sobre sinalização e direção defensiva; revisão final de erros frequentes e pegadinhas; simulado final e revisão estratégica'
    ],
    targetAudience: [
      'Pessoas que estão se preparando para a prova teórica do DETRAN e da CNH',
      'Estudantes que desejam revisar legislação, sinalização, circulação e direção defensiva com mapas mentais e simulados'
    ],
    isFeatured: true,
    isBestSeller: false,
    kiwifyCheckoutUrl: 'https://pay.kiwify.com.br/G4CFJz3'
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
    id: 'enciclopedia-biblica',
    slug: 'enciclopedia-biblica',
    title: 'ENCICLOPÉDIA BÍBLICA',
    shortDescription: 'Uma jornada visual por 184 mapas mentais sobre a Bíblia, seus livros, personagens, lugares, acontecimentos e grandes temas.',
    fullDescription: 'Explore as Escrituras de forma visual e organizada com uma enciclopédia bíblica composta por 184 mapas mentais. O conteúdo percorre a estrutura da Bíblia, o Antigo e o Novo Testamento, seus livros e personagens, lugares e geografia bíblica, a vida e o ministério de Jesus e grandes temas como criação, aliança, fé, graça, salvação, Igreja e vida eterna.',
    price: 34.99,
    badge: 'ENCICLOPÉDIA',
    categories: ['biblicos', 'mapas-mentais'],
    image: '/assets/images/enciclopedia-mapas.png',
    format: 'PDF Digital',
    rating: 0,
    reviewsCount: 0,
    mapsCount: 184,
    subjects: [
      'A Bíblia: organização, divisões, autores, épocas, contextos, alianças e linha do tempo',
      'Antigo Testamento: Pentateuco, livros históricos, poéticos, sapienciais e profetas',
      'Novo Testamento: Evangelhos, Atos dos Apóstolos, cartas de Paulo, cartas gerais e Apocalipse',
      'Personagens do Antigo Testamento: de Adão e Eva a Sansão, Davi, Salomão e Daniel',
      'Personagens do Novo Testamento: Maria, João Batista, apóstolos, discípulos e líderes da Igreja primitiva',
      'Lugares e geografia bíblica: Jerusalém, Belém, Nazaré, Galileia, Egito, Babilônia, Éfeso, Corinto e Roma',
      'Vida e ministério de Jesus: nascimento, batismo, parábolas, milagres, ensinamentos, morte e ressurreição',
      'Grandes temas bíblicos: criação, pecado, aliança, lei, fé, graça, salvação, amor, perdão e oração',
      'Temas do Novo Testamento: adoração, Reino de Deus, Igreja, discipulado, Espírito Santo e dons espirituais',
      'Esperança cristã: evangelismo, segunda vinda de Cristo, ressurreição e vida eterna'
    ],
    whatYouGet: [
      '184 mapas mentais em PDF, organizados em oito partes temáticas',
      'Panorama visual dos livros, personagens, lugares, acontecimentos e temas centrais da Bíblia',
      'Material de consulta e revisão para acompanhar estudos individuais ou em grupo'
    ],
    targetAudience: [
      'Pessoas que desejam estudar e consultar a Bíblia de forma visual e organizada',
      'Professores, líderes, estudantes e grupos de estudo bíblico'
    ],
    isFeatured: true,
    isBestSeller: false,
    kiwifyCheckoutUrl: 'https://pay.kiwify.com.br/56GNF6M'
  },
  {
    id: 'desvendando-misterios-biblia-criacao-mundo',
    slug: 'desvendando-misterios-biblia-criacao-mundo',
    title: 'DESVENDANDO OS MISTÉRIOS DA BÍBLIA — A CRIAÇÃO DO MUNDO',
    shortDescription: '19 mapas mentais e estudos bíblicos sobre a criação do mundo, com aprofundamento teológico, revisão e aplicação.',
    fullDescription: 'Aprofunde seu estudo de Gênesis 1–2 com um guia visual sobre a criação do mundo. São 19 mapas mentais organizados em três partes: estudos bíblicos sobre a criação e seus principais temas; comentários e aprofundamento teológico, incluindo palavras-chave do hebraico bíblico, referências cruzadas e interpretações; e revisão, perguntas para reflexão e aplicações espirituais para a vida cristã.',
    price: 9.99,
    badge: '19 MAPAS MENTAIS',
    categories: ['biblicos', 'mapas-mentais'],
    image: '/assets/images/criacao-mapas.png',
    contentLabel: 'Desvendando os Mistérios da Bíblia · A Criação do Mundo',
    mapsCount: 19,
    format: 'PDF Digital',
    rating: 0,
    reviewsCount: 0,
    whatYouGet: [
      '19 mapas mentais e estudos bíblicos sobre a criação do mundo',
      'Comentários, referências cruzadas e aprofundamento teológico de Gênesis 1:1–5',
      'Perguntas para reflexão, revisão bíblica e aplicações espirituais'
    ],
    subjects: [
      'Mapas mentais e estudos bíblicos: a criação do mundo; no princípio, Deus — Gênesis 1:1–5; os primeiros três dias da criação; a vida enche a criação — dias 4, 5 e 6; o sétimo dia e o descanso de Deus; a criação do ser humano; o significado de ser criado à imagem de Deus; o Jardim do Éden; interpretações cristãs dos dias da criação; criação e ciência; propósito da criação; a criação de Gênesis ao Apocalipse',
      'Comentários e aprofundamento teológico: comentário bíblico de Gênesis 1:1–5; palavras-chave do hebraico bíblico; referências cruzadas e conexões bíblicas; principais interpretações teológicas',
      'Revisão e aplicação: revisão bíblica sobre a criação do mundo; perguntas para reflexão e estudo; aplicações espirituais para a vida cristã'
    ],
    targetAudience: [
      'Pessoas que desejam estudar a narrativa bíblica da criação em Gênesis',
      'Cristãos, estudantes e grupos de estudo bíblico que buscam aprofundamento visual e organizado'
    ],
    isFeatured: true,
    isBestSeller: false,
    kiwifyCheckoutUrl: 'https://pay.kiwify.com.br/KCRQfHY'
  },
  {
    id: 'ingles-em-mapas-mentais',
    slug: 'ingles-em-mapas-mentais',
    title: 'INGLÊS DO ZERO EM MAPAS MENTAIS — VOLUME 1 + BÔNUS | MAPPIA ESTUDOS',
    shortDescription: 'Volume iniciante com mapas mentais de vocabulário, gramática essencial e situações práticas do dia a dia, além de bônus de revisão.',
    fullDescription: 'Comece a aprender inglês do zero com um percurso visual e organizado. O Volume 1 apresenta o alfabeto e a pronúncia, números, cores, dias, meses e datas; pronomes pessoais e verbo to be; artigos, substantivos e adjetivos; apresentações, família, ocupações, rotina e horas; lugares, objetos, transportes e preposições. Para praticar, inclui frases úteis, perguntas e respostas, expressões, mini diálogos e revisão geral. O material também traz bônus com lista de verbos mais usados, vocabulário ilustrado, dicas de pronúncia e orientação para continuar os estudos.',
    price: 19.99,
    badge: 'VOLUME 1 + BÔNUS',
    categories: ['ingles', 'mapas-mentais'],
    image: '/assets/images/ingles-mapa.png',
    contentLabel: 'Inglês do zero · Volume 1 + bônus',
    format: 'PDF Digital',
    rating: 0,
    reviewsCount: 0,
    isFeatured: true,
    isBestSeller: false,
    kiwifyCheckoutUrl: 'https://pay.kiwify.com.br/uCZ3v3I',
    subjects: [
      'Introdução ao inglês: por que aprender, alfabeto, pronúncia, números, cores, dias, meses e datas',
      'Pronomes pessoais e verbo to be: formas afirmativa, negativa, interrogativa e contrações',
      'Artigos a, an e the; substantivos singulares, plurais, contáveis e incontáveis; adjetivos e possessivos',
      'Apresentações e rotina: falar sobre si, família, ocupações, profissões e horas',
      'Lugares e objetos: em casa, na escola e no trabalho, na cidade, transportes e preposições de lugar',
      'Frases práticas e revisão: expressões do dia a dia, perguntas e respostas, mini diálogos e revisão geral do Volume 1',
      'Bônus: lista de verbos mais usados, vocabulário essencial ilustrado, dicas de pronúncia e como continuar os estudos'
    ],
    whatYouGet: [
      'Inglês do Zero em Mapas Mentais — Volume 1',
      'Materiais bônus incluídos',
      'Arquivo digital em PDF'
    ],
    targetAudience: [
      'Pessoas que desejam começar a aprender inglês do zero',
      'Estudantes que preferem aprender com materiais visuais'
    ]
  },
  {
    id: 'gramatica-inglesa-mapas-mentais-volume-2',
    slug: 'gramatica-inglesa-mapas-mentais-volume-2',
    title: 'GRAMÁTICA INGLESA EM MAPAS MENTAIS — VOLUME 2 + BÔNUS',
    shortDescription: '30 mapas mentais para compreender, revisar e dominar a gramática inglesa, do básico ao intermediário, com cinco materiais bônus.',
    fullDescription: 'Estude gramática inglesa do básico ao intermediário com 30 mapas mentais organizados em seis unidades: estrutura das frases; tempos verbais essenciais; auxiliares e verbos modais; substantivos, determinantes e quantidade; construções e comparações; e estruturas intermediárias. O material inclui cinco bônus com exercícios e gabarito, tabela de tempos verbais e verbos irregulares essenciais, guia rápido de formação de frases, erros comuns de brasileiros em inglês e revisão final com plano de estudos.',
    price: 19.99,
    badge: '30 MAPAS + 5 BÔNUS',
    categories: ['ingles', 'mapas-mentais'],
    image: '/assets/images/gramatica-mapas.png',
    contentLabel: 'Gramática Inglesa · Volume 2 · 30 mapas mentais + bônus',
    mapsCount: 30,
    format: 'PDF Digital + 5 Bônus',
    rating: 0,
    reviewsCount: 0,
    whatYouGet: [
      '30 mapas mentais de gramática inglesa, do básico ao intermediário',
      'Cinco materiais bônus para exercícios, consulta e revisão',
      'Plano de estudos com revisão final'
    ],
    subjects: [
      'Estrutura das frases: estrutura básica da frase em inglês; sujeito, verbo e complemento; frases afirmativas, negativas e interrogativas; ordem das palavras; pronomes sujeito e objeto',
      'Tempos verbais essenciais: Simple Present; Present Continuous; Simple Past; futuro com WILL e GOING TO; Present Perfect',
      'Auxiliares e verbos modais: DO e DOES; DID; CAN e COULD; MUST, HAVE TO e SHOULD; verbos regulares e irregulares',
      'Substantivos, determinantes e quantidade: countable e uncountable nouns; A, AN e THE; SOME, ANY, MUCH e MANY; possessive pronouns e possessive adjectives; demonstratives — THIS, THAT, THESE e THOSE',
      'Construções e comparações: adjectives e adverbs; comparative e superlative; prepositions of time — IN, ON e AT; prepositions of place and movement; conjunctions — AND, BUT, BECAUSE, SO e OR',
      'Estruturas intermediárias: WH-questions com WHAT, WHERE, WHEN, WHO, WHY e HOW; imperatives; first conditional; passive voice; revisão geral da gramática inglesa',
      'Bônus: exercícios de gramática com gabarito; tabela de tempos verbais e verbos irregulares essenciais; guia rápido de formação de frases; erros comuns de brasileiros em inglês; revisão final e plano de estudos'
    ],
    targetAudience: [
      'Estudantes de inglês que desejam avançar do nível básico ao intermediário',
      'Pessoas que querem revisar gramática inglesa com mapas mentais e exercícios'
    ],
    isFeatured: true,
    isBestSeller: false,
    kiwifyCheckoutUrl: 'https://pay.kiwify.com.br/Qfr39Gq'
  },
  {
    id: 'etec-mapas-mentais',
    slug: 'etec-mapas-mentais',
    title: 'MAPAS MENTAIS PARA ETEC',
    shortDescription: 'Mapas mentais para revisar os conteúdos e se preparar para o Vestibulinho ETEC.',
    fullDescription: 'Prepare-se para o Vestibulinho ETEC com mapas mentais que organizam os conteúdos de estudo em esquemas visuais para facilitar a revisão e a memorização.',
    price: 19.99,
    badge: 'ETEC',
    categories: ['estudos', 'mapas-mentais'],
    image: '/assets/images/etec-mapas.png',
    format: 'PDF Digital',
    rating: 0,
    reviewsCount: 0,
    whatYouGet: [
      'Mapas mentais digitais para apoiar a preparação para o Vestibulinho ETEC',
      'Conteúdo visual para revisar e memorizar os estudos'
    ],
    targetAudience: [
      'Estudantes que estão se preparando para o Vestibulinho ETEC'
    ],
    isFeatured: true,
    isBestSeller: false,
    kiwifyCheckoutUrl: 'https://pay.kiwify.com.br/2XXUr8M'
  },
  {
    id: 'simulador-etec-2027',
    slug: 'simulador-etec-2027',
    title: 'SIMULADOR ETEC 2027',
    shortDescription: 'Pratique e revise os conteúdos para o Vestibulinho ETEC 2027 com um simulador de prova.',
    fullDescription: 'Prepare-se para o Vestibulinho ETEC 2027 com o Simulador ETEC, um material digital para praticar seus estudos e revisar antes da prova.',
    price: 9.99,
    badge: 'ETEC 2027',
    categories: ['estudos'],
    image: '/assets/images/simulado-etec.png',
    contentLabel: 'Simulador de prova ETEC 2027',
    format: 'PDF Digital',
    rating: 0,
    reviewsCount: 0,
    whatYouGet: [
      'Material digital para praticar para o Vestibulinho ETEC 2027'
    ],
    targetAudience: [
      'Estudantes que estão se preparando para o Vestibulinho ETEC 2027'
    ],
    isFeatured: true,
    isBestSeller: false,
    kiwifyCheckoutUrl: 'https://pay.kiwify.com.br/v2Fji79'
  },
  {
    id: 'cgu-2026-auditoria',
    slug: 'cgu-2026-auditoria',
    title: 'CGU 2026 — AUDITORIA',
    shortDescription: 'Mapas mentais de Auditoria Governamental, Finanças Públicas, Orçamento e Contabilidade Pública para o concurso CGU 2026.',
    fullDescription: 'Prepare-se para o concurso da Controladoria-Geral da União (CGU) 2026 na área de Auditoria com mapas mentais de conhecimentos específicos. O conteúdo está organizado em dois grandes eixos: Auditoria Governamental — avaliação, consultoria, apuração, planejamento, riscos, testes, amostragem, evidências, supervisão, fraude, auditoria de dados, relatórios e qualidade — e Finanças Públicas, Orçamento e Contabilidade Pública — economia e funções do Estado, tributação, resultados fiscais, PPA, LDO, LOA, execução orçamentária, receitas, despesas, Conta Única do Tesouro, transparência, demonstrações contábeis, custos, MCASP e governança.',
    price: 19.99,
    badge: 'CGU 2026',
    categories: ['estudos'],
    image: '/assets/images/cgu-auditoria.png',
    contentLabel: 'Preparatório CGU 2026 · Auditoria',
    format: 'PDF Digital',
    rating: 0,
    reviewsCount: 0,
    whatYouGet: [
      'Mapas mentais organizados em dois eixos: Auditoria Governamental e Finanças Públicas, Orçamento e Contabilidade Pública',
      'Índice com 31 tópicos de conhecimentos específicos para orientar a revisão'
    ],
    subjects: [
      'Auditoria Governamental: avaliação, consultoria e apuração',
      'Planejamento técnico do trabalho',
      'Risco de auditoria, objetivos, escopo e critérios',
      'Matriz de planejamento e programa de trabalho',
      'Testes de auditoria e procedimentos',
      'Amostragem estatística e por julgamento',
      'Achados de auditoria: critério, condição, causa e efeito',
      'Evidências, documentação e papéis de trabalho',
      'Supervisão, revisão e contratação técnica',
      'Indícios de fraude e aprofundamento das análises',
      'Auditoria de dados e inteligência artificial',
      'Relatórios, recomendações e monitoramento',
      'Qualidade, benefícios e melhoria contínua',
      'Economia do setor público e funções do Estado',
      'Tributação e financiamento das políticas públicas',
      'Resultado primário, resultado nominal e déficit público',
      'Sustentabilidade fiscal',
      'Plano Plurianual (PPA)',
      'Lei de Diretrizes Orçamentárias (LDO)',
      'Lei Orçamentária Anual (LOA)',
      'Classificações e alterações orçamentárias',
      'Execução orçamentária e financeira',
      'Receita pública: etapas e classificações',
      'Despesa pública: empenho, liquidação e pagamento',
      'Restos a pagar e Conta Única do Tesouro',
      'Transparência e informações fiscais',
      'Demonstrações contábeis do setor público',
      'Contabilidade de custos no setor público',
      'MCASP, 11ª edição, e normas de contabilidade pública',
      'Provisões, contingências e empresas estatais',
      'Governança e demonstrações financeiras das empresas estatais'
    ],
    targetAudience: [
      'Candidatos ao concurso da CGU 2026 na área de Auditoria'
    ],
    isFeatured: true,
    isBestSeller: false,
    kiwifyCheckoutUrl: 'https://pay.kiwify.com.br/sX6Dcdt'
  },
  {
    id: 'portugues-para-concursos-40-mapas-mentais',
    slug: 'portugues-para-concursos-40-mapas-mentais',
    title: 'PORTUGUÊS PARA CONCURSOS — 40 MAPAS MENTAIS',
    shortDescription: '40 mapas mentais de interpretação de textos, gramática, sintaxe, concordância, pontuação e revisão para concursos.',
    fullDescription: 'Estude Português para concursos com 40 mapas mentais organizados para facilitar a compreensão, a revisão e a memorização. O conteúdo abrange interpretação de textos; gramática e classes de palavras; sintaxe e concordância; pontuação e estrutura textual; além de semântica, conectivos, pegadinhas de concursos e revisão geral.',
    price: 19.99,
    badge: '40 MAPAS MENTAIS',
    categories: ['estudos', 'mapas-mentais'],
    image: '/assets/images/portugues-concursos.png',
    contentLabel: 'Português para Concursos · 40 mapas mentais',
    mapsCount: 40,
    format: 'PDF Digital',
    rating: 0,
    reviewsCount: 0,
    whatYouGet: [
      '40 mapas mentais de Português organizados em cinco áreas de estudo',
      'Conteúdo visual para estudar, revisar e memorizar os principais tópicos de Português para concursos'
    ],
    subjects: [
      'Interpretação de textos: compreensão, tema, tese, ideia central, informações explícitas e implícitas, inferência, pressupostos, tipologia, gêneros textuais, coesão, coerência, sentido das palavras no contexto e figuras de linguagem',
      'Gramática e classes de palavras: fonética, fonologia, encontros vocálicos, ortografia oficial, acentuação gráfica, formação e estrutura das palavras, substantivos, adjetivos, artigos, numerais, interjeições, pronomes, verbos, advérbios, preposições e conjunções',
      'Sintaxe e concordância: termos essenciais, integrantes e acessórios da oração, período simples e composto, orações coordenadas e subordinadas, concordância nominal e verbal, regência nominal e verbal',
      'Pontuação e estrutura textual: crase, vírgula, dois-pontos, ponto e vírgula, outros sinais, colocação pronominal, discurso direto, indireto e indireto livre, paralelismo e estrutura das frases',
      'Revisão e questões de concursos: semântica, sinonímia, antonímia, polissemia, ambiguidade, vícios de linguagem, reescrita, equivalência de sentido, conectivos, relações lógico-semânticas, pegadinhas de Português em concursos e revisão geral'
    ],
    targetAudience: [
      'Candidatos que estudam Português para concursos públicos',
      'Estudantes que querem revisar gramática e interpretação de textos com mapas mentais'
    ],
    isFeatured: true,
    isBestSeller: false,
    kiwifyCheckoutUrl: 'https://pay.kiwify.com.br/7vu4sBc'
  },
  {
    id: 'matematica-para-concursos-40-mapas-mentais',
    slug: 'matematica-para-concursos-40-mapas-mentais',
    title: 'MATEMÁTICA PARA CONCURSOS EM MAPAS MENTAIS + SIMULADO E BÔNUS',
    shortDescription: '40 mapas mentais de Matemática para concursos, com simulado e bônus: da matemática básica à geometria, estatística e probabilidade.',
    fullDescription: 'Prepare-se para concursos com 40 mapas mentais de Matemática organizados para facilitar a compreensão, a revisão e a memorização. O conteúdo percorre matemática básica; razão, proporção e porcentagem; álgebra, equações e funções; matemática financeira e estatística; geometria, contagem e probabilidade. O material inclui também simulado e bônus para complementar seus estudos.',
    price: 19.99,
    badge: '40 MAPAS + SIMULADO + BÔNUS',
    categories: ['estudos', 'mapas-mentais'],
    image: '/assets/images/matematica-concursos.png',
    contentLabel: 'Matemática para Concursos · 40 mapas mentais',
    mapsCount: 40,
    format: 'PDF + Simulado + Bônus',
    rating: 0,
    reviewsCount: 0,
    whatYouGet: [
      '40 mapas mentais de Matemática organizados em cinco áreas de estudo',
      'Simulado para praticar os conteúdos estudados',
      'Bônus para complementar a preparação para concursos'
    ],
    subjects: [
      'Matemática básica: conjuntos numéricos; operações com frações e números decimais; múltiplos e divisores; MMC e MDC; potenciação e radiciação; expressões numéricas; critérios de divisibilidade; razão, proporção e regra de três simples',
      'Razão, proporção e porcentagem: regra de três composta; grandezas diretamente e inversamente proporcionais; conceitos e cálculos de porcentagem; aumentos e descontos percentuais; variação percentual; divisão proporcional; escalas e conversão de unidades; problemas de proporcionalidade',
      'Álgebra, equações e funções: expressões algébricas e produtos notáveis; fatoração algébrica; equações do primeiro grau; sistemas de equações do primeiro grau; equações do segundo grau; inequações; conceitos e gráficos de funções; sequências e progressões aritméticas e geométricas',
      'Matemática financeira e estatística: razões, taxas e índices; juros simples e compostos; descontos e acréscimos financeiros; médias aritmética, ponderada, mediana e moda; leitura e interpretação de gráficos e tabelas; medidas de dispersão; análise de dados e estatística básica',
      'Geometria, contagem, probabilidade e revisão: ângulos e polígonos; perímetro e área de figuras planas; sólidos e volumes; Teorema de Pitágoras e semelhança de triângulos; unidades de medida e conversões; princípios de contagem e análise combinatória; probabilidade; revisão geral de fórmulas essenciais de Matemática'
    ],
    targetAudience: [
      'Candidatos que estudam Matemática para concursos públicos',
      'Estudantes que querem revisar fórmulas e conceitos com mapas mentais'
    ],
    isFeatured: true,
    isBestSeller: false,
    kiwifyCheckoutUrl: 'https://pay.kiwify.com.br/HJ1kUsQ'
  },
  {
    id: 'direito-administrativo-40-mapas-mentais',
    slug: 'direito-administrativo-40-mapas-mentais',
    title: 'DIREITO ADMINISTRATIVO EM MAPAS MENTAIS — 40 MAPAS + BÔNUS DE 5 SIMULADOS',
    shortDescription: '40 mapas mentais de Direito Administrativo para concursos, com conteúdos organizados em cinco seções e bônus de cinco simulados.',
    fullDescription: 'Estude Direito Administrativo para concursos com 40 mapas mentais organizados em cinco seções: fundamentos e princípios; atos, poderes e agentes públicos; serviços, controle e responsabilidade; licitações e contratos administrativos; e revisão e preparação para provas. O material inclui ainda cinco simulados bônus para praticar e revisar os conteúdos.',
    price: 19.99,
    badge: '40 MAPAS + 5 SIMULADOS',
    categories: ['estudos', 'mapas-mentais'],
    image: '/assets/images/direito-mapas.png',
    contentLabel: 'Direito Administrativo · 40 mapas mentais + 5 simulados',
    mapsCount: 40,
    format: 'PDF + 5 Simulados',
    rating: 0,
    reviewsCount: 0,
    whatYouGet: [
      '40 mapas mentais de Direito Administrativo organizados em cinco seções',
      'Bônus de cinco simulados para praticar os conteúdos estudados',
      'Quadro comparativo, revisão de pegadinhas e resumo geral para provas'
    ],
    subjects: [
      'Fundamentos e princípios: conceito, objeto e fontes do Direito Administrativo; Estado, Governo e Administração Pública; regime jurídico-administrativo; princípios expressos da Administração Pública — LIMPE; princípios implícitos e reconhecidos; poderes e deveres da Administração Pública; organização administrativa — Administração Direta e Indireta; descentralização, desconcentração e órgãos públicos',
      'Atos, poderes e agentes públicos: atos administrativos — conceito e elementos; atributos dos atos administrativos; classificação e espécies de atos administrativos; anulação, revogação e convalidação; poderes administrativos — hierárquico e disciplinar; poderes regulamentar e de polícia; abuso de poder — excesso e desvio de finalidade; agentes públicos — conceitos e classificações; cargos, empregos e funções públicas; deveres, responsabilidades e sanções dos agentes públicos',
      'Serviços, controle e responsabilidade: serviços públicos — conceitos e princípios; delegação de serviços públicos — concessão e permissão; bens públicos — classificação e características; uso, alienação e proteção dos bens públicos; responsabilidade civil do Estado; controle administrativo e autotutela; controle legislativo e controle judicial; improbidade administrativa — noções essenciais; processo administrativo — princípios e etapas; processo administrativo federal — Lei nº 9.784/1999',
      'Licitações e contratos administrativos: licitações — conceitos, finalidades e princípios; modalidades de licitação na Lei nº 14.133/2021; fases da licitação e procedimentos; contratação direta — dispensa e inexigibilidade; critérios de julgamento e procedimentos auxiliares; contratos administrativos — características e cláusulas; execução, alteração e extinção dos contratos; sanções, fiscalização e gestão contratual',
      'Revisão e preparação para provas: quadro comparativo de serviços, poderes e atos; organização administrativa e agentes públicos — revisão; principais pegadinhas de Direito Administrativo em concursos; revisão geral — quadro-resumo de Direito Administrativo'
    ],
    targetAudience: [
      'Candidatos que estudam Direito Administrativo para concursos públicos',
      'Estudantes que querem revisar os principais tópicos da disciplina com mapas mentais e simulados'
    ],
    isFeatured: true,
    isBestSeller: false,
    kiwifyCheckoutUrl: 'https://pay.kiwify.com.br/PXV7tHr'
  },
  {
    id: 'logica-programacao-mapas-mentais-edicao-2026-2027',
    slug: 'logica-programacao-mapas-mentais-edicao-2026-2027',
    title: 'LÓGICA DE PROGRAMAÇÃO EM MAPAS MENTAIS EDIÇÃO 2026/2027',
    shortDescription: '20 mapas mentais para construir sua base em programação: fundamentos, dados e operadores, decisões, estruturas, organização e resolução de problemas.',
    fullDescription: 'Construa sua base em programação com 20 mapas mentais visuais, organizados para facilitar o aprendizado e a revisão. A edição 2026/2027 aborda os fundamentos da programação e da resolução de problemas; variáveis, constantes, tipos de dados e operadores; estruturas condicionais e de repetição; vetores, listas, matrizes e funções; e, por fim, erros, depuração, testes e raciocínio algorítmico aplicado a um projeto completo.',
    price: 14.99,
    badge: 'EDIÇÃO 2026/2027',
    categories: ['programacao', 'mapas-mentais'],
    image: '/assets/images/logica-programacao.png',
    contentLabel: 'Lógica de Programação · 20 mapas mentais',
    mapsCount: 20,
    format: 'PDF Digital',
    rating: 0,
    reviewsCount: 0,
    whatYouGet: [
      '20 mapas mentais para construir sua base em programação',
      'Conteúdo organizado em cinco áreas: fundamentos; dados e operadores; decisões e repetições; estruturas e organização; prática e resolução de problemas'
    ],
    subjects: [
      'Fundamentos: O que é programação?',
      'Fundamentos: Lógica de programação e resolução de problemas',
      'Fundamentos: Algoritmos, pseudocódigo e fluxogramas',
      'Fundamentos: Entrada, processamento e saída',
      'Dados e operadores: Variáveis e constantes',
      'Dados e operadores: Tipos de dados e conversões',
      'Dados e operadores: Operadores aritméticos e expressões',
      'Dados e operadores: Operadores relacionais e lógicos',
      'Decisões e repetições: Estruturas condicionais — SE, SENÃO',
      'Decisões e repetições: Condições compostas e aninhadas',
      'Decisões e repetições: Estruturas de repetição — PARA',
      'Decisões e repetições: Estruturas de repetição — ENQUANTO e REPITA',
      'Decisões e repetições: Contadores e acumuladores',
      'Estruturas e organização: Vetores e listas',
      'Estruturas e organização: Matrizes e dados bidimensionais',
      'Estruturas e organização: Funções, parâmetros e retorno',
      'Estruturas e organização: Modularização e reutilização',
      'Prática e resolução de problemas: Erros, depuração e testes',
      'Prática e resolução de problemas: Raciocínio algorítmico — do problema à solução',
      'Prática e resolução de problemas: Projeto prático — algoritmo completo'
    ],
    targetAudience: [
      'Iniciantes que querem aprender lógica de programação desde os fundamentos',
      'Estudantes que desejam revisar algoritmos e resolução de problemas de forma visual'
    ],
    isFeatured: true,
    isBestSeller: false,
    kiwifyCheckoutUrl: 'https://pay.kiwify.com.br/uammIt6'
  },
  {
    id: 'html-css-javascript-mapas-mentais-projeto-real',
    slug: 'html-css-javascript-mapas-mentais-projeto-real',
    title: 'HTML, CSS E JAVASCRIPT EM MAPAS MENTAIS — DO ZERO AO PROJETO REAL',
    shortDescription: '20 mapas mentais de HTML, CSS e JavaScript, com um projeto completo para construir um site moderno e responsivo.',
    fullDescription: 'Aprenda HTML, CSS e JavaScript do zero ao projeto real com 20 mapas mentais organizados em quatro seções: estrutura do site com HTML; design e responsividade com CSS; interatividade com JavaScript; e integração das tecnologias em um projeto completo de site profissional. O material acompanha os ajustes finais, testes e publicação do projeto.',
    price: 14.99,
    badge: '20 MAPAS + PROJETO COMPLETO',
    categories: ['programacao', 'mapas-mentais'],
    image: '/assets/images/html-mapas.png',
    contentLabel: 'HTML, CSS e JavaScript · 20 mapas mentais + projeto real',
    mapsCount: 20,
    format: 'PDF Digital + Projeto Completo',
    rating: 0,
    reviewsCount: 0,
    whatYouGet: [
      '20 mapas mentais de HTML, CSS e JavaScript',
      'Projeto completo para construir um site moderno e responsivo',
      'Conteúdo desde os fundamentos até os ajustes, testes e publicação'
    ],
    subjects: [
      'HTML — estrutura do site: o que é HTML e como funciona; estrutura básica do HTML; títulos, parágrafos e links; imagens, listas e tabelas; formulários e elementos semânticos',
      'CSS — design e responsividade: o que é CSS e como funciona; seletores e propriedades; cores, fontes e fundos; box model, margens e espaçamentos; Flexbox na prática; Grid e responsividade',
      'JavaScript — interatividade do site: o que é JavaScript e como funciona; variáveis, tipos de dados e operadores; condições e estrutura de repetição; funções, arrays e objetos; DOM e manipulação de elementos da página; eventos e validação de formulários',
      'Projeto real — site profissional: integração de HTML, CSS e JavaScript; estrutura e organização do projeto; ajustes finais, testes e publicação'
    ],
    targetAudience: [
      'Iniciantes que querem aprender HTML, CSS e JavaScript do zero',
      'Estudantes que desejam praticar os fundamentos construindo um site completo e responsivo'
    ],
    isFeatured: true,
    isBestSeller: false,
    kiwifyCheckoutUrl: 'https://pay.kiwify.com.br/yQxMlMH'
  },
  {
    id: 'sql-em-mapas-mentais-basico-consultas-avancadas',
    slug: 'sql-em-mapas-mentais-basico-consultas-avancadas',
    title: 'SQL EM MAPAS MENTAIS — Do Básico às Consultas Avançadas + 8 Bônus',
    shortDescription: 'Aprenda SQL de forma visual: fundamentos, consultas, filtros, agrupamentos, junções e recursos avançados, com 8 bônus complementares.',
    fullDescription: 'Aprenda e revise SQL com mapas mentais que organizam os conceitos desde os primeiros comandos até consultas avançadas. Estude a estrutura de bancos de dados relacionais, criação e manipulação de tabelas, consultas com SELECT, filtros e ordenação, funções de agregação, agrupamentos, junções entre tabelas e recursos avançados como subconsultas e expressões comuns de tabela (CTEs). O material acompanha 8 bônus para complementar seus estudos.',
    price: 19.99,
    badge: '8 BÔNUS',
    categories: ['programacao', 'mapas-mentais'],
    image: '/assets/images/sql-mapas.png',
    contentLabel: 'SQL em Mapas Mentais + 8 bônus',
    format: 'PDF Digital + 8 Bônus',
    rating: 0,
    reviewsCount: 0,
    whatYouGet: [
      'Mapas mentais de SQL, do básico às consultas avançadas',
      '8 bônus complementares para apoiar o aprendizado e a revisão'
    ],
    subjects: [
      'Fundamentos de bancos de dados relacionais e conceitos de SQL',
      'Criação e definição de estruturas: bancos, tabelas e tipos de dados',
      'Manipulação de dados: inserção, atualização e exclusão de registros',
      'Consultas com SELECT, aliases, DISTINCT e expressões',
      'Filtros com WHERE, operadores, padrões e tratamento de valores nulos',
      'Ordenação e limitação de resultados',
      'Funções de texto, números, datas e valores nulos',
      'Funções de agregação e agrupamentos com GROUP BY e HAVING',
      'Junções entre tabelas: INNER, LEFT, RIGHT e FULL JOIN',
      'Subconsultas e consultas aninhadas',
      'Expressões comuns de tabela (CTEs)',
      'Operações de conjunto e combinação de resultados',
      'Consultas avançadas e boas práticas de organização e leitura'
    ],
    targetAudience: [
      'Iniciantes que querem aprender SQL e consultar bancos de dados relacionais',
      'Estudantes e profissionais que desejam revisar consultas SQL, de fundamentos a recursos avançados'
    ],
    isFeatured: true,
    isBestSeller: false,
    kiwifyCheckoutUrl: 'https://pay.kiwify.com.br/4Do7kFQ'
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
    answer: 'Com certeza! Você pode ler os arquivos PDF no celular (iOS ou Android), tablet, iPad (GoodNotes, Notability) ou computador.'
  }
];
