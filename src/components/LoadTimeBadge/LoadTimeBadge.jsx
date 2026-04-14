import { useLoadTime } from '../../hooks/useLoadTime.js';
import styles from './LoadTimeBadge.module.css';

function LoadTimeBadge() {
  const loadTime = useLoadTime();

  // Classifica a performance por faixa de tempo
  function getStatus(ms) {
    if (ms < 1000) return { label: 'Rápido', color: 'green' };
    if (ms < 3000) return { label: 'Bom', color: 'yellow' };
    return { label: 'Lento', color: 'red' };
  }

  if (loadTime === null) return null;

  const status = getStatus(loadTime);

  return (
    <div className={`${styles.badge} ${styles[status.color]}`}>
      <span className={styles.dot} />
      <span className={styles.time}>
        {loadTime < 1000 ? `${loadTime}ms` : `${(loadTime / 1000).toFixed(2)}s`}
      </span>
      <span className={styles.label}>{status.label}</span>
    </div>
  );
}

export default LoadTimeBadge;
