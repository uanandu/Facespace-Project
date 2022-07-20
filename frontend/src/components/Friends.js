import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../context/userContext";
export const Friends = ({ friendIDs }) => {

    // console.log("friends are here", friendIDs);
    const {users} = useContext(UserContext);

  return (
    <>
      <Wrapper>
        {
            friendIDs.map((friendId)=> {
                return (
                    users.map((userID)=> {
                    if (userID.id === friendId) {
                        return (
                            <Friend key={userID.id} to={`/users/${friendId}`}>
                                <FriendAvatar src={userID.avatarUrl} alt={userID.name}/>   
                            </Friend>
                        )
                    }
                })
                )
                
            })
        }
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`
const Friend = styled(NavLink)``;
const FriendAvatar = styled.img`
    width: var(--user-img-width);
  height: var(--user-img-width);
  border-radius: 50%;
  &:hover {
    cursor: pointer;
    border: 8px solid var(--primary-color);
  }
`;
