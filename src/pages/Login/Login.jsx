import "../../index.css";
import "firebase/auth";
import { Container, Title } from "./Login.style";

const Login = () => {
  return (
    <>
      <Container>
        <Title>로그인</Title>
        <div id="firebaseui-auth-container"></div>
        <div id="loader">Loading...</div>
      </Container>
    </>
  );
};

export default Login;
