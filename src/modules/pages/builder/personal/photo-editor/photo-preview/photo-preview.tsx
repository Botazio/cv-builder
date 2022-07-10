import styles from './photo-preview.module.css';


export default function PhotoPreview({ photo }) {

  return (
    <div className={styles.container}>
      <div className={styles.container_photo}>
        <img
          className={styles.photo}
          src={photo.url}
          onLoad={() => { URL.revokeObjectURL(photo.url); }}
        />
      </div>
    </div>
  );
}
