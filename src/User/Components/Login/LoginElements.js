import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkLogo = styled(Link)``;
export const BrandLogo = styled.img``;

export const Message = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
`;

export const RolesButton = styled.button`
  background: ${({ isOpen }) => (isOpen ? "#32C33B" : "#FFFFFF")};
  color: ${({ isOpen }) => (isOpen ? "#FFFFFF" : "#9B9B9B")};
  width: 123px;
  height: 48px;
  border: ${({ isOpen }) => (isOpen ? "none" : "1px solid #9b9b9b")};
  box-sizing: border-box;
  filter: drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.05));
`;

export const TextRoles = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  border: none;
`;

export const TextLink = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
`;

export const NavLink = styled(Link)`
  color: #32c33b;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;

  &:hover {
    color: #32c33b;
  }
`;

export const ButtonSubmit = styled.button`
  background: #32c33b;
  color: #ffffff;
  border-radius: 25px;
`;
