import styles from './HowToUse.module.css';

const methods = [
  {
    id: '01',
    title: 'Inalação',
    subtitle: 'Via Olfativa',
    description:
      'A forma mais segura e direta. O aroma atua no sistema límbico, influenciando emoções e estados mentais em segundos.',
    uses: ['Difusores de ambiente', 'Inalação direta', 'Vaporização'],
    benefits: ['Equilíbrio emocional', 'Redução de estresse', 'Foco', 'Apoio respiratório'],
    icon: '◎',
  },
  {
    id: '02',
    title: 'Tópico',
    subtitle: 'Aplicação na Pele',
    description:
      'Aplicado com diluição adequada, age localmente e é absorvido pela corrente sanguínea para efeitos sistêmicos.',
    uses: ['Massagens', 'Aplicação localizada', 'Compressas'],
    benefits: ['Relaxamento muscular', 'Alívio de tensões', 'Circulação', 'Pele'],
    icon: '◐',
  },
  {
    id: '03',
    title: 'Banho',
    subtitle: 'Imersão Terapêutica',
    description:
      'A combinação de calor, vapor e aroma potencializa os efeitos terapêuticos de forma profunda e envolvente.',
    uses: ['Banhos de imersão', 'Escalda-pés', 'Banhos energéticos'],
    benefits: ['Relaxamento profundo', 'Revitalização', 'Equilíbrio emocional'],
    icon: '◑',
  },
  {
    id: '04',
    title: 'Ambiente',
    subtitle: 'Aromatização',
    description:
      'Transforma a atmosfera de um espaço, influenciando o estado emocional de todos os presentes.',
    uses: ['Residências', 'Trabalho', 'Espaços terapêuticos'],
    benefits: ['Atmosfera personalizada', 'Foco', 'Bem-estar coletivo'],
    icon: '◒',
  },
  {
    id: '05',
    title: 'Cosmética',
    subtitle: 'Cuidados Pessoais',
    description:
      'Incorporados em formulações naturais, elevam a experiência sensorial e potencializam o cuidado com pele e cabelo.',
    uses: ['Cremes', 'Óleos corporais', 'Sabonetes', 'Capilares'],
    benefits: ['Hidratação', 'Ação purificante', 'Experiência sensorial'],
    icon: '◓',
  },
];

// Alertas de segurança
const safetyRules = [
  'Nunca utilize sem orientação profissional',
  'Evite contato com olhos e mucosas',
  'Mantenha fora do alcance de crianças',
  'Armazene longe de luz e calor',
  'Informe condições como gestação ou uso de medicamentos',
];

function HowToUse() {
  return (
    <div className={styles.page}>
      {/* Hero da página */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroLabel}>GUIA DE USO</span>
          <h1 className={styles.heroTitle}>
            A arte de usar
            <br />
            <em>com intenção.</em>
          </h1>
          <p className={styles.heroSub}>
            Óleos essenciais são substâncias concentradas com ação física e emocional. Conheça as
            formas de uso — e use sempre com orientação profissional.
          </p>
        </div>

        {/* Divisor decorativo */}
        <div className={styles.heroDivider} />
      </section>

      {/* Grade de métodos */}
      <section className={styles.methods}>
        <div className={styles.container}>
          {methods.map((method) => (
            <article key={method.id} className={styles.card}>
              {/* Número e ícone */}
              <div className={styles.cardHeader}>
                <span className={styles.cardNumber}>{method.id}</span>
                <span className={styles.cardIcon}>{method.icon}</span>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardTitles}>
                  <h2 className={styles.cardTitle}>{method.title}</h2>
                  <span className={styles.cardSubtitle}>{method.subtitle}</span>
                </div>

                <p className={styles.cardDescription}>{method.description}</p>

                <div className={styles.cardColumns}>
                  {/* Formas de uso */}
                  <div>
                    <span className={styles.columnLabel}>COMO USAR</span>
                    <ul className={styles.list}>
                      {method.uses.map((use) => (
                        <li key={use} className={styles.listItem}>
                          <span className={styles.listDot}>—</span> {use}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefícios */}
                  <div>
                    <span className={styles.columnLabel}>BENEFÍCIOS</span>
                    <ul className={styles.list}>
                      {method.benefits.map((benefit) => (
                        <li key={benefit} className={styles.listItem}>
                          <span className={styles.listDot}>—</span> {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bloco de segurança */}
      <section className={styles.safety}>
        <div className={styles.safetyInner}>
          <div className={styles.safetyLeft}>
            <span className={styles.safetyLabel}>SEGURANÇA</span>
            <h2 className={styles.safetyTitle}>
              Cuidados
              <br />
              essenciais.
            </h2>
          </div>
          <ul className={styles.safetyList}>
            {safetyRules.map((rule, index) => (
              <li key={index} className={styles.safetyItem}>
                <span className={styles.safetyNumber}>{String(index + 1).padStart(2, '0')}</span>
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bloco de encerramento */}
      <section className={styles.closing}>
        <div className={styles.closingInner}>
          <p className={styles.closingText}>
            A aromaterapia não é padronizada — cada pessoa responde de forma única.
          </p>
          <p className={styles.closingHighlight}>Sempre consulte um profissional qualificado.</p>
        </div>
      </section>
    </div>
  );
}

export default HowToUse;
