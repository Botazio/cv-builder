import styles from './space-divider.module.css';
import cn from 'classnames';

/**
  * This component sets a space between sections.
  * The gap of the space is set in the global styles css file.
  */
export default function SpaceDivider({ variant }: { variant?: string; }) {
  return (
    <div className={cn({
      [styles.container]: true,
      [styles.medium]: !variant || variant === "medium",
      [styles.small]: variant === "small",
      [styles.large]: variant === "large"
    })}>
    </div>
  );
}