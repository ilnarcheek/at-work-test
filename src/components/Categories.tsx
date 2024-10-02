import styled from "styled-components";

const CategoriesList = styled.ul`
  display: flex;
  flex-direction: column;
  color: var(--gray-color);
`;

const Category = styled.li<{ isActive?: boolean }>`
  padding-bottom: 1.2rem;
  padding-top: 2.4rem;
  border-bottom: 1px solid var(--gray-light-color);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:first-child {
    padding-top: 0;
  }

  &:hover {
    color: var(--accent-color);
  }

  &:active {
    color: var(--dark-color);
  }

  ${({ isActive }) =>
    isActive &&
    `
    color: var(--dark-color);
  `}
`;

export default function Categories() {
  return (
    <CategoriesList>
      <Category isActive={true}>Данные профиля</Category>
      <Category>Рабочее пространство</Category>
      <Category>Приватность</Category>
      <Category>Безопасность</Category>
    </CategoriesList>
  );
}
