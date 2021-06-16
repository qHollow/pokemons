import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.header`
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 50px;
  background-color: #ffcc01;
`

const Login = styled(Link)`
  padding: 10px 20px;
  color: #fff;
  background-color: #0071f0;
  border-radius: 8px;
  text-decoration: none;
  transition: .3s;
  outline: none;
  &:focus,
  &:hover {
    background-color: #0468d8;
    box-shadow: 0 0 0 2px #0468d8;
  }
`

const Row = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
`

const Header = () => {
  return (
    <Wrapper>
      <Link to="/">
        <img src="../img/logo.png" alt="Logo" width="40" height="40" />
      </Link>
      <Row>
        <Login to="/login">Sign in</Login>
        <Login to="/register">Sign up</Login>
      </Row>
    </Wrapper>
  )
};

export default Header;