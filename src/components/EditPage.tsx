import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../store/hooks";
import EditPageForm from "./EditPageForm";
import EditPageNav from "./EditPageNav";
import EditPageUser from "./EditPageUser";
import PageNotFound from "./PageNotFound";
import Modal from "./Modal";

const StyledEditPage = styled.div`
  display: grid;
  grid-template-columns: 36rem 1fr;
  column-gap: 4rem;
  row-gap: 2.4rem;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content min-content;
    row-gap: 3.2rem;
  }
`;

export default function EditPage() {
  const users = useAppSelector((state) => state.users.users);
  const { userId } = useParams();

  const user = users.find((user) => user.id === Number(userId));

  if (!user) {
    return <PageNotFound />;
  }

  return (
    <StyledEditPage>
      <EditPageNav />
      <EditPageUser user={user} />
      <EditPageForm user={user} />
      <Modal />
    </StyledEditPage>
  );
}
