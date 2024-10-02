import styled from "styled-components";
import { IUser } from "../types/IUser";
import Form from "./Form";

const RightSide = styled.div`
  padding: 4rem;
  border-radius: 1.6rem;
  background-color: var(--white-color);

  @media (max-width: 400px) {
    padding: 2.8rem;
  }
`;

interface EditPageFormProps {
  user: IUser;
}

export default function EditPageForm({ user }: EditPageFormProps) {
  return (
    <RightSide>
      <h2>Данные профиля</h2>
      <hr />
      <Form user={user} />
    </RightSide>
  );
}
