import { Input } from "antd";
import styles from "../../styles/modules/Input.module.scss";

export default function TextInput({ style, placeholder, value, onChange }) {
  return (
    <div className={styles[style]}>
      <Input placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)} />
    </div>
  );
}
