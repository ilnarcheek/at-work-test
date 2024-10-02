import styled from "styled-components";
import Card from "./Card";
import { IUser } from "../types/IUser";
import { useState } from "react";

interface CardListProps {
  users: IUser[];
  isArchive?: boolean;
}

const StyledCardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);
  row-gap: 3.6rem;
  column-gap: 4rem;

  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 16.2rem);
    column-gap: 2rem;
  }
`;

export default function CardList({ users, isArchive = false }: CardListProps) {
  const [activeDropdownId, setActiveDropdownId] = useState<number | null>(null);

  return (
    <StyledCardList>
      {users.map((user) => (
        <li key={user.id}>
          <Card
            user={user}
            isArchive={isArchive}
            activeDropdownId={activeDropdownId}
            setActiveDropdownId={setActiveDropdownId}
          />
        </li>
      ))}
    </StyledCardList>
  );
}
