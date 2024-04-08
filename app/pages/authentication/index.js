import Authentication from "../../components/layouts/Authentication";
import styles from "../../styles/modules/Authentication.module.scss";
import TextInput from "../../components/tools/TextInput";
import CustomButton from "../../components/tools/Button";
import { useRouter } from "next/router";
import { useState } from "react";
import { Form } from "antd";

export default function index() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isDisable, setStatus] = useState(true);

  const setButtonStatus = (status) => {
    setStatus(status);
  };

  const userEmail = (email) => {
    setEmail(email);
    setButtonStatus(email.length ? false : true);
  };

  const authenticate = () => {
    router.push({
      pathname: "/authentication/sign-up",
      query: { email: email },
    });
  };

  return (
    <Authentication>
      <Form>
        <h2>Sign in / up</h2>
        <p className={("p2 ", styles.p2_auth)}>
          Enter your email address to continue
        </p>
        <Form.Item rules={[{ required: true }]}>
          <TextInput
            style="authentication"
            placeholder="Username@glorich.ch"
            onChange={userEmail}
          />
        </Form.Item>
        <Form.Item>
          <CustomButton
            style="authentication"
            htmlType={"submit"}
            onClick={authenticate}
            disabled={isDisable}
          >
            <span className={styles.button_p2}>Next</span>
          </CustomButton>
        </Form.Item>
      </Form>
    </Authentication>
  );
}
