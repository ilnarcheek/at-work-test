import styled from "styled-components";
import Done from "./../assets/Done.svg";
import Cross from "./../assets/Cross.svg";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { closeModal } from "../store/slices/modalSlice";
import { useEffect } from "react";

const Overlay = styled.div<{ isOpen: boolean }>`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;

  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
`;

const StyledModal = styled.div`
  padding: 4rem;
  background-color: var(--white-color);
  border-radius: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  position: relative;

  @media (max-width: 400px) {
    padding: 3.2rem;
  }
`;

const Image = styled.img`
  width: 6rem;
  height: 6rem;
`;

const Message = styled.p`
  font-size: var(--fs-hl);
  color: var(--gray-dark-color);
`;

const Button = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 1.8rem;
  right: 1.8rem;
`;

const Icon = styled.img`
  width: 2.8rem;
  height: 2.8rem;
`;

export default function Modal() {
  const { isOpen } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        dispatch(closeModal());
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, dispatch]);

  return (
    <Overlay isOpen={isOpen} onClick={handleOverlayClick}>
      <StyledModal>
        <Image src={Done} />
        <Message>Изменения сохранены!</Message>
        <Button onClick={handleCloseModal}>
          <Icon src={Cross} />
        </Button>
      </StyledModal>
    </Overlay>
  );
}
