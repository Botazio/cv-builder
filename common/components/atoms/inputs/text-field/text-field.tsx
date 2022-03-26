import styles from './text-field.module.css';


interface TextFieldInterface {
  name: string;
  value: string;
  required?: boolean;
  handleChange?: any;
}

export default function TextField({ name, value, required, handleChange }: TextFieldInterface) {

  return (
    <div>
      <input
        className={styles.input}
        required={required ? required : false}
        onChange={handleChange}
        value={value}
        type="text"
        name={name}
      />
    </div>

  );
}
