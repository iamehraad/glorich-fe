import App from "./_app";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  const isUserAuthenticated = () => {
    const token = Cookies.get("jwt");
    return token ? router.push("/profile") : router.push("/home");
  };

  useEffect(() => {
    isUserAuthenticated();
  });
  return <p>Home</p>;
}
