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
  Gavel,
  HandHeart,
  HeartPulse,
  Landmark,
  LifeBuoy,
  LockKeyhole,
  MapPinned,
  MessageCircle,
  PhoneCall,
  Scale,
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
  },
  {
    icon: Building2,
    title: 'Policia Civil e Delegacia da Mulher',
    detail: 'Registro de ocorrência, investigação e pedido de medidas protetivas.',
  },
  {
    icon: Gavel,
    title: 'Juizados e Tribunais de Justiça',
    detail: 'Análise e concessão de medidas protetivas de urgência.',
  },
  {
    icon: Scale,
    title: 'Defensoria Pública',
    detail: 'Orientação jurídica gratuita e apoio para requerer direitos.',
  },
  {
    icon: Stethoscope,
    title: 'SUS e rede de saúde',
    detail: 'Atendimento médico, psicológico e cuidados em casos de violência sexual.',
  },
  {
    icon: LifeBuoy,
    title: 'Serviços de acolhimento',
    detail: 'Apoio psicossocial, abrigamento temporário e encaminhamentos.',
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

  return (
    <article className={`info-card ${item.tone ? `tone-${item.tone}` : ''}`}>
      <div className="icon-badge">
        <Icon size={22} aria-hidden="true" />
      </div>
      <h3>{item.title}</h3>
      <p>{item.text || item.detail}</p>
      {item.cta && (
        <a className="card-link" href={item.href}>
          {item.cta}
          <ArrowRight size={17} aria-hidden="true" />
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
