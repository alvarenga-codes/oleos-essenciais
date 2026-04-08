import styles from './BenefitIcons.module.css';
import RelaxamentoIcon from '../../../assets/icons/relaxamento.svg?react';
import SuporteIcon from '../../../assets/icons/suporte-noturno.svg?react';
import AromaterapiaIcon from '../../../assets/icons/aromaterapia.svg?react';
import ClarezaIcon from '../../../assets/icons/clareza.svg?react';
import RespiracaoIcon from '../../../assets/icons/respiracao.svg?react';
import FocoIcon from '../../../assets/icons/foco.svg?react';
import EmocionalIcon from '../../../assets/icons/emocional.svg?react';
import PeleIcon from '../../../assets/icons/pele.svg?react';
import MeditacaoIcon from '../../../assets/icons/meditacao.svg?react';
import AncoragemIcon from '../../../assets/icons/ancoragem.svg?react';
import RitualIcon from '../../../assets/icons/ritual.svg?react';
import EnergiaIcon from '../../../assets/icons/energia.svg?react';
import ResfriamentoIcon from '../../../assets/icons/resfriamento.svg?react';
import HumorIcon from '../../../assets/icons/humor.svg?react';
import LevezaIcon from '../../../assets/icons/leveza.svg?react';

const icons = {
  Relaxamento: <RelaxamentoIcon width={28} height={28} />,
  'Suporte Noturno': <SuporteIcon width={28} height={28} />,
  Aromaterapia: <AromaterapiaIcon width={28} height={28} />,
  'Clareza Mental': <ClarezaIcon width={28} height={28} />,
  Respiração: <RespiracaoIcon width={28} height={28} />,
  Foco: <FocoIcon width={28} height={28} />,
  'Equilíbrio Emocional': <EmocionalIcon width={28} height={28} />,
  Pele: <PeleIcon width={28} height={28} />,
  Meditação: <MeditacaoIcon width={28} height={28} />,
  Ancoragem: <AncoragemIcon width={28} height={28} />,
  Ritual: <RitualIcon width={28} height={28} />,
  Energia: <EnergiaIcon width={28} height={28} />,
  Resfriamento: <ResfriamentoIcon width={28} height={28} />,
  Humor: <HumorIcon width={28} height={28} />,
  Leveza: <LevezaIcon width={28} height={28} />,
  // Fallback para benefícios sem ícone mapeado
  default: (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4M12 16h.01" />
    </svg>
  ),
};

function BenefitIcons({ benefits }) {
  return (
    <div className={styles.wrapper}>
      {benefits.map((benefit) => (
        <div key={benefit} className={styles.item}>
          <span className={styles.icon}>{icons[benefit] ?? icons['default']}</span>
          <span className={styles.label}>{benefit.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
}

export default BenefitIcons;
