"use client";
import { useState } from "react";
import AuthForm from "./_components/authForm";

export default function Home() {
  const [method, setMethod] = useState<"login" | "register">("login");
  const handleChangeMethod = () => {
    method === "register" ? setMethod("login") : setMethod("register");
  };
  return (
    <main className="flex flex-col justify-center items-center gap-3 min-h-screen">
      <h1 className="uppercase text-center">Maryam Chat App</h1>
      <AuthForm method={method} />
      <button onClick={handleChangeMethod}>
        {method === "register"
          ? "Log in with existing account"
          : "Don't have an account?"}
      </button>
    </main>
  );
}
