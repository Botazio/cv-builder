import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { useDropzone } from 'react-dropzone';
import styles from './photo-selector.module.css';


export default function PhotoSelector({ setPhoto }: { setPhoto: Function; }) {
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    multiple: false,
    accept: {
      'image/*': []
    },
    onDrop: (acceptedFiles) => {
      const photo = acceptedFiles[0];

      setPhoto(Object.assign(photo, {
        url: URL.createObjectURL(photo)
      }));
    }
  });


  return (
    <div className={styles.container} {...getRootProps()}>
      <input name="profile-picture" type="file" {...getInputProps()} />
      <CameraAltOutlinedIcon sx={{ fontSize: 75 }} />
      <p>
        <b>Click</b> or <b>drag your photo</b> here to upload it.<br />
        (Extensions: JPG, JPEG, PNG)
      </p>
    </div>
  );
}
