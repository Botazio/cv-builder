import BuilderHeaderContainer from '../builder-header-container/builder-header-container';
import LineDivider from '../line-divider/line-divider';
import styles from './form-header.module.css';

/**
  * Header for the builder form
  */
export default function FormHeader({ title }: { title: String; }) {
  return (
    <BuilderHeaderContainer>
      <h2 className={styles.title}>{title}</h2>
      <LineDivider />
    </BuilderHeaderContainer>
  );
}