import { Link } from "react-router-dom";
import Back from "./../assets/Back.svg";
import styled from "styled-components";

const StyledLink = styled(Link)`
  grid-column: 1 / -1;
  padding: 2rem 0;
  font-size: var(--fs-hl);
  color: var(--gray-dark-color);
  display: flex;
  align-items: center;
`;

export default function EditPageNav() {
  return (
    <StyledLink to="/">
      <img src={Back} /> <span>Назад</span>
    </StyledLink>
  );
}
