import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 auto;
`;

export const Item = styled.li`
  list-style-type: style none;
  padding: 3px;
  margin: 0;
  list-style-type: none;
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    color: white;
    background-color: #000000;
  }
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
  text-align: center;
  width: 380px;
  height: 460px;
  border-radius: 14px;
  background-color: #471ca9;
`;

export const Logo = styled.img`
  margin-top: 20px;
  margin-left: 20px;
  width: 76px;
  height: 168px;
`;

export const Picture = styled.img`
  position: relative;
  margin-left: 20px;
  width: 308px;
  height: 168px;
`;

export const Line = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Ellipse = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50px;
  z-index: 999;
`;

export const Img = styled.img`
  width: 62px;
  height: 62px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50px;
  z-index: 998;
`;

export const Text1 = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  margin: 1px;
  margin-top: 42px;
  color: white;
`;

export const Text2 = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  margin: 1px;
  margin-bottom: 16px;
  color: white;
`;

export const Button = styled.button`
  width: 230px;
  border-radius: 10.3108px;
  border: none;
  background-color: #ebd8ff;
  margin: auto;
  margin-bottom: 36px;
  cursor: pointer;
  padding: 14px 56px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #5cd3a8;
  }
`;
