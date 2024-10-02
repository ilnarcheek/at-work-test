import React, { useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import { useAppDispatch } from "../store/hooks";
import { openModal } from "../store/slices/modalSlice";
import { editUser } from "../store/slices/usersSlice";
import { IUser } from "../types/IUser";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 42rem;
  gap: 1rem;
  margin-bottom: 2.4rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  font-size: (--fs-text1);
  font-weight: 600;
`;

const Input = styled.input`
  border: 2px solid var(--gray-light-color);
  border-radius: 100rem;
  padding: 0.8rem 1.6rem;
`;

const Button = styled.button`
  color: var(--white-color);
  padding: 1.2rem 4.2rem;
  background-color: var(--dark-color);
  border-radius: 100rem;
  margin-top: 3.2rem;
  transition: all 0.3s ease;
  font-weight: 600;

  &:hover {
    color: var(--gray-dark-color);
    background-color: var(--white-gray-color);
  }

  &:active {
    background-color: var(--dark-color);
    color: var(--white-color);
  }

  @media (max-width: 400px) {
    width: 100%;
    font-size: var(--fs-text2);
  }
`;

function validationErrorMessage() {
  toast.error("Заполнены не все поля формы");
}

interface FormProps {
  user: IUser;
}

export default function Form({ user }: FormProps) {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    name: user?.name || "",
    username: user?.username || "",
    email: user?.email || "",
    city: user?.address.city || "",
    phone: user?.phone || "",
    companyName: user?.company.name || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSaveForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.username ||
      !formData.email ||
      !formData.city ||
      !formData.phone ||
      !formData.companyName
    ) {
      validationErrorMessage();
      return;
    }

    if (user) {
      const updatedUser = {
        ...user,
        name: formData.name,
        username: formData.username,
        email: formData.email,
        address: { city: formData.city },
        phone: formData.phone,
        company: { name: formData.companyName },
      };

      dispatch(editUser(updatedUser));
      dispatch(openModal());
    }
  };

  return (
    <form onSubmit={handleSaveForm}>
      <InputContainer>
        <Label htmlFor="name">Имя</Label>
        <Input
          type="text"
          name="name"
          id="name"
          defaultValue={formData.name}
          onChange={handleChange}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="username">Никнейм</Label>
        <Input
          type="text"
          name="username"
          id="username"
          defaultValue={formData.username}
          onChange={handleChange}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="email">Почта</Label>
        <Input
          type="email"
          name="email"
          id="email"
          defaultValue={formData.email}
          onChange={handleChange}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="city">Город</Label>
        <Input
          type="text"
          name="city"
          id="city"
          defaultValue={formData.city}
          onChange={handleChange}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="phone">Телефон</Label>
        <Input
          type="tel"
          name="phone"
          id="phone"
          defaultValue={formData.phone}
          onChange={handleChange}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="companyName">Название компании</Label>
        <Input
          type="text"
          name="companyName"
          id="companyName"
          defaultValue={formData.companyName}
          onChange={handleChange}
        />
      </InputContainer>
      <Button type="submit">Сохранить</Button>
    </form>
  );
}
