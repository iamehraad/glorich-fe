import Authentication from "../../../components/layouts/Authentication";
import styles from "../../../styles/modules/Authentication.module.scss";
import PasswordInput from "../../../components/tools/PasswordInput";
import CustomButton from "../../../components/tools/Button";
import { useRouter } from "next/router";
import { useState } from "react";
import { Form } from "antd";

export default function index() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [isDisable, setStatus] = useState(true);

  const setButtonStatus = (status) => {
    setStatus(status);
  };

  const userPassword = (password) => {
    setPassword(password);
    setButtonStatus(password.length ? false : true);
  };

  const login = () => {
    console.log(password);
  };

  return (
    <Authentication>
      <Form>
        <h2>Sign up</h2>
        <p className={("p2 ", styles.p2_auth)}>
          Enter your password to sign up
        </p>
        <Form.Item rules={[{ required: true }]}>
          <PasswordInput
            style="authentication_password"
            placeholder="Password"
            onChange={userPassword}
          />
        </Form.Item>
        <Form.Item>
          <CustomButton
            htmlType={"submit"}
            style="authentication"
            onClick={login}
            disabled={isDisable}
          >
            <span className={styles.button_p2}>Sign up</span>
          </CustomButton>
        </Form.Item>
      </Form>
    </Authentication>
  );
}
