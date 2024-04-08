import { Input } from "antd";
import styles from "../../styles/modules/Input.module.scss";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

export default function TextInput({ style, placeholder, onChange }) {
  return (
    <div className={styles[style]}>
      <Input.Password
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
