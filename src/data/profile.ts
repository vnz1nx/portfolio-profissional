import projectUserSystem from "@/assets/RegistroDeUsuario.png";
import projectVans from "@/assets/vans-opt.jpg";
import projectBarberApp from "@/assets/barberapp.jpeg";

export interface PracticeTab {
  id: string;
  label: string;
  summary: string;
  routines: string[];
  stack: string[];
  artifactTitle: string;
  artifactLang: string;
  artifactBody: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  context: string;
  period: string;
  description: string;
  highlights: string[];
  stack: string[];
  image: string;
  imageAlt: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tags: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  status: string;
  focus: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
}

export const PROFILE = {
  fullName: "Marcos Vinicius Gonçalves Piedade",
  shortName: "Marcos Vinicius",
  role: "Desenvolvedor Júnior — DBA, Migração de Dados, SQL & Java",
  location: "Goiânia, GO",
  availability: "Remoto (Brasil) ou Presencial/Híbrido em Goiânia",
  email: "marcosvgp14@gmail.com",
  phone: "(62) 99341-6607",
  linkedin: "https://www.linkedin.com/in/marcos-vinicius-306151275",
  github: "https://github.com/vnz1nx",
  heroSummary:
    "Estudante de Engenharia de Software (UniGoiás) e Técnico em Informática para Internet (IF Goiano). Experiência prática em migração de dados, otimização de consultas SQL em PostgreSQL e MySQL, suporte consultivo a sistemas ERP, ambientes Linux e desenvolvimento em Java, Python e React.",
} as const;

export const PRACTICE_TABS: PracticeTab[] = [
  {
    id: "dados",
    label: "Migração & SQL",
    summary:
      "Atuação direta na integridade de bases de produção: migração entre sistemas de clientes, ajuste de consultas SQL lentas e sustentação em Linux (Ubuntu).",
    routines: [
      "Migração estruturada de registros com validação de chaves, integridade referencial e conferência pós-carga.",
      "Otimização e reescrita de consultas SQL em PostgreSQL e MySQL para rotinas de produção.",
      "Monitoramento contínuo de ambientes Linux (Ubuntu) e controle de scripts via Git.",
    ],
    stack: [
      "SQL",
      "PostgreSQL",
      "MySQL",
      "H2",
      "JDBC",
      "Migração de Dados",
      "Otimização de Consultas",
      "Modelagem e Validação",
      "Linux (Ubuntu)",
      "Git / GitHub",
    ],
    artifactTitle: "validacao_integridade.sql",
    artifactLang: "SQL · PostgreSQL / MySQL",
    artifactBody: `-- Conferência de integridade referencial pós-migração
SELECT u.id, u.email, COUNT(a.id) AS total_atividades
FROM usuarios u
LEFT JOIN historico_atividades a
  ON a.usuario_id = u.id
GROUP BY u.id, u.email
ORDER BY total_atividades DESC;

-- Relacionamento aplicado em projeto Java + SQL (H2)
FOREIGN KEY (usuario_id)
  REFERENCES usuarios(id)
  ON DELETE CASCADE;`,
  },
  {
    id: "erp",
    label: "Suporte ERP & QA",
    summary:
      "Ponte entre clientes e engenharia: investigação de erros em sistemas ERP, homologação de novas entregas e documentação que reduz retrabalho recorrente.",
    routines: [
      "Suporte técnico consultivo a sistemas ERP via acesso remoto, conduzindo diagnóstico e tickets complexos.",
      "Homologação, testes de novas funcionalidades e validação de rotinas em apoio à equipe de desenvolvimento.",
      "Produção de documentações técnicas, FAQs e guias de procedimentos para padronizar o atendimento.",
    ],
    stack: [
      "Sistemas ERP",
      "Gestão de Tickets",
      "Acesso Remoto",
      "Homologação e Testes",
      "Documentação Técnica (FAQs)",
      "Scrum",
      "Kanban",
      "UML",
      "Pacote Office",
    ],
    artifactTitle: "fluxo_homologacao_erp.txt",
    artifactLang: "Rotina Operacional · ERP",
    artifactBody: `1. Triagem      -> Reprodução do erro via acesso remoto e coleta de logs
2. Diagnóstico  -> Validação da regra de negócio e consulta direta no banco SQL
3. Homologação  -> Teste funcional da correção antes da liberação ao cliente
4. Registro     -> Atualização de FAQ e guia de procedimento para a equipe`,
  },
  {
    id: "dev",
    label: "Java & Web",
    summary:
      "Base sólida de programação orientada a objetos, desenvolvimento web em camadas (MVC) e interfaces responsivas com React e Next.js.",
    routines: [
      "Construção de aplicações web em Java (Servlets/JSP) integradas a banco relacional via JDBC.",
      "Desenvolvimento de interfaces componentizadas e responsivas com React.js, Next.js, JavaScript e CSS.",
      "Automação e lógica de programação em Python e C, além de apps mobile em React Native.",
    ],
    stack: [
      "Java (POO, MVC, Servlets/JSP)",
      "Python",
      "C",
      "React.js",
      "Next.js",
      "React Native",
      "JavaScript",
      "HTML5 / CSS",
      "APIs RESTful",
      "Windows & Linux",
    ],
    artifactTitle: "arquitetura_mvc_java.txt",
    artifactLang: "Java Web · Servlets + JDBC",
    artifactBody: `src/
 ├── model/       -> Entidades Usuário e Atividade (POO)
 ├── dao/         -> Persistência JDBC com PreparedStatement (SQL / H2)
 ├── controller/  -> Servlets de autenticação, busca e CRUD
 └── view/        -> Páginas JSP com histórico vinculado por FK`,
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "pagina-usuario-java-sql",
    title: "Sistema Web de Gestão de Usuários e Atividades",
    context: "Java Web & Banco Relacional",
    period: "2025",
    description:
      "Aplicação web completa construída em Java com Servlets/JSP, JDBC e banco H2. Implementa autenticação, operações CRUD, busca filtrada e histórico de atividades vinculado por chave estrangeira com exclusão em cascata.",
    highlights: [
      "Persistência direta via JDBC com integridade referencial (ON DELETE CASCADE).",
      "Separação de responsabilidades seguindo arquitetura MVC em Java.",
    ],
    stack: ["Java", "Servlets / JSP", "JDBC", "SQL (H2)", "MVC"],
    image: projectUserSystem,
    imageAlt: "Tela do Sistema Web de Gestão de Usuários e Atividades em Java e SQL",
    githubUrl: "https://github.com/vnz1nx/pagina-usuario-java-sql",
    featured: true,
  },
  {
    id: "ecommerce-vans-nextjs",
    title: "E-commerce Responsivo (Projeto em Grupo)",
    context: "Front-end Colaborativo · Web",
    period: "2025",
    description:
      "Loja virtual responsiva desenvolvida em equipe com foco em componentização, catálogo navegável e adaptação de layout entre desktop e mobile.",
    highlights: [
      "Interface componentizada em Next.js e React com ajustes finos de responsividade.",
      "Deploy público funcional acompanhado do código-fonte no GitHub.",
    ],
    stack: ["Next.js", "React", "JavaScript", "CSS"],
    image: projectVans,
    imageAlt: "Interface responsiva do e-commerce de tênis desenvolvido em Next.js e React",
    githubUrl: "https://github.com/vnz1nx/ecommerce-vans-nextjs",
    liveUrl: "https://vans-projeto2-ano.vercel.app/",
  },
  {
    id: "barber-shows-tcc",
    title: "Barber Show's — Aplicativo Mobile para Barbearias",
    context: "TCC · Técnico em Informática (IF Goiano)",
    period: "Out – Nov 2024",
    description:
      "Aplicativo mobile desenvolvido como Trabalho de Conclusão de Curso para organizar agendamentos, serviços e cadastro de clientes de barbearias.",
    highlights: [
      "Fluxo mobile de agendamento integrado a back-end em Java e persistência SQL.",
      "Projeto completo entregue na conclusão do curso Técnico no IF Goiano.",
    ],
    stack: ["React Native", "Java", "SQL"],
    image: projectBarberApp,
    imageAlt: "Telas do aplicativo mobile Barber Show's desenvolvido como TCC",
  },
  {
    id: "stuart-labirinto",
    title: "Stuart e o Castelo Perdido",
    context: "Projeto Web Interativo · Next.js",
    period: "2024",
    description:
      "Jogo de labirinto no navegador construído com Next.js, explorando lógica de movimentação em matriz, detecção de colisão e renderização fluida.",
    highlights: [
      "Controle de estado e lógica de navegação totalmente executados no browser.",
    ],
    stack: ["Next.js", "React", "JavaScript"],
    image: "",
    imageAlt: "Tela do jogo web Stuart e o Castelo Perdido feito em Next.js",
    liveUrl: "https://labirinto-rho.vercel.app/",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "metaprime-dba",
    role: "Desenvolvedor Júnior — DBA / Data Migration",
    company: "Metaprime Sistemas",
    location: "Goiânia, GO",
    period: "Ago 2025 — Fev 2026",
    bullets: [
      "Migração de dados e validação de integridade das informações em sistemas de clientes utilizando PostgreSQL e MySQL.",
      "Otimização e ajuste de consultas SQL para sustentar rotinas de produção com confiabilidade.",
      "Suporte a ambientes de produção em Linux (Ubuntu), monitoramento contínuo e versionamento com Git.",
    ],
    tags: ["PostgreSQL", "MySQL", "Migração de Dados", "SQL", "Linux (Ubuntu)", "Git"],
  },
  {
    id: "metaprime-suporte",
    role: "Analista de Suporte Técnico",
    company: "Metaprime Sistemas",
    location: "Goiânia, GO",
    period: "Fev 2025 — Ago 2025",
    bullets: [
      "Suporte técnico consultivo a sistemas ERP via acesso remoto, análise de erros e gestão de tickets complexos.",
      "Homologação, testes de novas funcionalidades e validação de rotinas em apoio direto à equipe de desenvolvimento.",
      "Elaboração de documentações técnicas, FAQs e guias de procedimentos para padronizar o atendimento.",
    ],
    tags: ["Sistemas ERP", "Gestão de Tickets", "Acesso Remoto", "Homologação", "Documentação"],
  },
  {
    id: "malhas-brasil",
    role: "Repositor — Jovem Aprendiz",
    company: "Malhas Brasil Ltda.",
    location: "Goiânia, GO",
    period: "Mar 2021 — Fev 2022",
    bullets: [
      "Atendimento direto ao cliente, organização de ambiente e suporte contínuo à rotina operacional.",
    ],
    tags: ["Atendimento ao Cliente", "Organização Operacional"],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: "unigoias",
    degree: "Bacharelado em Engenharia de Software",
    institution: "UniGoiás",
    location: "Goiânia, GO",
    status: "Em andamento · Previsão Nov 2029",
    focus: "Engenharia de requisitos, modelagem UML, metodologias ágeis (Scrum, Kanban) e arquitetura de software.",
  },
  {
    id: "if-goiano",
    degree: "Técnico em Informática para Internet",
    institution: "IF Goiano — Campus Trindade",
    location: "Trindade, GO",
    status: "Concluído · Dez 2024",
    focus: "Desenvolvimento web e mobile com Java, JavaScript, SQL, React, Next.js e React Native.",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  { title: "Introdução a Python (20h)", issuer: "AKCIT / UFG", date: "Set 2026" },
  { title: "Java Development", issuer: "FIAP", date: "2026" },
  { title: "Versionamento com Git e GitHub", issuer: "Danki Code", date: "2025" },
  { title: "Curso de C Completo", issuer: "Danki Code", date: "2025" },
  { title: "Atendimento ao Cliente", issuer: "Sebrae", date: "2025" },
];

export const LANGUAGES = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Intermediário · Leitura técnica" },
] as const;
