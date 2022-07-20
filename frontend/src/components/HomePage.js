import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../context/userContext";

export const HomePage = () => {
  const { users, status, userInfo } = useContext(UserContext); // users is an array of objects

  // console.log("user list", userInfo);
  // console.log("user-information", userInfo);
  // console.log("status", status);


  return (
    <>
      <Wrapper>
        <Title>All Facespace Members</Title>
        {!status && (
          <ProfilesHere>
            {users.map((user) => {
              return (
                <Profile key={user.id}>
                  <UserHere to={`/users/${user.id}`}>
                    <UserAvatar src={user.avatarUrl} alt={user.name} />
                  </UserHere>
                </Profile>
              );
            })}
          </ProfilesHere>
        )}
        {status && (
          <ProfilesHere>
            {users.map((user) => {
              return (
                <Profile key={user.id}>
                  <UserHere to={`/users/${user.id}`}>
                    {userInfo.friends.includes(user.id) && (
                      <ImageZone>
                        <FriendOrFoe>Friend</FriendOrFoe>
                        <UserAvatar src={user.avatarUrl} alt={user.name} />
                      </ImageZone>
                    )}
                    {!userInfo.friends.includes(user.id) && (
                      <ImageZone>
                        <UserAvatar src={user.avatarUrl} alt={user.name} />
                      </ImageZone>
                    )}
                  </UserHere>
                </Profile>
              );
            })}
          </ProfilesHere>
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;
const Title = styled.h1`
  font-size: var(--heading-font-size);
  font-family: var(--heading-font-family);
  color: var(--primary-color);
  margin: 10px;
`;
const ProfilesHere = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Profile = styled.div``;
const UserHere = styled(NavLink)`
  text-decoration: none;
  margin: 10px;
`;

const ImageZone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;
const UserAvatar = styled.img`
  width: var(--user-img-width);
  height: var(--user-img-width);
  border-radius: 50%;
  &:hover {
    cursor: pointer;
    border: 8px solid var(--primary-color);
  }
`;

const FriendOrFoe = styled.p`
  --f: 10px; /* control the folded part*/
  --r: 15px; /* control the ribbon shape */
  --t: 10px; /* the top offset */
  text-align: center;
  text-decoration: none;
  color: white;
  font-family: var(--heading-font-family);
  position: relative;
  inset: var(--t) calc(-1*var(--f)) auto auto;
  padding: 0 10px var(--f) calc(10px + var(--r));
  clip-path: 
    polygon(0 0,100% 0,100% calc(100% - var(--f)),calc(100% - var(--f)) 100%,
      calc(100% - var(--f)) calc(100% - var(--f)),0 calc(100% - var(--f)),
      var(--r) calc(50% - var(--f)/2));
  background: var(--primary-color);
  box-shadow: 0 calc(-1*var(--f)) 0 inset #0005;
`;