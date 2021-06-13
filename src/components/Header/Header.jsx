import styled from 'styled-components';

const Wrapper = styled.header`
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 50px;
  background-color: #385caa;
`

const Login = styled.button`
  display: block;
  width: 100px;
  height: 40px;
  background-color: #ffcc01;
  color: #385caa;
  font-size: 18px;
  font-weight: bold;
  border: 2px solid yellow;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 3px 4px #04bcf4;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 3px 4px #04bcf4;
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
      <img src="../img/logo.png" alt="Logo" width="40" height="40" />
      <Row>
        <Login>Login</Login>
        <Login>Register</Login>
      </Row>
    </Wrapper>
  )
};

export default Header;