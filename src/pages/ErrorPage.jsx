import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 80vh;
  justify-content: center;
  align-items: center;
`

const ErrorPage = () => {
  return (
    <Wrapper>
      <h1>Что-то пошло не так :(</h1>
    </Wrapper>
  );
};

export default ErrorPage;