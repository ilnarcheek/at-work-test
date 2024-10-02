import styled from "styled-components";
import Bell from "./../assets/Bell.svg";
import Heart from "./../assets/Heart.svg";
import Logo from "./Logo";
import avatar from "/avatar.jpg";

const StyledHeader = styled.header`
  padding: 1.6rem;
  background-color: var(--white-color);
`;

const Container = styled.div`
  max-width: 116rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
const Icons = styled.div`
  display: flex;
  gap: 0.4rem;

  @media (max-width: 400px) {
    display: none;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const Icon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 100rem;
`;

const Name = styled.span`
  font-weight: 500;
  color: var(--gray-dark-color);

  @media (max-width: 400px) {
    display: none;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Logo />
        <Profile>
          <Icons>
            <Icon src={Heart} alt="" />
            <Icon src={Bell} alt="" />
          </Icons>
          <User>
            <Avatar src={avatar} />
            <Name>Ivan1234</Name>
          </User>
        </Profile>
      </Container>
    </StyledHeader>
  );
}
