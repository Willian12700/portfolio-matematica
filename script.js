/**
 * PORTFÓLIO DE MATEMÁTICA - WILLIAN RANDRIE SILVA DE LIMA
 * 2º ANO B VESPERTINO - PROF. HERIBERTO NUNES
 * SESI ESCOLA SÃO GONÇALO DO AMARANTE
 * 2º E 4º BIMESTRES: MATEMÁTICA FINANCEIRA & TRIGONOMETRIA
 */

// Dados Oficiais do Portfólio (13 atividades completas do 2º e 4º Bimestres)
const ATIVIDADES_OFICIAIS = [
  // ==========================================================
  // 2º BIMESTRE (Matemática Financeira, Porcentagem, Juros)
  // ==========================================================
  {
    id: "ativ-1794588268542",
    titulo: "Atividade de Número decimal",
    bimestre: 2,
    data: "2026-04-10",
    categoria: "Número Decimal",
    tipo: "Atividade de Caderno",
    imagem: "assets/fotos/atividade_numero_decimal_10_04.png",
    descricao: "Essa atividade que fizemos no dia 10/04/26 nos ajudou a reforçar um pouco a mais do que sabiamos sobre porcentagem, vendo na prática como resolvemos contas de porcentagem de soma, subtração, multiplicação e divisão.",
    link: ""
  },
  {
    id: "ativ-1794588363714",
    titulo: "Atividade de desconto",
    bimestre: 2,
    data: "2026-04-14",
    categoria: "Desconto",
    tipo: "Atividade de Caderno",
    imagem: "assets/fotos/atividade_desconto_14_04.png",
    descricao: "Essa atividade que fizemos no dia 14/04/26 nos ajudou a reforçar um pouco a mais do que sabiamos sobre porcentagem, vendo na prática como resolvemos contas de porcentagem de soma, subtração, multiplicação e divisão.",
    link: ""
  },
  {
    id: "ativ-1794588414908",
    titulo: "Atividade de Aumentos",
    bimestre: 2,
    data: "2026-04-17",
    categoria: "Aumento",
    tipo: "Atividade de Caderno",
    imagem: "assets/fotos/atividade_aumentos_17_04.png",
    descricao: "Essas atividade que fizemos no dia 17/04/26 nos ajudou a reforçar um pouco a mais do que sabiamos sobre aumentos.",
    link: ""
  },
  {
    id: "ativ-1794588559434",
    titulo: "Relatório: a história da matemática financeira",
    bimestre: 2,
    data: "2026-04-24",
    categoria: "A história da matemática financeira",
    tipo: "Pesquisa / Trabalho Digital",
    imagem: "assets/fotos/relatorio_historia_matematica_financeira_24_04.png",
    descricao: "Este relatório explora a Matemática Financeira desde sua origem histórica e grandes pensadores até a aplicação prática de juros (simples e compostos), descontos e aumentos. O trabalho une teoria e exercícios práticos, demonstrando como ferramentas clássicas são essenciais para uma gestão financeira sólida no mercado atual.",
    link: "https://senairn-my.sharepoint.com/:w:/g/personal/diogo_souza_rn_aluno_sesi_org_br/IQAdlqSE9B9eR6PcoXzaAkxoAf82fjwRofpP53ZsK95Y5Y4?e=54WjgQ"
  },
  {
    id: "ativ-1794588657396",
    titulo: "Seminário sobre matemática financeira",
    bimestre: 2,
    data: "2026-05-08",
    categoria: "Matemática financeira",
    tipo: "Resolução no Quadro",
    imagem: "assets/fotos/seminario_matematica_financeira_08_05.png",
    descricao: "Realizei uma apresentação sobre matemática financeira, englobando: aumento e desconto, juros simples e composto e dicas pra ajudar no orçamento familiar.",
    link: "https://matematicafinanceira.netlify.app"
  },
  {
    id: "ativ-1794588463454",
    titulo: "Atividade de juros simples",
    bimestre: 2,
    data: "2026-05-29",
    categoria: "Juros Simples",
    tipo: "Atividade de Caderno",
    imagem: "assets/fotos/atividade_juros_simples_29_05.png",
    descricao: "Essas atividade que fizemos no dia 29/05/26 nos ajudou a reforçar um pouco a mais do que sabiamos sobre juros simples",
    link: ""
  },
  {
    id: "ativ-1794588791610",
    titulo: "Seminário sobre matemática financeira",
    bimestre: 2,
    data: "2026-06-05",
    categoria: "Matemática financeira",
    tipo: "Atividade em Sala",
    imagem: "assets/fotos/seminario_matematica_financeira_05_06.png",
    descricao: "Seminário sobre matemática financeira",
    link: ""
  },
  {
    id: "ativ-1794588907879",
    titulo: "Mapa mental de juros compostos",
    bimestre: 2,
    data: "2026-06-05",
    categoria: "Juros compostos",
    tipo: "Atividade de Caderno",
    imagem: "assets/fotos/mapa_mental_juros_compostos_05_06.png",
    descricao: "Mapa mental sobre juros compostos",
    link: "https://canva.link/jpsdo93yqtri1dw"
  },

  // ==========================================================
  // 4º BIMESTRE (Ciclo Trigonométrico, Funções, Pesquisa e Quadro)
  // ==========================================================
  {
    id: "ativ-1",
    titulo: "Revisão de ciclo trigonométrico",
    bimestre: 4,
    data: "2026-09-25",
    categoria: "Trigonometria",
    tipo: "Atividade de Fixação no Caderno",
    imagem: "assets/fotos/revisao_ciclo_trigonometrico_25_09.jpg",
    descricao: `Atividade de revisão geral sobre o ciclo trigonométrico, cálculo de voltas completas, arcos côngruos e determinação dos quadrantes:
• Questão 1: Análise de arco com 7 voltas completas e extremidade final em 130º. Identificação do 2º quadrante (pois 90º < 130º < 180º), cálculo do ângulo suplementar (180º - 130º = 50º) e representação gráfica detalhada da circunferência trigonométrica com os eixos dos senos e cossenos.
• Questão 2: Estudo de arcos aplicados ao relógio circular dividido em 12 partes iguais (cada hora equivale a 360º ÷ 12 = 30º). Resolução e cálculo do ângulo percorrido correspondente a 65º.`,
    link: ""
  },
  {
    id: "ativ-2",
    titulo: "Atividade de funções trigonométricas",
    bimestre: 4,
    data: "2026-10-16",
    categoria: "Funções Trigonométricas",
    tipo: "Atividade em Sala no Caderno",
    imagem: "assets/fotos/atividade_funcoes_trigonometricas_16_10.jpg",
    descricao: `Construção gráfica e análise de funções trigonométricas periódicas contextualizadas no dia a dia:

1. Gráfico da Função Senoidal:
Dada a função y = 2 · sen(x) + 1, determinou-se a tabela de valores nos ângulos notáveis (0º = 1, 90º = 3, 180º = 1, 270º = -1 e 360º = 1) e traçou-se a senóide completa destacando a amplitude e o deslocamento vertical no plano cartesiano.

2. Modelagem do Movimento da Ginástica Rítmica:
A ondulação da fita executada pela atleta foi descrita pela função f(x) = 3,5 · sen(x · π/3) + 1,2:
• Altura máxima atingida: 3,5(1) + 1,2 = 4,7 metros.
• Altura mínima atingida: 3,5(-1) + 1,2 = -2,3 metros.

3. Oscilação da Conexão de Internet ao longo do dia:
A oscilação do tráfego em gigabytes foi dada por f(x) = 120 · sen(x · π/12):
• Ponto máximo atingido no horário das 6 horas da manhã.
• Ponto mínimo atingido no horário das 18 horas.`,
    link: ""
  },
  {
    id: "ativ-3",
    titulo: "Resolução no Quadro: Momento Circular e Arcos de 15.240º",
    bimestre: 4,
    data: "2026-10-23",
    categoria: "Trigonometria",
    tipo: "Apresentação e Resolução no Quadro",
    imagem: "assets/fotos/questao3_quadro_23_10.png",
    descricao: `Resolução individual no quadro negro a pedido do professor Herberto durante a aula de 23/10:

Enunciado da Questão 3:
"3. Durante o estudo do momento circular, um físico fez a análise de um objeto que estava girando em torno de dele mesmo, formando um ângulo de 15.240º. Analisando esse ângulo, o arco formado por ele está no:
A) quadrante I.
B) quadrante II.
C) quadrante III.
D) quadrante IV.
E) em cima de um dos eixos."

Desenvolvimento e Resolução apresentada no quadro pelo aluno:
1. Primeira determinação positiva do arco:
Para saber a posição do arco após várias voltas, divide-se o ângulo por 360º:
15.240º ÷ 360º = 42 voltas completas e resto de 120º.
Cálculo passo a passo: 42 × 360º = 15.120º
15.240º - 15.120º = 120º.

2. Identificação do quadrante na circunferência trigonométrica:
• Quadrante I: de 0º a 90º
• Quadrante II: de 90º a 180º
• Quadrante III: de 180º a 270º
• Quadrante IV: de 270º a 360º

Como 90º < 120º < 180º, o arco congruente de 120º está localizado exatamente no Quadrante II.

Resposta correta: Alternativa B (quadrante II).`,
    link: ""
  },
  {
    id: "ativ-4",
    titulo: "Questões de funções trigonométricas",
    bimestre: 4,
    data: "2026-10-27",
    categoria: "Funções Trigonométricas",
    tipo: "Lista de Exercícios Práticos",
    imagem: "assets/fotos/questoes_funcoes_trigonometricas_27_10.jpg",
    descricao: `Resolução de problemas de modelagem periódica com funções trigonométricas de seno e cosseno:

1. Exame de Eletrocardiograma (ECG):
A oscilação do exame segue a função y = 2,5 · sen(x · π/2) + 3,5, em que x é o tempo em segundos e y a altura alcançada pela onda no monitor cardíaco. Determinou-se:
A) Altura máxima alcançada: 2,5(1) + 3,5 = 6
B) Altura mínima: 2,5(-1) + 3,5 = 1
C) Tempo x para atingir a altura máxima: x · π/2 = π/2 ⇒ x = 1 segundo
D) Altura y quando x = 2 segundos: y = 2,5 · sen(π) + 3,5 = 3,5

2. Função Cosseno f(x) = -cos(x) + 5,5:
Cálculo dos valores numéricos para os ângulos notáveis de 120º e 180º:
• Para x = 120º: cos(120º) = -0,5 ⇒ f(120º) = -(-0,5) + 5,5 = 0,5 + 5,5 = 6
• Para x = 180º: cos(180º) = -1,0 ⇒ f(180º) = -(-1) + 5,5 = 1 + 5,5 = 6,5`,
    link: ""
  },
  {
    id: "ativ-5",
    titulo: "Pesquisa: O Ciclo e as Equações Trigonométricas nas Profissões",
    bimestre: 4,
    data: "2026-11-05",
    categoria: "Pesquisa Acadêmica",
    tipo: "Trabalho de Pesquisa (PDF)",
    imagem: "assets/fotos/pesquisa_profissoes_trigonometria.svg",
    link: "assets/documentos/APLICACOES_DO_CICLO_E_EQUACOES_TRIGONOMETRICAS_NAS_PROFISSOES.pdf",
    downloadNome: "APLICACOES_DO_CICLO_E_EQUACOES_TRIGONOMETRICAS_NAS_PROFISSOES.pdf",
    descricao: `Trabalho de pesquisa acadêmica apresentado à disciplina de Matemática do Sesi Escola São Gonçalo do Amarante, sob orientação do Prof. Heriberto Nunes:

• Tema Central e Resumo:
Análise aprofundada de como o ciclo trigonométrico e as equações envolvendo seno, cosseno e tangente são ferramentas indispensáveis no desenvolvimento tecnológico e científico moderno.

• Principais Áreas e Profissões Detalhadas no Documento:
1. Engenharias (Civil, Mecânica e Aeroespacial): Decomposição de forças vetoriais em treliças de pontes, inclinação de rampas e telhados, levantamentos topográficos e cálculo de trajetórias de lançamento de foguetes.
2. Engenharia Elétrica e Eletrônica: Modelagem matemática de ondas de corrente alternada (AC) e sinais eletromagnéticos de rádio e Wi-Fi.
3. Física e Astronomia: Fenômenos ondulatórios (som e luz), determinação de distâncias celestes através de paralaxe trigonométrica e previsão de órbitas.
4. Ciência da Computação e Jogos (Game Design): Rotação de objetos 3D, perspectiva gráfica virtual e motores de física (physics engines) para cálculo de colisões e gravidade.
5. Geografia, Cartografia e Navegação: Fórmulas de trigonometria esférica aplicadas aos sistemas de GPS e traçado de rotas marítimas e aéreas.

📥 Clique no botão abaixo para baixar o PDF completo do trabalho (8 páginas formatadas com referências e normas ABNT).`
  }
];

// Estado da Aplicação
let atividades = [];
let filtroBimestreAtual = 'all'; // Inicia exibindo todas as atividades (2º e 4º Bimestres)
let filtroBuscaAtual = '';
let filtroCategoriaAtual = 'all';

// Elementos do DOM
const activitiesGrid = document.getElementById('activities-grid');
const emptyState = document.getElementById('empty-state');
const emptyTitle = document.getElementById('empty-title');
const emptyDesc = document.getElementById('empty-desc');
const visibleCounter = document.getElementById('visible-counter');
const currentViewTitle = document.getElementById('current-view-title');

// Filtros
const bimesterTabs = document.querySelectorAll('.tab-btn');
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');

// Botões de Ação no Empty State
const btnGotoBim2 = document.getElementById('btn-goto-bim2');
const btnGotoBim4 = document.getElementById('btn-goto-bim4');
const btnGotoAll = document.getElementById('btn-goto-all');

// Estatísticas
const statTotal = document.getElementById('stat-total');
const statLinks = document.getElementById('stat-links');
const statPhotos = document.getElementById('stat-photos');

// Modal de Formulário
const modal = document.getElementById('activity-modal');
const btnOpenModal = document.getElementById('btn-open-modal');
const btnCloseModal = document.getElementById('btn-close-modal');
const btnCancelModal = document.getElementById('btn-cancel-modal');
const activityForm = document.getElementById('activity-form');
const formImageInput = document.getElementById('form-image');
const formImageUrl = document.getElementById('form-image-url');
const imagePreviewWrapper = document.getElementById('image-preview-wrapper');
const formImagePreview = document.getElementById('form-image-preview');

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxMeta = document.getElementById('lightbox-meta');
const lightboxDesc = document.getElementById('lightbox-desc');
const lightboxLink = document.getElementById('lightbox-link');
const lightboxClose = document.getElementById('lightbox-close');

// Dados do Aluno no Cabeçalho
const metaStudent = document.getElementById('meta-student');
const metaGrade = document.getElementById('meta-grade');
const metaTeacher = document.getElementById('meta-teacher');
const metaYear = document.getElementById('meta-year');

// Alternador de Modo Noturno / Claro
const btnThemeToggle = document.getElementById('btn-theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');

// Modo Apresentação de Slides
const presentationOverlay = document.getElementById('presentation-overlay');
const btnPresentationMode = document.getElementById('btn-presentation-mode');
const btnClosePresentation = document.getElementById('btn-close-presentation');
const btnPresPrev = document.getElementById('btn-pres-prev');
const btnPresNext = document.getElementById('btn-pres-next');
const presCounter = document.getElementById('pres-counter');
const presSlideContent = document.getElementById('presentation-slide-content');
const presDotsContainer = document.getElementById('pres-dots-container');

let slideAtualIndex = 0;
let slidesList = [];

/* ==========================================================
   FUNÇÃO AUXILIAR DE ROTULAGEM DE LINKS
   ========================================================== */
function obterRotuloLink(link) {
  if (!link) return '';
  if (link.endsWith('.pdf')) return 'Baixar PDF da Pesquisa';
  if (link.includes('canva')) return 'Ver Mapa Mental no Canva';
  if (link.includes('sharepoint') || link.includes('docs.google')) return 'Acessar Relatório Completo';
  if (link.includes('netlify')) return 'Acessar Site do Seminário';
  return 'Acessar Link do Trabalho';
}

/* ==========================================================
   MODO APRESENTAÇÃO DE SLIDES (TELA CHEIA)
   ========================================================== */
function abrirApresentacao() {
  if (filtroBimestreAtual === 'all') {
    slidesList = [...atividades].sort((a, b) => new Date(a.data) - new Date(b.data));
  } else {
    slidesList = atividades
      .filter(a => String(a.bimestre) === String(filtroBimestreAtual))
      .sort((a, b) => new Date(a.data) - new Date(b.data));
    if (slidesList.length === 0) {
      slidesList = [...atividades].sort((a, b) => new Date(a.data) - new Date(b.data));
    }
  }

  slideAtualIndex = 0;
  renderizarSlide();
  presentationOverlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function fecharApresentacao() {
  presentationOverlay.classList.add('hidden');
  document.body.style.overflow = '';
}

function irParaSlide(idx) {
  if (idx >= 0 && idx < slidesList.length) {
    slideAtualIndex = idx;
    renderizarSlide();
  }
}

function proximoSlide() {
  if (slideAtualIndex < slidesList.length - 1) {
    slideAtualIndex++;
    renderizarSlide();
  }
}

function slideAnterior() {
  if (slideAtualIndex > 0) {
    slideAtualIndex--;
    renderizarSlide();
  }
}

function renderizarSlide() {
  const ativ = slidesList[slideAtualIndex];
  if (!ativ) return;

  presCounter.textContent = `Slide ${slideAtualIndex + 1} de ${slidesList.length}`;

  btnPresPrev.style.opacity = slideAtualIndex === 0 ? '0.35' : '1';
  btnPresPrev.style.pointerEvents = slideAtualIndex === 0 ? 'none' : 'auto';
  btnPresNext.style.opacity = slideAtualIndex === slidesList.length - 1 ? '0.35' : '1';
  btnPresNext.style.pointerEvents = slideAtualIndex === slidesList.length - 1 ? 'none' : 'auto';

  presDotsContainer.innerHTML = '';
  slidesList.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = `pres-dot ${i === slideAtualIndex ? 'active' : ''}`;
    dot.title = `Ir para o slide ${i + 1}`;
    dot.onclick = () => irParaSlide(i);
    presDotsContainer.appendChild(dot);
  });

  const isQuadro = ativ.tipo && ativ.tipo.includes('Quadro');
  const badgeClass = isQuadro ? 'badge-type highlight-quadro-badge' : 'badge-type';
  const labelLink = obterRotuloLink(ativ.link);

  presSlideContent.innerHTML = `
    <div class="slide-image-col">
      <img src="${ativ.imagem}" alt="${ativ.titulo}" loading="eager">
    </div>

    <div class="slide-info-col">
      <div class="slide-meta-row">
        <span class="slide-date-pill">📅 ${formatarData(ativ.data)}</span>
        <span class="badge badge-bim-${ativ.bimestre}">${ativ.bimestre}º Bimestre</span>
        <span class="badge ${badgeClass}">${ativ.tipo || 'Atividade'}</span>
      </div>

      <h2 class="slide-title">${ativ.titulo}</h2>

      <div class="slide-description-card">
        <span class="slide-desc-label">Explicação & Conteúdo:</span>
        <p class="slide-desc-text">${ativ.descricao}</p>
      </div>

      <div class="slide-action-box">
        ${ativ.link ? `
          <a href="${ativ.link}" ${ativ.link.endsWith('.pdf') ? `download="${ativ.downloadNome || 'trabalho.pdf'}"` : 'target="_blank" rel="noopener noreferrer"'} class="btn-icon-link ${ativ.link.endsWith('.pdf') ? 'btn-download-pdf' : ''}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            ${labelLink}
          </a>
        ` : `
          <span style="font-size: 0.85rem; color: #94a3b8; font-weight: 600;">
            ${isQuadro ? '✓ Apresentação e resolução realizada no quadro pelo aluno' : '✓ Atividade prática com folha de caderno documentada'}
          </span>
        `}
      </div>
    </div>
  `;
}

/* ==========================================================
   MODO NOTURNO / CLARO
   ========================================================== */
function inicializarTema() {
  const temaSalvo = localStorage.getItem('math_portfolio_theme');
  if (temaSalvo === 'dark') {
    aplicarTemaEscuro(true);
  } else if (temaSalvo === 'light') {
    aplicarTemaEscuro(false);
  } else {
    const prefereDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    aplicarTemaEscuro(prefereDark);
  }
}

function alternarTema() {
  const isDark = document.body.classList.contains('dark-theme');
  aplicarTemaEscuro(!isDark);
}

function aplicarTemaEscuro(ativar) {
  if (ativar) {
    document.body.classList.add('dark-theme');
    if (themeIcon) themeIcon.textContent = '☀️';
    if (themeText) themeText.textContent = 'Modo Claro';
    localStorage.setItem('math_portfolio_theme', 'dark');
  } else {
    document.body.classList.remove('dark-theme');
    if (themeIcon) themeIcon.textContent = '🌙';
    if (themeText) themeText.textContent = 'Modo Noturno';
    localStorage.setItem('math_portfolio_theme', 'light');
  }
}

/* ==========================================================
   INICIALIZAÇÃO & PERSISTÊNCIA LOCAL
   ========================================================== */
function inicializarApp() {
  inicializarTema();
  carregarDadosEstudante();
  carregarAtividades();
  popularFiltroCategorias();
  configurarEventos();
  renderizar();
}

function carregarDadosEstudante() {
  const alunoPadrao = {
    aluno: "Willian Randrie Silva de Lima",
    turma: "2º ano B Vespertino",
    escola: "Sesi Escola São Gonçalo do Amarante",
    professor: "Heriberto Nunes",
    ano: "2026"
  };

  const dados = JSON.parse(localStorage.getItem('math_portfolio_student_v4')) || alunoPadrao;
  metaStudent.textContent = dados.aluno;
  metaGrade.textContent = dados.turma;
  metaTeacher.textContent = dados.professor;
  metaYear.textContent = dados.ano;

  // Permitir edição rápida dando duplo clique nos dados do cabeçalho
  [metaStudent, metaGrade, metaTeacher].forEach(el => {
    el.title = "Clique duas vezes para editar seu dado pessoal";
    el.addEventListener('dblclick', () => {
      const novoValor = prompt("Editar informação:", el.textContent);
      if (novoValor && novoValor.trim() !== "") {
        el.textContent = novoValor.trim();
        salvarDadosEstudante();
      }
    });
  });
}

function salvarDadosEstudante() {
  const dados = {
    aluno: metaStudent.textContent,
    turma: metaGrade.textContent,
    escola: document.getElementById('meta-school').textContent,
    professor: metaTeacher.textContent,
    ano: metaYear.textContent
  };
  localStorage.setItem('math_portfolio_student_v4', JSON.stringify(dados));
}

function carregarAtividades() {
  const salvas = localStorage.getItem('math_portfolio_activities_v8');
  if (salvas) {
    try {
      atividades = JSON.parse(salvas);
      // Garantir que todas as atividades oficiais estejam sincronizadas
      const idsExistentes = new Set(atividades.map(a => a.id));
      for (const oficial of ATIVIDADES_OFICIAIS) {
        if (!idsExistentes.has(oficial.id)) {
          atividades.push(oficial);
        }
      }
      return;
    } catch (e) {
      console.warn("Erro ao ler localStorage:", e);
    }
  }
  // Carrega a lista completa oficial (13 atividades)
  atividades = [...ATIVIDADES_OFICIAIS];
  salvarAtividadesNoStorage();
}

function salvarAtividadesNoStorage() {
  localStorage.setItem('math_portfolio_activities_v8', JSON.stringify(atividades));
}

function popularFiltroCategorias() {
  if (!categoryFilter) return;
  const cats = Array.from(new Set(atividades.map(a => a.categoria).filter(Boolean))).sort();
  const valorAtual = categoryFilter.value;
  categoryFilter.innerHTML = '<option value="all">Todas as Categorias</option>';
  cats.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c;
    opt.textContent = c;
    categoryFilter.appendChild(opt);
  });
  if (cats.includes(valorAtual)) {
    categoryFilter.value = valorAtual;
  } else {
    categoryFilter.value = 'all';
    filtroCategoriaAtual = 'all';
  }
}

/* ==========================================================
   FORMATADORES
   ========================================================== */
function formatarData(dataStr) {
  if (!dataStr) return 'Data não informada';
  const partes = dataStr.split('-');
  if (partes.length === 3) {
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
  }
  return dataStr;
}

/* ==========================================================
   RENDERIZAÇÃO DINÂMICA
   ========================================================== */
function renderizar() {
  const filtradas = atividades.filter(item => {
    if (filtroBimestreAtual !== 'all' && String(item.bimestre) !== String(filtroBimestreAtual)) {
      return false;
    }

    if (filtroCategoriaAtual !== 'all' && item.categoria !== filtroCategoriaAtual) {
      return false;
    }

    if (filtroBuscaAtual) {
      const termo = filtroBuscaAtual.toLowerCase();
      const matchTitulo = item.titulo && item.titulo.toLowerCase().includes(termo);
      const matchDesc = item.descricao && item.descricao.toLowerCase().includes(termo);
      const matchCat = item.categoria && item.categoria.toLowerCase().includes(termo);
      if (!matchTitulo && !matchDesc && !matchCat) {
        return false;
      }
    }

    return true;
  });

  // Atualiza título da seção
  if (filtroBimestreAtual === 'all') {
    currentViewTitle.textContent = 'Todas as Atividades Registradas (2º e 4º Bimestres)';
  } else if (filtroBimestreAtual === '2') {
    currentViewTitle.textContent = '2º Bimestre — Atividades Registradas (Matemática Financeira)';
  } else if (filtroBimestreAtual === '4') {
    currentViewTitle.textContent = '4º Bimestre — Atividades Registradas (Trigonometria)';
  } else {
    currentViewTitle.textContent = `${filtroBimestreAtual}º Bimestre — Sem atividades registradas`;
  }

  visibleCounter.textContent = `Mostrando ${filtradas.length} ${filtradas.length === 1 ? 'atividade' : 'atividades'}`;

  atualizarEstatisticas();
  activitiesGrid.innerHTML = '';

  if (filtradas.length === 0) {
    emptyState.classList.remove('hidden');

    if (['1', '3'].includes(filtroBimestreAtual)) {
      emptyTitle.textContent = `Nenhuma atividade no ${filtroBimestreAtual}º Bimestre`;
      emptyDesc.innerHTML = `As atividades registradas estão disponíveis no <strong>2º Bimestre (8 atividades)</strong> e no <strong>4º Bimestre (5 atividades)</strong>.`;
    } else {
      emptyTitle.textContent = `Nenhum resultado para a busca`;
      emptyDesc.textContent = `Tente buscar por outro termo ou limpar os filtros de categoria.`;
    }
    return;
  } else {
    emptyState.classList.add('hidden');
  }

  // Ordena cronologicamente por data
  filtradas.sort((a, b) => new Date(a.data) - new Date(b.data));

  filtradas.forEach(ativ => {
    const card = document.createElement('article');
    card.className = 'activity-card';

    // Destaque visual caso seja a resolução no quadro
    const isQuadro = ativ.tipo && ativ.tipo.includes('Quadro');
    const badgeTypeClass = isQuadro ? 'badge-type highlight-quadro-badge' : 'badge-type';
    const labelLink = obterRotuloLink(ativ.link);

    card.innerHTML = `
      <div class="card-image-wrap" title="Clique para abrir a imagem inteira sem cortes">
        <img src="${ativ.imagem}" alt="${ativ.titulo}" class="card-img-element" loading="lazy">
        <div class="card-badges">
          <span class="badge badge-bim-${ativ.bimestre}">${ativ.bimestre}º Bimestre</span>
          <span class="badge ${badgeTypeClass}">${ativ.tipo || 'Atividade'}</span>
        </div>
        <div class="image-overlay-hint">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
          Imagem Completa (Ampliar)
        </div>
      </div>

      <div class="card-body">
        <div class="card-header-meta">
          <span>📅 ${formatarData(ativ.data)}</span>
          <span>🏷️ ${ativ.categoria}</span>
        </div>

        <h3 class="card-title">${ativ.titulo}</h3>

        <div class="card-description-box">
          <span class="desc-label">O que foi feito & Conteúdo:</span>
          <p class="card-desc-text">${ativ.descricao}</p>
        </div>

        <div class="card-footer">
          <div class="card-actions-left">
            ${ativ.link ? `
              <a href="${ativ.link}" ${ativ.link.endsWith('.pdf') ? `download="${ativ.downloadNome || 'trabalho.pdf'}"` : 'target="_blank" rel="noopener noreferrer"'} class="btn-icon-link ${ativ.link.endsWith('.pdf') ? 'btn-download-pdf' : ''}">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                ${labelLink}
              </a>
            ` : `
              <span style="font-size: 0.8rem; color: #64748b; font-weight: 600;">
                ${isQuadro ? '✓ Apresentado no quadro da sala' : '✓ Caderno verificado em sala'}
              </span>
            `}
          </div>

          <button class="card-delete-btn" data-delete-id="${ativ.id}" title="Excluir atividade">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        </div>
      </div>
    `;

    const imgWrap = card.querySelector('.card-image-wrap');
    imgWrap.addEventListener('click', () => abrirLightbox(ativ));

    const deleteBtn = card.querySelector('.card-delete-btn');
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      excluirAtividade(ativ.id, ativ.titulo);
    });

    activitiesGrid.appendChild(card);
  });
}

/* ==========================================================
   ESTATÍSTICAS GERAIS
   ========================================================== */
function atualizarEstatisticas() {
  statTotal.textContent = atividades.length;
  statLinks.textContent = atividades.filter(a => a.link && a.link.trim() !== '').length;
  statPhotos.textContent = atividades.filter(a => a.imagem && a.imagem.trim() !== '').length;
}

/* ==========================================================
   LIGHTBOX (IMAGEM COMPLETA SEM CORTES)
   ========================================================== */
function abrirLightbox(ativ) {
  lightboxImg.src = ativ.imagem;
  lightboxTitle.textContent = ativ.titulo;
  lightboxMeta.textContent = `${ativ.bimestre}º Bimestre • Data: ${formatarData(ativ.data)} • ${ativ.categoria}`;
  lightboxDesc.textContent = ativ.descricao;

  if (ativ.link && ativ.link.trim() !== '') {
    lightboxLink.href = ativ.link;
    const labelLink = obterRotuloLink(ativ.link);
    if (ativ.link.endsWith('.pdf')) {
      lightboxLink.setAttribute('download', ativ.downloadNome || 'trabalho.pdf');
      lightboxLink.removeAttribute('target');
      lightboxLink.innerHTML = `
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        ${labelLink}
      `;
    } else {
      lightboxLink.removeAttribute('download');
      lightboxLink.setAttribute('target', '_blank');
      lightboxLink.setAttribute('rel', 'noopener noreferrer');
      lightboxLink.innerHTML = `
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
        ${labelLink}
      `;
    }
    lightboxLink.classList.remove('hidden');
  } else {
    lightboxLink.classList.add('hidden');
  }

  lightbox.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function fecharLightbox() {
  lightbox.classList.add('hidden');
  document.body.style.overflow = '';
}

/* ==========================================================
   MODAL DE ADICIONAR ATIVIDADE
   ========================================================== */
function abrirModalFormulario() {
  activityForm.reset();
  formImagePreview.src = '';
  imagePreviewWrapper.classList.add('hidden');
  
  const hoje = new Date().toISOString().split('T')[0];
  document.getElementById('form-date').value = hoje;
  document.getElementById('form-bimester').value = filtroBimestreAtual === 'all' ? '2' : filtroBimestreAtual;

  modal.classList.remove('hidden');
}

function fecharModalFormulario() {
  modal.classList.add('hidden');
}

/* Leitura de imagem via upload local */
let imagemBase64Temp = '';

formImageInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      imagemBase64Temp = event.target.result;
      formImagePreview.src = imagemBase64Temp;
      imagePreviewWrapper.classList.remove('hidden');
    };
    reader.readAsDataURL(file);
  }
});

formImageUrl.addEventListener('input', () => {
  const url = formImageUrl.value.trim();
  if (url) {
    imagemBase64Temp = url;
    formImagePreview.src = url;
    imagePreviewWrapper.classList.remove('hidden');
  }
});

/* Submissão do Formulário de Nova Atividade */
activityForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const titulo = document.getElementById('form-title').value.trim();
  const bimestre = parseInt(document.getElementById('form-bimester').value, 10);
  const data = document.getElementById('form-date').value;
  const categoria = document.getElementById('form-category').value.trim();
  const tipo = document.getElementById('form-type').value;
  const descricao = document.getElementById('form-description').value.trim();
  const link = document.getElementById('form-link').value.trim();

  let imagemFinal = imagemBase64Temp || "assets/fotos/pesquisa_profissoes_trigonometria.svg";

  const novaAtividade = {
    id: 'ativ-' + Date.now(),
    titulo,
    bimestre,
    data,
    categoria,
    tipo,
    descricao,
    link,
    imagem: imagemFinal
  };

  atividades.push(novaAtividade);
  salvarAtividadesNoStorage();
  popularFiltroCategorias();
  
  fecharModalFormulario();
  renderizar();
});

/* Exclusão de Atividade */
function excluirAtividade(id, titulo) {
  const confirmacao = confirm(`Deseja realmente excluir a atividade "${titulo}"?`);
  if (confirmacao) {
    atividades = atividades.filter(a => a.id !== id);
    salvarAtividadesNoStorage();
    popularFiltroCategorias();
    renderizar();
  }
}

/* ==========================================================
   CONFIGURAÇÃO DE EVENTOS
   ========================================================== */
function configurarEventos() {
  // Troca de Bimestres (Abas)
  bimesterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      bimesterTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      filtroBimestreAtual = tab.dataset.bimester;
      renderizar();
    });
  });

  function ativarAbaBimestre(bim) {
    bimesterTabs.forEach(t => {
      if (t.dataset.bimester === bim) {
        t.classList.add('active');
        t.setAttribute('aria-selected', 'true');
      } else {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      }
    });
    filtroBimestreAtual = bim;
    renderizar();
  }

  if (btnGotoBim2) btnGotoBim2.addEventListener('click', () => ativarAbaBimestre('2'));
  if (btnGotoBim4) btnGotoBim4.addEventListener('click', () => ativarAbaBimestre('4'));
  if (btnGotoAll) btnGotoAll.addEventListener('click', () => ativarAbaBimestre('all'));

  searchInput.addEventListener('input', (e) => {
    filtroBuscaAtual = e.target.value.trim();
    renderizar();
  });

  categoryFilter.addEventListener('change', (e) => {
    filtroCategoriaAtual = e.target.value;
    renderizar();
  });

  // Alternar Tema Escuro / Claro
  if (btnThemeToggle) {
    btnThemeToggle.addEventListener('click', alternarTema);
  }

  // Modo Apresentação de Slides
  if (btnPresentationMode) {
    btnPresentationMode.addEventListener('click', abrirApresentacao);
  }
  if (btnClosePresentation) {
    btnClosePresentation.addEventListener('click', fecharApresentacao);
  }
  if (btnPresPrev) {
    btnPresPrev.addEventListener('click', slideAnterior);
  }
  if (btnPresNext) {
    btnPresNext.addEventListener('click', proximoSlide);
  }

  btnOpenModal.addEventListener('click', abrirModalFormulario);
  btnCloseModal.addEventListener('click', fecharModalFormulario);
  btnCancelModal.addEventListener('click', fecharModalFormulario);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) fecharModalFormulario();
  });

  lightboxClose.addEventListener('click', fecharLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) fecharLightbox();
  });

  // Navegação Global por Teclado
  window.addEventListener('keydown', (e) => {
    // Se o modo apresentação estiver ativo
    if (presentationOverlay && !presentationOverlay.classList.contains('hidden')) {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        proximoSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        slideAnterior();
      } else if (e.key === 'Escape') {
        fecharApresentacao();
      }
      return;
    }

    // Se estiver fora da apresentação
    if (e.key === 'Escape') {
      fecharModalFormulario();
      fecharLightbox();
    }
  });
}

document.addEventListener('DOMContentLoaded', inicializarApp);
