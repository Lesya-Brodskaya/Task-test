import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const TweetsContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ToHome = styled(Link)`
  display: inline-block;
  padding: 10px;
  margin-bottom: 20px;
  border: 2px solid black;
  border-radius: 8px;
  text-decoration: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  text-transform: uppercase;
`;

export const LoadMoreBtn = styled.button`
  width: 130px;
  padding: 10px;
  font-family: "Monserrat";
  font-weight: 500;
  border-radius: 8px;
  border: none;
  background-color: #ebd8ff;
  border-radius: 10.3108px;
  cursor: pointer;
  text-transform: uppercase;
  color: #373737;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #5cd3a8;
  }
`;
