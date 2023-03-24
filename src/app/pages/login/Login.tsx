import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonLogin } from "./components/ButtonLogin";
import { InputLogin } from "./components/InputLogin";

export const Login = () => {
  const inputPassowordRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const navigate = useNavigate();

  const handleEntrar = useCallback(() => {
    const user = {
      email: email,
      password: password,
    };
    console.log(user);
    if (user.email != null && user.password != null) {
      navigate("/dashboard");
      console.log("Login foi executado");
    } else {
      alert("Usuário ou senha inválidos");
    }
  }, [email, password]);

  return (
    <div>
      <form>
        <InputLogin
          type="email"
          label="Email"
          onChange={(newValue) => setEmail(newValue)}
          onPressEnter={() => inputPassowordRef.current?.focus()}
          value={email}
        />
        <br />
        <InputLogin
          type="password"
          label="Senha"
          onChange={(newValue) => setPassword(newValue)}
          value={password}
          ref={inputPassowordRef}
        />
        <br />
        <ButtonLogin type="button" onClick={handleEntrar}>
          Entrar
        </ButtonLogin>
      </form>
    </div>
  );
};
