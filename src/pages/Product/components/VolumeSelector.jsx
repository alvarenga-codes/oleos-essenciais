// src/pages/Product/components/VolumeSelector.jsx
import styles from './VolumeSelector.module.css';

function VolumeSelector({ volumes, selected, onChange }) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>VOLUME</span>
      <div className={styles.options}>
        {volumes.map((volume) => (
          <button
            key={volume}
            className={`${styles.option} ${selected === volume ? styles.active : ''}`}
            onClick={() => onChange(volume)}
          >
            {volume}
          </button>
        ))}
      </div>
    </div>
  );
}

export default VolumeSelector;
