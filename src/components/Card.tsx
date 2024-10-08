import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { closeDropdown, openDropdown } from "../store/slices/dropdownSlice";
import { IUser } from "../types/IUser";
import Dropdown from "./Dropdown";
import DropdownButton from "./DropdownButton";

const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 2rem;
  padding: 2.4rem;
  border-radius: 1.6rem;
  background-color: var(--white-color);
  max-width: 36rem;
  min-width: 16.2rem;
  position: relative;

  @media (max-width: 400px) {
    flex-direction: column;
    gap: 1.6rem;
  }
`;

const Avatar = styled.div`
  height: 12rem;
  width: 11.2rem;
  flex-shrink: 0;
`;

const Image = styled.img<{ isArchive: boolean }>`
  border-radius: 0.8rem;
  height: 100%;
  width: 100%;
  min-width: 100%;
  object-fit: cover;

  ${({ isArchive }) =>
    isArchive &&
    `
    filter: grayscale(100%);
  `}
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 400px) {
    margin-bottom: 0.4rem;
  }
`;

const Name = styled.p<{ isArchive: boolean }>`
  font-size: var(--fs-hl);
  font-weight: 600;
  color: var(--accent-color);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ isArchive }) =>
    isArchive &&
    `
    filter: grayscale(100%);
  `}
`;

const CompanyName = styled.p<{ isArchive: boolean }>`
  font-size: 1.6rem;
  color: var(--gray-dark-color);

  ${({ isArchive }) =>
    isArchive &&
    `
    filter: grayscale(100%);
  `}

  @media (max-width: 400px) {
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const City = styled.p<{ isArchive: boolean }>`
  margin-top: auto;
  font-size: var(--fs-cap);
  color: var(--gray-color);

  ${({ isArchive }) =>
    isArchive &&
    `
  filter: grayscale(100%);
  `}

  @media (max-width: 400px) {
    margin-top: 1.2rem;
  }
`;

interface CardProps {
  user: IUser;
  isArchive?: boolean;
}

export default function Card({ user, isArchive = false }: CardProps) {
  const { activeDropdownId } = useAppSelector((state) => state.dropdown);
  const dispatch = useAppDispatch();
  const isDropdownOpen = activeDropdownId === user.id;

  const toggleDropdown = () => {
    if (isDropdownOpen) {
      dispatch(closeDropdown());
    } else {
      dispatch(openDropdown(user.id));
    }
  };

  return (
    <StyledCard>
      <Avatar>
        <Image src={user.avatar} isArchive={isArchive} />
      </Avatar>
      <UserInfo>
        <CardHeader>
          <Name isArchive={isArchive}>{user.username}</Name>
          <DropdownButton onClick={toggleDropdown}>
            <Dropdown
              isOpen={isDropdownOpen}
              user={user}
              isArchive={isArchive}
              data-dropdown={user.id}
            />
          </DropdownButton>
        </CardHeader>
        <CompanyName isArchive={isArchive}>{user.company.name}</CompanyName>
        <City isArchive={isArchive}>{user.address.city}</City>
      </UserInfo>
    </StyledCard>
  );
}
