// src/pages/auth/SignUp.tsx

import { useState } from "react";
import { useSignUp } from "@clerk/clerk-react";

export default function SignUp() {
  const { SignUp, setActive } = useSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = await SignUp.create({ emailAddress: email, password });
    if (result.status === "complete") {
      await SetActive({ session: result.createdSessionId });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
      <button type="submit">Sign Up</button>
    </form>
  );
}