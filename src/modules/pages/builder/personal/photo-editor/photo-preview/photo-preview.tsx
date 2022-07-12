import styles from './photo-preview.module.css';


export default function PhotoPreview({ photo }) {

  return (
    <div className={styles.container}>
      <div className={styles.container_photo}>
        <img
          className={styles.photo}
          alt="Profile"
          src={photo.url}
        />
      </div>
    </div>
  );
}
