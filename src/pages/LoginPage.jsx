import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  /* width: 100vw; */
  justify-content: center;
  align-items: center;
  height: 90vh;
  flex-direction: column;
`

const Form = styled.form`
  width: 300px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 16px #ccc;
  letter-spacing: 1px;
`

const TitleForm = styled.h1`
  text-align: center;
  margin: 0 0 32px 0;
  font-weight: normal;
`

const InputLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  color: #9e9e9e;
  transition: .3s;
`

const FormInput = styled.input`
  width: 100%;
  padding: 0 0 10px 0;
  border: none;
  border-bottom: 1px solid #c0c0c0;
  background-color: transparent;
  transition: .3s;
  outline: none;
  letter-spacing: 1px;
  font-size: 16px;

  &:focus{
    border-bottom: 1px solid #1a73a8;
  }

  &:focus ~ ${InputLabel},
  &:not(:placeholder-shown) ~ ${InputLabel}{
    top: -18px;
    font-size: 12px;
    color: #c0c0c0;
  }
`

const FormGroup = styled.div`
  position: relative;
  margin-bottom: 32px;
`

const SubmitButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #0071f0;
  outline: none;
  cursor: pointer;
  transition: .3s;

  &:focus,
  &:hover {
    opacity: .7;
  }
`

const LoginPage = () => {
  return (
    <Wrapper>
      <Form action="" method="post">
        <TitleForm>Sing in</TitleForm>
        <FormGroup>
          <FormInput type="text" placeholder=" " name="email" id="email"/>
          <InputLabel for="email">Email</InputLabel>
        </FormGroup>
        <FormGroup>
          <FormInput type="password" placeholder=" " name="password" id="password"/>
          <InputLabel for="password">Password</InputLabel>
        </FormGroup>
        <SubmitButton>Log in</SubmitButton>
      </Form>
    </Wrapper>
  );
};

export default LoginPage;