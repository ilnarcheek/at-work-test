import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledPageNotFound = styled.div`
  text-align: center;
  margin-top: 10rem;
`;

const Button = styled(Link)`
  color: var(--white-color);
  padding: 1.2rem 4.2rem;
  background-color: var(--dark-color);
  border-radius: 100rem;
  margin-top: 3rem;

  &:hover {
    color: var(--gray-dark-color);
    background-color: var(--white-color);
    transition: all 0.3s ease;
  }
`;

export default function PageNotFound() {
  return (
    <StyledPageNotFound>
      <h2>Такой страницы не существует</h2>
      <Button to="/">Вернуться на главную</Button>
    </StyledPageNotFound>
  );
}
