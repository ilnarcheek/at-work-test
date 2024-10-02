import styled from "styled-components";
import { useAppSelector } from "../store/hooks";
import CardList from "./CardList";
import Spinner from "./Spinner";

const Container = styled.div`
  margin-top: 4rem;
`;

export default function Home() {
  const { users, loading, archivedUsers } = useAppSelector(
    (state) => state.users
  );

  if (loading) return <Spinner />;

  return (
    <>
      <Container>
        <h2>Активные</h2>
        <hr />
        <CardList users={users} />
      </Container>
      {archivedUsers.length > 0 && (
        <Container>
          <h2>Архив</h2>
          <hr />
          <CardList users={archivedUsers} isArchive={true} />
        </Container>
      )}
    </>
  );
}
