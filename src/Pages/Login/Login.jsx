// import React from "react";
// import { Helmet } from "react-helmet-async";
import LoginForm from "./LoginForm";

// const Login = () => {
//     return (
//         <div>
//             <Helmet>
//                 <title>PH Care | Portal </title>
//                 <link rel="canonical" href="https://www.tacobell.com/" />
//             </Helmet>
//             <LoginForm></LoginForm>
//         </div>
//     )
// }

// export default Login;

import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import Featured from "../Home/Featured/Featured";
import PopularMenu from "../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <>
      <Helmet>
        <title>PH Care | Portal </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet> 
    <LoginForm></LoginForm>
    </>
  );
};

export default Menu;
