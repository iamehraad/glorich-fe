import React from "react";
import styles from "../../styles/modules/Button.module.scss";
import { Button } from 'antd';

const CustomButton = ({ style, children, disabled, loading , onClick, htmlType, type }) => {
  return (
    <Button disabled={disabled} loading={loading} className={styles[style]} htmlType={htmlType} onClick={onClick} type={type}>
      {children}
    </Button>
  );
};

export default CustomButton;
