import CheckButton from '@common/components/atoms/buttons/check-button/check-button';
import styles from './template-card-header.module.css';

export default function TemplateCardHeader({ title, checked }: { title: string; checked: boolean; }) {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <CheckButton checked={checked} />
    </div>
  );
}
