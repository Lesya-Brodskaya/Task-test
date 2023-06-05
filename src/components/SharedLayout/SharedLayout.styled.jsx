import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Nav = styled(NavLink)`
  display: flex;
  justify-content: center;
  gap: 30px;
  font-weight: 700;
  font-size: 20px;
  padding: 5px;
  border-bottom: 1px solid;
  text-decoration: none;
`;

export const Links = styled(NavLink)`
  text-decoration: none;
  padding: 5px;
  :hover {
    color: white;
    background-color: #4fa94d;
    border-radius: 4px;
    padding: 5px;
  }
`;
