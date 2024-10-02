import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch } from "../store/hooks";
import { IUser } from "../types/IUser";
import { archiveUser, hideUser, restoreUser } from "../store/slices/usersSlice";

const StyledDropdown = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  width: 20rem;
  padding: 0.8rem;
  border-radius: 1.2rem;
  background-color: var(--white-color);
  box-shadow: 0 0.5rem 3rem #00000029;
  z-index: 2;

  position: absolute;
  top: 6rem;
  right: 0;

  @media (max-width: 400px) {
    width: 16rem;
    top: 19rem;
  }
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const MenuItem = styled.li`
  padding: 0.8rem 1.2rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: var(--accent-color);
  }
`;

interface DropdownProps {
  isOpen: boolean;
  user: IUser;
  isArchive: boolean;
}

export default function Dropdown({ isOpen, user, isArchive }: DropdownProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleEditClick = () => {
    navigate(`edit/${user.id}`);
  };

  const handleArchiveClick = () => {
    dispatch(archiveUser(user));
  };

  const handleHideClick = () => {
    dispatch(hideUser(user.id));
  };

  const handleRestoreClick = () => {
    dispatch(restoreUser(user));
  };

  return (
    <StyledDropdown isOpen={isOpen}>
      <MenuList>
        {isArchive ? (
          <MenuItem onClick={handleRestoreClick}>Активировать</MenuItem>
        ) : (
          <>
            <MenuItem onClick={handleEditClick}>Редактировать</MenuItem>
            <MenuItem onClick={handleArchiveClick}>Архивировать</MenuItem>
            <MenuItem onClick={handleHideClick}>Скрыть</MenuItem>
          </>
        )}
      </MenuList>
    </StyledDropdown>
  );
}
