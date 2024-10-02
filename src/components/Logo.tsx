import styled from "styled-components";
import LogoSvg from "./../assets/Logo.svg";
import { Link } from "react-router-dom";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const NameLeft = styled.span`
  font-size: 2.4rem;
`;
const NameRight = styled.span`
  font-size: 2.4rem;
  font-weight: 700;
`;
export default function Logo() {
  return (
    <Link to="/">
      <StyledLogo>
        <img src={LogoSvg} />
        <div>
          <NameLeft>at-</NameLeft>
          <NameRight>work</NameRight>
        </div>
      </StyledLogo>
    </Link>
  );
}
