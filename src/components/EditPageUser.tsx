import styled from "styled-components";
import Categories from "./Categories";
import { IUser } from "../types/IUser";

const Container = styled.div`
  padding: 4rem;
  border-radius: 1.6rem;
  background-color: var(--white-color);
  display: grid;
  grid-template-rows: 1fr min-content;
  row-gap: 4rem;

  @media (max-width: 400px) {
    padding: 2.8rem;
  }
`;

const Avatar = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 0.8rem;

  @media (max-width: 400px) {
    height: 18.7rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

interface EditPageUserProps {
  user: IUser;
}

export default function EditPageUser({ user }: EditPageUserProps) {
  return (
    <Container>
      <Avatar>
        <Image src={user.avatar} alt={user.name} />
      </Avatar>
      <Categories />
    </Container>
  );
}
