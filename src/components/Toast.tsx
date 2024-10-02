import toast from "react-hot-toast";
import styled from "styled-components";
import Cross from "./../assets/Cross.svg";
import Done from "./../assets/Done.svg";

interface ToastProps {
  t: string;
}

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

const StyledToast = styled.span`
  padding: 4rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  align-items: center;
  top: 50%;
`;

const ToastButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 1.5rem;
  right: 0.5rem;
`;

const Image = styled.img`
  width: 6rem;
  height: 6rem;
`;

const Message = styled.p`
  font-size: var(--fs-hl);
  color: var(--gray-dark-color);
`;

export default function Toast({ t }: ToastProps) {
  return (
    <Overlay>
      <StyledToast>
        <Image src={Done} />
        <Message>Изменения сохранены!</Message>
        <ToastButton onClick={() => toast.dismiss(t)}>
          <img src={Cross} />
        </ToastButton>
      </StyledToast>
    </Overlay>
  );
}
