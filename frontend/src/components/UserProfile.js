import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Friends } from "./Friends";

export const UserProfile = () => {
  // console.log("users here", users);
  const { id } = useParams(); // for the user id

  const [user, setUser] = useState([]); // for the user data
  const [friendsID, setFriendsID] = useState([]); // for the user's friend ids

  // fetch the individual user data from the server
  const fetchUser = async () => {
    const response = await fetch(`/api/users/${id}`);
    const userInfo = await response.json();
    return userInfo;
  };

  // fetch the friends data from the server
  useEffect(() => {
    fetchUser().then((item) => {
      setUser(item.data);
      setFriendsID(item.data.friends);
    });
  }, [id]);

  // console.logs here
  // console.log("friends are here", user);
  // console.log("IDs of friends are here", friendsID);

  return (
    <>
      <Wrapper>
        <Banner>
          <iframe
            allow="fullscreen"
            frameBorder="0"
            height="600"
            src="https://giphy.com/embed/6kJzm03lRcUOaL18g8/video"
            width="100%"
          />
        </Banner>
        <UserProfileWrapper>
          <UserProfileImage src={user.avatarUrl} alt="user profile" />
          <UserFriendsTitle>{user.name}'s friends</UserFriendsTitle>
          <UserFriendsList>
            <Friends key={id} friendIDs={friendsID} />
          </UserFriendsList>
        </UserProfileWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;
const Banner = styled.div`
  height: 0;
  position: relative;
  width: 100%;
  z-index: -1;
  margin-bottom: 350px;

`;
const UserProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  align-items: center;
`;
const UserProfileImage = styled.img`
  width: 400px;
  height: auto;
  border-radius: 50%;
  margin: 100px 0 50px 20px;
`;
const UserFriendsTitle = styled.h1`
  border-bottom: 1px solid var(--primary-color);
  width: 60vw;
  margin: 0 auto;
  font-size: 40px;
  text-align: center;
`;
const UserFriendsList = styled.div`
  margin: 20px;
`;
const UserFriendsListItem = styled.li``;
const UserFriendsListItemImage = styled.img`
  width: var(--user-img-width);
  height: var(--user-img-width);
  border-radius: 50%;
  &:hover {
    cursor: pointer;
    border: 8px solid var(--primary-color);
  }
`;
