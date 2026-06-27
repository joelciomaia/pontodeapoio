import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Building2,
  ClipboardCheck,
  Database,
  ExternalLink,
  EyeOff,
  FileText,
  Gavel,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Landmark,
  LifeBuoy,
  LibraryBig,
  LockKeyhole,
  MapPinned,
  MessageCircle,
  PhoneCall,
  Scale,
  Search,
  ShieldAlert,
  Siren,
  Stethoscope,
  Users,
} from 'lucide-react'
import './App.css'

const heroImage = `${import.meta.env.BASE_URL}assets/hero-support.png`
const portfolioUrl = 'https://joelciomaia.github.io/'

const navItems = [
  ['Inicio', '#inicio'],
  ['Ajuda agora', '#ajuda'],
  ['Tipos', '#tipos'],
  ['Ciclo', '#ciclo'],
  ['Lei', '#lei'],
  ['Rede', '#rede'],
  ['Dados SC', '#dados-sc'],
  ['Pesquisa', '#pesquisa'],
  ['Contatos', '#contatos'],
]

const emergencyCards = [
  {
    icon: Siren,
    tone: 'danger',
    title: 'Risco imediato',
    text: 'Se houver ameaça, agressão em andamento ou perigo para você ou seus filhos, procure sair para um local seguro e acione a Polícia Militar.',
    cta: 'Ligar 190',
    href: 'tel:190',
  },
  {
    icon: PhoneCall,
    tone: 'rose',
    title: 'Orientação e denúncia',
    text: 'O Ligue 180 recebe denúncias, orienta sobre direitos e informa serviços de atendimento para mulheres em situação de violência.',
    cta: 'Ligar 180',
    href: 'tel:180',
  },
  {
    icon: HandHeart,
    tone: 'teal',
    title: 'Apoio seguro',
    text: 'Fale com uma pessoa de confiança, combine uma palavra-código e evite avisar o agressor sobre planos de saída ou denúncia.',
    cta: 'Ver rede',
    href: '#rede',
  },
]

const violenceTypes = [
  {
    icon: ShieldAlert,
    title: 'Fisica',
    text: 'Ações que ofendem a integridade ou a saúde corporal, como empurrões, tapas, socos, queimaduras, sufocamento ou lesões.',
  },
  {
    icon: LockKeyhole,
    title: 'Psicologica',
    text: 'Condutas que causam dano emocional, controle, humilhação, perseguição, isolamento, ameaça, manipulação ou chantagem.',
  },
  {
    icon: HeartPulse,
    title: 'Sexual',
    text: 'Obrigar, constranger ou impedir decisões sobre a própria sexualidade, inclusive por ameaça, coerção ou uso de força.',
  },
  {
    icon: Landmark,
    title: 'Patrimonial',
    text: 'Reter, destruir, controlar ou subtrair documentos, dinheiro, bens, instrumentos de trabalho ou recursos econômicos.',
  },
  {
    icon: MessageCircle,
    title: 'Moral',
    text: 'Calúnia, difamação, injúria e exposições que atacam a honra, a reputação ou a dignidade da mulher.',
  },
]

const cycleSteps = [
  {
    number: '01',
    title: 'Aumento da tensão',
    text: 'O agressor demonstra irritação, controle e ameaças. A mulher pode sentir que precisa medir palavras e atitudes para evitar uma explosão.',
  },
  {
    number: '02',
    title: 'Ato de violencia',
    text: 'A agressão acontece. Pode ser física, psicológica, sexual, moral, patrimonial ou uma combinação delas.',
  },
  {
    number: '03',
    title: 'Arrependimento e promessa',
    text: 'Vêm pedidos de desculpa, culpa transferida para a vítima e promessas de mudança. Sem apoio e responsabilização, o ciclo tende a se repetir.',
  },
]

const rights = [
  'Medidas protetivas de urgência para afastar o agressor e reduzir o risco.',
  'Atendimento policial, jurídico, psicossocial e de saúde sem julgamento ou revitimização.',
  'Registro de ocorrência e encaminhamento para a rede de proteção.',
  'Prioridade para proteção da vida, da dignidade, dos filhos e da autonomia econômica.',
]

const network = [
  {
    icon: Siren,
    title: 'Policia Militar',
    detail: '190 para emergência e risco imediato.',
    cta: 'Rede Catarina',
    href: 'https://www.pm.sc.gov.br/paginas/rede-catarina',
  },
  {
    icon: Building2,
    title: 'Policia Civil e Delegacia da Mulher',
    detail: 'Registro de ocorrência, investigação e pedido de medidas protetivas.',
    cta: 'PC por Elas',
    href: 'https://pcporelas.pc.sc.gov.br/',
  },
  {
    icon: Gavel,
    title: 'Juizados e Tribunais de Justiça',
    detail: 'Análise e concessão de medidas protetivas de urgência.',
    cta: 'TJSC CEAV',
    href: 'https://www.tjsc.jus.br/ceav',
  },
  {
    icon: Scale,
    title: 'Defensoria Pública',
    detail: 'Orientação jurídica gratuita e apoio para requerer direitos.',
    cta: 'DPE/SC',
    href: 'https://defensoria.sc.def.br/',
  },
  {
    icon: Stethoscope,
    title: 'SUS e rede de saúde',
    detail: 'Atendimento médico, psicológico e cuidados em casos de violência sexual.',
    cta: 'Saúde e cuidado',
    href: 'https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/guias-e-manuais/2025/guia-pratico-de-cuidado-a-mulher-em-situacao-de-violencia.pdf',
  },
  {
    icon: LifeBuoy,
    title: 'Serviços de acolhimento',
    detail: 'Apoio psicossocial, abrigamento temporário e encaminhamentos.',
    cta: 'Rede OVM/SC',
    href: 'https://ovm.alesc.sc.gov.br/rede-de-enfrentamento/',
  },
]

const stats = [
  {
    value: '31.655',
    label: 'medidas protetivas requeridas em Santa Catarina em 2025',
    source: 'TJSC via OVM/SC',
  },
  {
    value: '14.788',
    label: 'medidas protetivas requeridas de janeiro a maio de 2026',
    source: 'TJSC via OVM/SC',
  },
  {
    value: '52',
    label: 'feminicidios registrados em Santa Catarina em 2025',
    source: 'SSP/SC via OVM/SC',
  },
  {
    value: '23',
    label: 'feminicidios registrados de janeiro a maio de 2026',
    source: 'SSP/SC via OVM/SC',
  },
]

const contacts = [
  {
    icon: PhoneCall,
    title: '190',
    label: 'Policia Militar',
    text: 'Emergência, ameaça ou agressão em andamento.',
    href: 'tel:190',
    cta: 'Ligar',
  },
  {
    icon: PhoneCall,
    title: '180',
    label: 'Central de Atendimento à Mulher',
    text: 'Denúncias, orientação sobre direitos e informações sobre serviços.',
    href: 'tel:180',
    cta: 'Ligar',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Ligue 180',
    label: '(61) 9610-0180',
    text: 'Canal oficial informado pelo Ministério das Mulheres para atendimento do Ligue 180.',
    href: 'https://www.gov.br/mulheres/pt-br/ligue180',
    cta: 'Abrir fonte',
  },
  {
    icon: MapPinned,
    title: 'OVM/SC',
    label: 'Rede em Santa Catarina',
    text: 'Dados, notícias e caminhos de atendimento no estado.',
    href: 'https://ovm.alesc.sc.gov.br/',
    cta: 'Acessar',
  },
]

const sources = [
  {
    title: 'Observatorio da Violencia Contra a Mulher - OVM/SC',
    url: 'https://ovm.alesc.sc.gov.br/',
  },
  {
    title: 'Instituto Maria da Penha',
    url: 'https://www.institutomariadapenha.org.br/',
  },
  {
    title: 'Pacto Nacional Brasil Contra o Feminicidio',
    url: 'https://www.gov.br/mulheres/pt-br/brasil-sem-misoginia/pacto-nacional-brasil-contra-o-feminicidio',
  },
  {
    title: 'Conselho Nacional de Justiça - Violencia contra a Mulher',
    url: 'https://www.cnj.jus.br/programas-e-acoes/violencia-contra-a-mulher/',
  },
  {
    title: 'Justiceiras',
    url: 'https://justiceiras.org.br/',
  },
  {
    title: 'Instituto Nos Por Elas',
    url: 'https://nosporelas.com/',
  },
]

const studyTopics = [
  {
    icon: Scale,
    title: 'Lei e direitos',
    text: 'Investigue a Lei Maria da Penha, medidas protetivas, acesso à justiça e atendimento humanizado.',
    href: '#lei',
  },
  {
    icon: HeartPulse,
    title: 'Saúde e impactos',
    text: 'Pesquise consequências físicas, psicológicas e sociais da violência doméstica e familiar.',
    href: '#pesquisa',
  },
  {
    icon: Database,
    title: 'Dados e políticas públicas',
    text: 'Compare estatísticas, relatórios, orçamento público e ações de prevenção em Santa Catarina e no Brasil.',
    href: '#dados-sc',
  },
  {
    icon: Users,
    title: 'Rede de proteção',
    text: 'Mapeie os órgãos de segurança, justiça, saúde, assistência social e sociedade civil.',
    href: '#rede',
  },
]

const researchHubs = [
  {
    icon: Search,
    title: 'SciELO',
    text: 'Biblioteca científica com artigos revisados por pares em português, espanhol e inglês.',
    href: 'https://search.scielo.org/?q=%22viol%C3%AAncia%20contra%20a%20mulher%22',
    cta: 'Pesquisar artigos',
  },
  {
    icon: LibraryBig,
    title: 'Biblioteca Virtual em Saúde',
    text: 'Base útil para temas de saúde pública, violência, gênero, acolhimento e cuidado.',
    href: 'https://pesquisa.bvsalud.org/portal/?lang=pt&q=%22viol%C3%AAncia%20contra%20a%20mulher%22',
    cta: 'Acessar BVS',
  },
  {
    icon: GraduationCap,
    title: 'Portal de Periódicos CAPES',
    text: 'Ambiente amplo para localizar periódicos, livros, bases acadêmicas e produções científicas.',
    href: 'https://www.periodicos.capes.gov.br/',
    cta: 'Abrir CAPES',
  },
  {
    icon: FileText,
    title: 'BDTD',
    text: 'Biblioteca Digital Brasileira de Teses e Dissertações para pesquisas acadêmicas aprofundadas.',
    href: 'https://bdtd.ibict.br/vufind/Search/Results?lookfor=%22viol%C3%AAncia%20contra%20a%20mulher%22&type=AllFields',
    cta: 'Ver teses',
  },
  {
    icon: Database,
    title: 'Publicações do OVM/SC',
    text: 'Relatórios, estudos e publicações científicas sobre violência contra a mulher em Santa Catarina.',
    href: 'https://ovm.alesc.sc.gov.br/publicacoes/dissertacoes-teses-e-publicacoes-cientificas/',
    cta: 'Acessar OVM',
  },
  {
    icon: BookOpen,
    title: 'DataSenado e OMV',
    text: 'Pesquisas nacionais sobre percepção, atendimento, violência doméstica e políticas públicas.',
    href: 'https://www12.senado.leg.br/institucional/omv/pesquisanacional',
    cta: 'Ver pesquisas',
  },
]

const readingList = [
  {
    title: 'Violência contra a mulher baseada no gênero: revisão de escopo',
    source: 'Ciência & Saúde Coletiva, 2025',
    href: 'https://www.scielosp.org/article/csc/2025.v30n5/e02142025/',
  },
  {
    title: 'Violência contra a mulher e adoecimento mental',
    source: 'Physis - Revista de Saúde Coletiva',
    href: 'https://www.scielo.br/j/physis/a/7CRjQTCrkX7RXrC7XFT3jDs/?lang=pt',
  },
  {
    title: 'Guia prático de cuidado à mulher em situação de violência',
    source: 'Ministério da Saúde, 2025',
    href: 'https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/guias-e-manuais/2025/guia-pratico-de-cuidado-a-mulher-em-situacao-de-violencia.pdf',
  },
  {
    title: 'Relatórios e estudos sobre violência em Santa Catarina',
    source: 'Observatório da Violência Contra a Mulher - OVM/SC',
    href: 'https://ovm.alesc.sc.gov.br/publicacoes/relatorios-ovm-sc/',
  },
]

function QuickExitButton({ className = '' }) {
  function leavePage() {
    window.location.assign('https://www.google.com')
  }

  return (
    <button
      className={`quick-exit ${className}`}
      type="button"
      onClick={leavePage}
      title="Sair rápido"
      aria-label="Sair rápido para o Google"
    >
      <EyeOff size={18} aria-hidden="true" />
      Sair rapido
    </button>
  )
}

function IconCard({ item }) {
  const Icon = item.icon
  const isExternal = item.href?.startsWith('http')

  return (
    <article className={`info-card ${item.tone ? `tone-${item.tone}` : ''}`}>
      <div className="icon-badge">
        <Icon size={22} aria-hidden="true" />
      </div>
      <h3>{item.title}</h3>
      <p>{item.text || item.detail}</p>
      {item.cta && (
        <a
          className="card-link"
          href={item.href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noreferrer' : undefined}
        >
          {item.cta}
          {isExternal ? (
            <ExternalLink size={17} aria-hidden="true" />
          ) : (
            <ArrowRight size={17} aria-hidden="true" />
          )}
        </a>
      )}
    </article>
  )
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Voltar ao início">
          <span className="brand-mark">P</span>
          <span>Ponto de Apoio</span>
        </a>

        <nav className="main-nav" aria-label="Navegação principal">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="help-link" href="#ajuda">
            <ShieldAlert size={18} aria-hidden="true" />
            Preciso de ajuda
          </a>
          <QuickExitButton />
        </div>
      </header>

      <main>
        <section
          id="inicio"
          className="hero-section"
          style={{ '--hero-image': `url(${heroImage})` }}
        >
          <div className="hero-content">
            <span className="hero-kicker">
              Informação, acolhimento e orientação contra a violência doméstica
            </span>
            <h1>Violência contra a mulher não é conflito privado.</h1>
            <p>
              É violação de direitos humanos. Este espaço reúne sinais de
              alerta, caminhos de proteção e contatos oficiais para agir com
              segurança.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#ajuda">
                <ShieldAlert size={20} aria-hidden="true" />
                Preciso de ajuda
              </a>
              <a className="secondary-button" href="#tipos">
                Entender os sinais
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <aside className="hero-alert" aria-label="Atendimento imediato">
            <AlertTriangle size={23} aria-hidden="true" />
            <div>
              <strong>Em emergência, ligue 190.</strong>
              <span>Para orientação e denúncia, ligue 180.</span>
            </div>
          </aside>
        </section>

        <section id="ajuda" className="section urgent-section">
          <div className="section-inner">
            <SectionHeading
              eyebrow="Preciso de ajuda agora"
              title="Priorize sua segurança e acione canais oficiais"
              text="Se o agressor estiver por perto, use este conteúdo com cuidado e procure uma forma segura de pedir apoio."
            />

            <div className="emergency-grid">
              {emergencyCards.map((item) => (
                <IconCard key={item.title} item={item} />
              ))}
            </div>

            <div className="safety-strip">
              <div>
                <BadgeCheck size={22} aria-hidden="true" />
                <p>
                  Guarde documentos importantes, remédios, chaves e contatos de
                  confiança se for possível fazer isso sem aumentar o risco.
                </p>
              </div>
              <QuickExitButton className="strip-exit" />
            </div>
          </div>
        </section>

        <section id="entender" className="section split-section">
          <div className="section-inner split-grid">
            <div>
              <SectionHeading
                eyebrow="O que é violência doméstica"
                title="Nem toda violência deixa marcas visíveis"
                text="A Lei Maria da Penha protege mulheres em situações de violência baseadas em gênero no ambiente doméstico, familiar ou em relações íntimas de afeto."
              />
              <p className="large-text">
                Controle de dinheiro, isolamento, ameaças, humilhações,
                perseguição e coerção sexual também são sinais de violência. O
                ponto central é o uso de poder para limitar liberdade, segurança
                e dignidade.
              </p>
            </div>

            <div className="signal-list" aria-label="Sinais de alerta">
              <h3>Sinais de alerta</h3>
              <ul>
                <li>medo constante de contrariar alguém;</li>
                <li>celular, roupas, amizades ou dinheiro controlados;</li>
                <li>ameaças contra você, filhos, familiares ou animais;</li>
                <li>culpa e vergonha usadas para impedir denúncia;</li>
                <li>pedido de desculpas seguido por nova agressão.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="tipos" className="section">
          <div className="section-inner">
            <SectionHeading
              eyebrow="Tipos de violência"
              title="Cinco formas previstas na Lei Maria da Penha"
              text="Elas podem acontecer ao mesmo tempo e se agravar com o tempo. Reconhecer os sinais ajuda a buscar proteção mais cedo."
            />

            <div className="types-grid">
              {violenceTypes.map((item) => (
                <IconCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section id="ciclo" className="section cycle-section">
          <div className="section-inner">
            <SectionHeading
              eyebrow="Ciclo da violência"
              title="A repetição costuma confundir e prender a vítima"
              text="O ciclo não é uma regra fixa, mas ajuda a entender por que promessas de mudança podem vir seguidas de novas agressões."
            />

            <div className="cycle-track">
              {cycleSteps.map((step) => (
                <article className="cycle-step" key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="lei" className="section law-section">
          <div className="section-inner law-grid">
            <div>
              <SectionHeading
                eyebrow="Lei Maria da Penha"
                title="Proteção, responsabilização e atendimento humanizado"
                text="A Lei n. 11.340/2006 criou mecanismos para prevenir, punir e enfrentar a violência doméstica e familiar contra a mulher."
              />
              <a
                className="text-link"
                href="https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11340.htm"
                target="_blank"
                rel="noreferrer"
              >
                Ler a lei no Planalto
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="rights-list">
              {rights.map((right) => (
                <div className="right-item" key={right}>
                  <ClipboardCheck size={21} aria-hidden="true" />
                  <p>{right}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="rede" className="section">
          <div className="section-inner">
            <SectionHeading
              eyebrow="Rede de atendimento"
              title="Ninguém precisa resolver isso sozinha"
              text="A proteção pode envolver segurança pública, justiça, assistência social, saúde e organizações da sociedade civil."
            />

            <div className="network-grid">
              {network.map((item) => (
                <IconCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section id="dados-sc" className="section data-section">
          <div className="section-inner">
            <SectionHeading
              eyebrow="Dados de Santa Catarina"
              title="O problema é urgente e mensurável"
              text="Recorte extraído do OVM/SC nos materiais fornecidos para o projeto, com fontes indicadas pelo próprio Observatório."
            />

            <div className="stats-grid">
              {stats.map((stat) => (
                <article className="stat-card" key={stat.label}>
                  <Database size={22} aria-hidden="true" />
                  <strong>{stat.value}</strong>
                  <p>{stat.label}</p>
                  <span>{stat.source}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pesquisa" className="section research-section">
          <div className="section-inner">
            <SectionHeading
              eyebrow="Base de pesquisa"
              title="Caminhos para aprofundar o tema em sala de aula"
              text="Esta área reúne trilhas de estudo e ambientes confiáveis para localizar artigos, relatórios, teses, dissertações e materiais técnicos."
            />

            <div className="study-grid">
              {studyTopics.map((topic) => {
                const Icon = topic.icon

                return (
                  <a className="study-card" href={topic.href} key={topic.title}>
                    <Icon size={22} aria-hidden="true" />
                    <strong>{topic.title}</strong>
                    <p>{topic.text}</p>
                  </a>
                )
              })}
            </div>

            <div className="research-layout">
              <div>
                <h3>Onde pesquisar</h3>
                <div className="resource-grid">
                  {researchHubs.map((hub) => {
                    const Icon = hub.icon

                    return (
                      <a
                        className="resource-card"
                        href={hub.href}
                        target="_blank"
                        rel="noreferrer"
                        key={hub.title}
                      >
                        <span>
                          <Icon size={21} aria-hidden="true" />
                        </span>
                        <strong>{hub.title}</strong>
                        <p>{hub.text}</p>
                        <em>
                          {hub.cta}
                          <ExternalLink size={15} aria-hidden="true" />
                        </em>
                      </a>
                    )
                  })}
                </div>
              </div>

              <aside className="reading-panel">
                <h3>Leituras para começar</h3>
                <div className="reading-list">
                  {readingList.map((reading) => (
                    <a
                      href={reading.href}
                      target="_blank"
                      rel="noreferrer"
                      key={reading.title}
                    >
                      <strong>{reading.title}</strong>
                      <span>{reading.source}</span>
                      <ExternalLink size={15} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="contatos" className="section contacts-section">
          <div className="section-inner">
            <SectionHeading
              eyebrow="Contatos úteis"
              title="Canais para pedir ajuda ou encontrar orientação"
              text="Em risco imediato, priorize o 190. Para informação e denúncia, o 180 é o canal nacional especializado."
            />

            <div className="contact-list">
              {contacts.map((contact) => {
                const Icon = contact.icon

                return (
                  <article className="contact-row" key={contact.title}>
                    <div className="contact-icon">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <div>
                      <strong>{contact.title}</strong>
                      <span>{contact.label}</span>
                      <p>{contact.text}</p>
                    </div>
                    <a href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                      {contact.cta}
                      {contact.href.startsWith('http') ? (
                        <ExternalLink size={16} aria-hidden="true" />
                      ) : (
                        <ArrowRight size={16} aria-hidden="true" />
                      )}
                    </a>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="creditos" className="section credits-section">
          <div className="section-inner">
            <SectionHeading
              eyebrow="Créditos e bases"
              title="Conteúdo inspirado em instituições e materiais de referência"
              text="O projeto usa como base os PDFs fornecidos e páginas oficiais de instituições públicas e organizações de apoio."
            />

            <div className="source-grid">
              {sources.map((source) => (
                <a
                  className="source-chip"
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  key={source.title}
                >
                  <BookOpen size={18} aria-hidden="true" />
                  {source.title}
                  <ExternalLink size={15} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <Users size={20} aria-hidden="true" />
          <span>Ponto de Apoio</span>
        </div>
        <div className="footer-links">
          <a href={portfolioUrl}>
            Portfólio do autor
            <ExternalLink size={15} aria-hidden="true" />
          </a>
          <p>
            Informação educativa não substitui atendimento policial, jurídico,
            psicológico, médico ou socioassistencial especializado.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
