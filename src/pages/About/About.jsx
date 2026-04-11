import styles from './About.module.css';

const pillars = [
  {
    id: '01',
    title: 'Pureza',
    description:
      'Sem sintéticos, sem atalhos. Cada óleo carrega apenas o que a planta tem a oferecer — nada mais, nada menos.',
  },
  {
    id: '02',
    title: 'Precisão',
    description:
      'Extração técnica com origem rastreável. Sabemos de qual fazenda, de qual estação, de qual método veio cada gota.',
  },
  {
    id: '03',
    title: 'Intenção',
    description:
      'Cada óleo é escolhido com propósito. Não vendemos produtos — oferecemos ferramentas para quem busca equilíbrio.',
  },
];

const process = [
  {
    step: '01',
    title: 'Cultivo',
    description:
      'Plantas cultivadas em seus habitats naturais, respeitando ciclos sazonais e solo vivo.',
  },
  {
    step: '02',
    title: 'Colheita',
    description: 'Colhidas no momento de maior concentração aromática — muitas vezes ao amanhecer.',
  },
  {
    step: '03',
    title: 'Extração',
    description:
      'Destilação a vapor, prensagem a frio ou extração por solvente, conforme a planta exige.',
  },
  {
    step: '04',
    title: 'Qualidade',
    description: 'Análise cromatográfica e avaliação sensorial antes de cada lote ser aprovado.',
  },
];

const commitments = [
  { icon: '◎', label: 'Embalagens recicláveis e vidro âmbar reutilizável' },
  { icon: '◐', label: 'Entrega neutra em carbono em todas as remessas' },
  { icon: '◑', label: 'Fornecedores auditados por práticas éticas e sustentáveis' },
  { icon: '◒', label: 'Sem testes em animais, em nenhuma etapa' },
];

function About() {
  return (
    <div className={styles.page}>
      {/* ── Manifesto ── */}
      <section className={styles.manifesto}>
        <div className={styles.manifestoInner}>
          <span className={styles.label}>SOBRE NÓS</span>
          <h1 className={styles.manifestoTitle}>
            Óleos
            <br />
            <em>Essenciais.</em>
          </h1>
          <p className={styles.manifestoText}>
            Nascemos da crença de que a natureza guarda o que a ciência ainda tenta nomear. A
            Essenciais existe para aproximar pessoas das plantas — com rigor técnico, respeito aos
            ciclos naturais e profundo senso de propósito.
          </p>
          <p className={styles.manifestoText}>
            Não somos uma loja de aromas. Somos uma coleção de destilações terapêuticas, elaboradas
            com precisão clínica e intenção botânica. Cada frasco é o resultado de décadas de
            conhecimento ancestral encontrando a ciência contemporânea.
          </p>
        </div>

        {/* Divisor */}
        <div className={styles.divider} />
      </section>

      {/* ── Pilares ── */}
      <section className={styles.pillars}>
        <div className={styles.container}>
          <span className={styles.label}>FILOSOFIA</span>
          <h2 className={styles.sectionTitle}>
            Três princípios.
            <br />
            Um compromisso.
          </h2>

          <div className={styles.pillarsGrid}>
            {pillars.map((pillar) => (
              <article key={pillar.id} className={styles.pillarCard}>
                <span className={styles.pillarNumber}>{pillar.id}</span>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarDescription}>{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Processo ── */}
      <section className={styles.process}>
        <div className={styles.container}>
          <span className={styles.labelLight}>O PROCESSO</span>
          <h2 className={styles.sectionTitleLight}>Da planta ao frasco.</h2>

          <div className={styles.processSteps}>
            {process.map((item, index) => (
              <div key={item.step} className={styles.processStep}>
                {/* Linha conectora — não aparece no último item */}
                <div className={styles.stepConnector}>
                  <span className={styles.stepDot} />
                  {index < process.length - 1 && <span className={styles.stepLine} />}
                </div>

                <div className={styles.stepContent}>
                  <span className={styles.stepNumber}>{item.step}</span>
                  <h3 className={styles.stepTitle}>{item.title}</h3>
                  <p className={styles.stepDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sustentabilidade ── */}
      <section className={styles.sustainability}>
        <div className={styles.container}>
          <div className={styles.sustainabilityGrid}>
            <div className={styles.sustainabilityLeft}>
              <span className={styles.label}>COMPROMISSO</span>
              <h2 className={styles.sectionTitle}>
                Crescido com
                <br />
                <em>intenção.</em>
              </h2>
              <p className={styles.sustainabilityText}>
                Cada decisão que tomamos considera o impacto além do frasco. Do campo à entrega,
                responsabilidade não é diferencial — é requisito.
              </p>
            </div>

            <ul className={styles.commitmentList}>
              {commitments.map((item) => (
                <li key={item.label} className={styles.commitmentItem}>
                  <span className={styles.commitmentIcon}>{item.icon}</span>
                  <span className={styles.commitmentLabel}>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Encerramento ── */}
      <section className={styles.closing}>
        <div className={styles.closingInner}>
          <p className={styles.closingQuote}>
            "Explore com curiosidade.
            <br />
            <em>Use com consciência.</em>"
          </p>
          <span className={styles.closingSignature}>Essenciais</span>
        </div>
      </section>
    </div>
  );
}

export default About;
