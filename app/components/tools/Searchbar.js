import { Input } from "antd";
import styles from "../../styles/modules/Input.module.scss";

export default function Searchbar({ style, placeholder, value, onChange }) {
  return (
    <div className={styles[style]}>
      <img src="/icons/search.svg" id={styles.searchbar_icon} />
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
