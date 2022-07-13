import cn from 'classnames';
import styles from './space-divider.module.css';

/**
  * Sets a space between sections.
  * The gap of the space depends on the variant property.
  */
export default function SpaceDivider({ variant }: { variant?: "large" | "medium" | "small"; }) {
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