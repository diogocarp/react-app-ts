import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  const handleEntrar =  () => {
    
    const user = {
      email: email,
      password: password
    }
    console.log(user)


  }

  useEffect(() => {

    const user = {
      email: email,
      password: password
    }
    console.log(user)

  },[email, password])
  
  return (
    <div>
      <form>
        <label>
          <span>Email</span>
          <input value={email} onChange={e => setEmail(e.target.value)} />
        </label><br/>
        <label>
          <span>Senha</span>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <br/>
        <button type="button" onClick={handleEntrar}>Entrar</button>
      </form>
    </div>
  );
};
