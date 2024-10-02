import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import { useAppDispatch } from "./store/hooks";
import { fetchUsers } from "./store/slices/usersSlice";
import GlobalStyle from "./styles/GlobalStyles";

const StyledApp = styled.div`
  position: relative;
`;

const Container = styled.main`
  max-width: 120rem;
  margin: 0 auto 2rem;
  padding: 2rem;

  @media (max-width: 400px) {
    max-width: 34rem;
    padding: 0;
  }
`;

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <StyledApp>
      <GlobalStyle />
      <Toaster />
      <Header />
      <Container>
        <Main />
      </Container>
    </StyledApp>
  );
}
