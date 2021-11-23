import BuilderHeaderContainer from '../builder-header-container/builder-header-container';
import LineDivider from '../line-divider/line-divider';
import styles from './download-header.module.css';

/**
  * Header for the builder form
  */
export default function DownloadHeader({ title }: { title: String; }) {
  return (
    <BuilderHeaderContainer position="center">
      <h1 className={styles.title}>{title}</h1>
    </BuilderHeaderContainer>
  );
}