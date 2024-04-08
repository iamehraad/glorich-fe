import "../styles/base.scss";
import "antd/dist/antd.css";
import { Fragment } from "react";
import NextNprogress from "nextjs-progressbar";
export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <NextNprogress
      options={{ easing: 'ease', speed: 500 }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}
