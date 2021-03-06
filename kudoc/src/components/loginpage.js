import React from 'react';
import GoogleLogin from 'react-google-login';
import { Redirect } from "react-router-dom";

const responseGoogle = (response) => {
  console.log(response.Is.sd);
  <Redirect exact to="/"/>
}

function loginPage() {
    return (
      <body className="loginPageBody">
        <div className="loginWrap">
          <div className="loginContainer">
            <div className="loginTitle">로그인</div>
              <form>
                <div className="loginButtonContainer">
                  <div className="googleLoginButton">
                    <GoogleLogin
                      // clientId 부분은 나중에 google oAuth 발급 받아서 사용.
                      clientId="582012941740-cl2b5h4nfuukc0ja4phdhte2taj93f40.apps.googleusercontent.com"
                      buttonText="Login with Google"
                      uxMode='redirect'
                      redirectUri="http://localhost:3000/"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={'single_host_origin'}
                    />
                  </div>
                </div>
              </form>
          </div>
        </div>
      </body>

    );
}

export default loginPage;