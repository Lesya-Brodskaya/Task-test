import { useState, useEffect } from "react";
import { fetchUsers, fetchAllUsers, followUsers } from "services/API";
import UsersList from "components/UsersList";
import Loader from "components/Loader";
import { TweetsContainer, ToHome, LoadMoreBtn } from "./Tweets.styled";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPageUsers = async () => {
      setLoading(true);
      try {
        const result = await fetchUsers(page);
        setUsers((prev) => [...prev, ...result]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPageUsers();
  }, [page]);

  useEffect(() => {
    const fetchUsersData = async () => {
      setLoading(true);
      try {
        const result = await fetchAllUsers();

        const updUsers = result.map((user) => {
          return { ...user, isFollow: false };
        });

        const savedUsers = JSON.parse(localStorage.getItem("updUsers"));
        if (savedUsers) {
          setUserData(savedUsers);
        } else {
          localStorage.setItem("updUsers", JSON.stringify(updUsers));
          setUserData(JSON.parse(localStorage.getItem("updUsers")));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsersData();
  }, []);

  const toggleFollow = async (id, followers, isFollow) => {
    const updFollowers = JSON.parse(localStorage.getItem("updUsers")).map(
      (user) =>
        user.id === id
          ? {
              ...user,
              isFollow: !user.isFollow,
              followers: user.isFollow
                ? user.followers - 1
                : user.followers + 1,
            }
          : user
    );
    localStorage.setItem("updUsers", JSON.stringify(updFollowers));
    setUserData(JSON.parse(localStorage.getItem("updUsers")));
    await updateUser(id, followers, isFollow);
  };

  const updateUser = async (id, followers, isFollow) => {
    const data = !isFollow
      ? { followers: followers + 1 }
      : { followers: followers - 1 };
    try {
      await followUsers(id, data);
    } catch (error) {}
  };

  const LoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <TweetsContainer>
      <ToHome to="/">Back to Home</ToHome>
      {loading ? (
        <Loader />
      ) : (
        <>
          <UsersList
            users={users}
            updatedUsers={updateUser}
            toggleFollow={toggleFollow}
            page={page}
          />
          {Math.ceil(userData.length / 3) > page && (
            <LoadMoreBtn onClick={LoadMore}>Load More</LoadMoreBtn>
          )}
        </>
      )}
    </TweetsContainer>
  );
};

export default Users;
