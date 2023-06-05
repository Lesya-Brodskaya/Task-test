import ellipse from "../../images/Ellipse.png";
import logo from "../../images/Logo.png";
import picture from "../../images/Picture.png";
import rectangle from "../../images/Rectangle.png";
import { Outlet } from "react-router-dom";
import { followUsers } from "services/API";
import { AiOutlineTwitter } from "react-icons/ai";
import {
  List,
  Item,
  Card,
  Logo,
  Picture,
  Line,
  Ellipse,
  Img,
  Text1,
  Text2,
  Button,
} from "./UsersList.styled";

const numberConver = (number) => new Intl.NumberFormat("en").format(number);
const UsersList = ({ users, toggleFollow }) => {
  return (
    <>
      <List>
        {users.map(({ id, avatar, user, tweets, followers, isFollow }) => {
          return (
            <Item key={id}>
              <Card>
                <Logo src={logo}></Logo>
                <Picture src={picture}></Picture>
                <Line src={rectangle}></Line>
                <Ellipse src={ellipse}></Ellipse>
                {avatar ? (
                  <Img src={avatar} alt={user} size={80} />
                ) : (
                  <AiOutlineTwitter size={80} />
                )}
                <Text1>{numberConver(tweets)}tweets</Text1>
                <Text2>{numberConver(followers)}followers</Text2>
                <Button
                  onClick={() => {
                    toggleFollow(id);
                    followUsers(id, {
                      followers: isFollow ? followers - 1 : followers + 1,
                    });
                  }}
                >
                  {isFollow ? "following" : "follow"}
                </Button>
              </Card>
            </Item>
          );
        })}
      </List>
      <Outlet />
    </>
  );
};

export default UsersList;
