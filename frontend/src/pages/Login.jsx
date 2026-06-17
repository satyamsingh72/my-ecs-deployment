import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const login = () => {
    navigate("/products");
  };

  return (
    <div>
      <h1>MilkNest Login</h1>

      <input placeholder="Email" />

      <br />
      <br />

      <input placeholder="Password" type="password" />

      <br />
      <br />

      <button onClick={login}>
        Login
      </button>
    </div>
  );
}

export default Login;