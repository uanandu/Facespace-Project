import styled from "styled-components";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/userContext";

export const SignIn = () => {
  const {
    users,
    userName,
    status,
    setUserName,
    setStatus,
    userInfo,
    setUserInfo,
  } = useContext(UserContext);

  let history = useHistory();

  const handleChange = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userCheck = users.find((user) => {
      return user.name.toLowerCase() === userName.toLowerCase();
    });

    if (userCheck) {
      setStatus(true);
      setUserName(userName);
      setUserInfo(userCheck);
      sessionStorage.setItem("user-name", userName);
      history.push("/");
    } else {
      alert("User not found");
    }

    // users.forEach((user) => {
    //   if (user.name === userName) {
    //     setStatus(true);
    //     setUserName(userName);
    //     sessionStorage.setItem("user-name", userName);
    //     history.push("/");
    //   } else {
    //     setStatus(false);
    //   }
    // });
  };

  return (
    <>
      {!status && (
        <Wrapper>
          {/* <iframe
            allow="fullscreen"
            frameBorder="0"
            height="100%"
            src="https://giphy.com/embed/oZlAfrWKEJOZLYnVDC/video"
            width="100%"
          > */}
            <SignInWrapper>
              <SignInForm onSubmit={handleSubmit}>
                <SignInTitle>Sign In Here:</SignInTitle>
                <SignInInput
                  type="text"
                  name="username"
                  placeholder="Your Firstname"
                  required
                  onChange={handleChange}
                  autoFocus
                />
                <SignInButton type="submit">SignIn</SignInButton>
              </SignInForm>
            </SignInWrapper>
          {/* </iframe> */}
        </Wrapper>
      )}
      {status && (
        <Wrapper>
          <SignInWrapper>
            {`Hi, ${userName}. Looks like you've already signed in. Click the facespace key to continue.`}
          </SignInWrapper>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  height: 100vh;
`;
const SignInWrapper = styled.div`
  background-image: url("https://media.giphy.com/media/UA2Qg3CqCV1hnbUNRs/giphy.gif?cid=ecf05e47ktu1hl16um4xvajrey7w50htar4den6jz3y9vc6f&rid=giphy.gif&ct=g");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 5;
`;
const SignInForm = styled.form`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 5;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;
const SignInTitle = styled.h1`
  padding: 20px;
  color: white;
  background-color: var(--primary-color);
  margin-bottom: 10px;
  border-radius: 5px;
`;
const SignInInput = styled.input`
  margin: 0 20px;
  width: 200px;
  height: 30px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

`;
const SignInButton = styled.button`
  width: 210px;
  margin-top: 10px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  font-family: var(--heading-font-family);
  font-size: 18px;
  border-radius: 5px;

`;
