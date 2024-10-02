import { PropagateLoader } from "react-spinners";
import styled from "styled-components";

const SpinnerContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export default function Spinner() {
  return (
    <SpinnerContainer>
      <PropagateLoader color="var(--accent-color)" size={20} />;
    </SpinnerContainer>
  );
}
