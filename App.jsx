import './App.css' ;
import Login from './Application/LoginSignInPage/Login.jsx';
import Register from './Application/LoginSignInPage/Register.jsx';
import RootPage from './Application/LoginSignInPage/RootPage.jsx';
import Cart from './Application/WebPage/Cart.jsx';
import Home from './Application/WebPage/Home.jsx';
import MainPage from './Application/WebPage/MainPage.jsx';
import Rootlayout from './Application/WebPage/MainPage.jsx';

// routing cofiguration
// import Routelayout from './Components/Session37-reactjs/Routing/Routelayout.jsx';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';



function App(){
  
  // const browserRouterObject = createBrowserRouter([
  //   {
      
  //   }
  // ])

  return (
    <div>
      {/* <RouterProvider router={browserRouterObject}/> */}
      <MainPage/>
    </div>
  )
}

export default App;



//Assignment-6-2
// path : "",
//       element : <RootPage/>,
//       children : [
//         {
//           path : '',
//           element : <Home2/>
//         },
//         {
//           path : 'signup',
//           element : <Signup/>
//         },
//         {
//           path : 'signin',
//           element : <Signin/>
//         },
//         {
//           path : 'technologies',
//           element : <Technologies2/>,
//           children : [
//             {
//               path : 'reactjs',
//               element : <Reactjs2/>
//             },
//             {
//               path : 'angular',
//               element : <Angular/>
//             },
//             {
//               path : 'vue',
//               element : <Vue/>
//             }
//           ]
//         }
//       ]






//Assignment 8
// {
//   path : "",
//   element : <Maincomponent/>,
//   children : [
//     {
//       path : '',
//       element : <Registrationform/>
//     },
//     {
//       path : 'login',
//       element : <Loginpage/>
//     }
//   ]
// },
// {
//   path : 'userprofile/:username',
//   element : <UserProfile2/>
// }








// import Login from './Assingmnets/Assignment-7/Login.jsx';
// import Register from './Assingmnets/Assignment-7/Register.jsx';
// import Rootcomponent from './Assingmnets/Assignment-7/Rootcomponent.jsx';


// import A from './Components/Session32-reactjs/A'
// import img1 from './assets/0x0.webp' ;
// import svg from './assets/3.svg';
// import { FcAndroidOs } from "react-icons/fc";
// // import Products from "./Components/Session32-reactjs/Products/Products/";
// import Assignment_1 from "./Assingmnets/Assignment-1/first";
// import Products from "./Assingmnets/Assignment-2/Assignment-2.1/products";
// import Footer from "./Assingmnets/Assignment-2/Assignment-2.2/Assignment-2.2-1/Footer";
// import Navbar from "./Assingmnets/Assignment-2/Assignment-2.2/Assignment-2.2-1/Navbar";
// import Counter from "./Assingmnets/Assignment-3/first";
// import StateChangeDemo from "./Components/Session33-reactjs/StateChangeDemo";
// import UserInteractionDemo from "./Components/Session33-reactjs/UserInteractionDemo";
// import Header2 from './Assingmnets/Assignment-2/Assignment-2.2/Assignment-2.2-2/Header'
// import Profiles from './Assingmnets/Assignment-2/Assignment-2.2/Assignment-2.2-2/Profiles';
// import Effect_demo from './Components/Session34-reactjs/effect-demo/Effect_demo';
// import Posts from './Components/Session34-reactjs/effect-demo/posts';
// import Test1 from './Components/Session35-reactjs/Test1';
// import ManageTasks from './Components/Session35-reactjs/TO-DOApp/ManageTasks';
// import AddUser from './Components/Session36-reactjs/Form1';
// // import Users from './Assingmnets/Assignment-4/Assignment-4.1/Users4';
// import Parent from './Assingmnets/Assignment-4/Assignment-4.2/Parent4.2';
// import Form from './Assingmnets/Assignment-5/Assignment-5.2';
// import RegistrationForm from './Assingmnets/Assignment-5/Assignment-5.1';
// import Users from './Assingmnets/Assignment-2/Assignment-2.2/Assignment-2.2-1/Users.jsx'
// import Header from './Assingmnets/Assignment-2/Assignment-2.2/Assignment-2.2-2/Header';
// import CombinedPage from './Assingmnets/Assignment-2/Assignment-2.2/Assignment-2.2-2/CombinedPage.jsx';
// import WebPage from './Assingmnets/Assignment-2/Assignment-2.2/Assignment-2.2-1/WebPage.jsx';
// import First from './Assingmnets/Assignment-1/first.jsx'


// import Home from './Components/Session37-reactjs/Routing/Home.jsx';
// import Register from './Components/Session37-reactjs/Routing/Register.jsx';
// import Login from './Components/Session37-reactjs/Routing/Login.jsx';
// import Technologies from './Components/Session37-reactjs/Routing/Technologies.jsx';
// import UserProfile from './Components/Session37-reactjs/Routing/UserProfile.jsx';
// import Css from './Components/Session37-reactjs/Routing/css.jsx';
// import JavaScript from './Components/Session37-reactjs/Routing/JavaScript.jsx';
// import Reactjs from './Components/Session37-reactjs/Routing/Reactjs.jsx';
// import Rootcomponent from './Assingmnets/Assignment-6/Assignment-6-1/Rootcomponent.jsx';
// import RootPage from './Assingmnets/Assignment-6/Assignment-6-2/RootPage.jsx';
// import Home2 from './Assingmnets/Assignment-6/Assignment-6-2/Home.jsx';
// import Signup from './Assingmnets/Assignment-6/Assignment-6-2/Signup.jsx';
// import Signin from './Assingmnets/Assignment-6/Assignment-6-2/Signin.jsx';
// import Technologies2 from './Assingmnets/Assignment-6/Assignment-6-2/Technologies.jsx';
// import Reactjs2 from './Assingmnets/Assignment-6/Assignment-6-2/Reactjs.jsx';
// import Angular from './Assingmnets/Assignment-6/Assignment-6-2/Angular.jsx';
// import Vue from './Assingmnets/Assignment-6/Assignment-6-2/Vue.jsx';
// import Maincomponent from './Assingmnets/Assignment-8/Maincomponent.jsx';
// import Registrationform from './Assingmnets/Assignment-8/Registrationform.jsx';
// import Loginpage from './Assingmnets/Assignment-8/Loginpage.jsx';
// import UserProfile2 from './Assingmnets/Assignment-8/Userprofile.jsx';



// json server --watch DataBase.json
// npm install -g json-server



//Session 37
// const browserRouterObject = createBrowserRouter([
//   {
//     path:"",
//     element : <Routelayout/>,
//     children : [
//       {
//         path : '',
//         element : <Home/>
//       },
//       {
//         path : 'register',
//         element : <Register/>
//       },
//       {
//         path : 'login',
//         element : <Login/>
//       },
//       {
//         path : 'technologies',
//         element : <Technologies/>,
//         children : [
//           {
//             path : 'css',
//             element : <Css/>
//           },
//           {
//             path : 'javascript',
//             element : <JavaScript/>
//           },
//           {
//             path : 'reactjs',
//             element : <Reactjs/>
//           }
//         ]
//       },
//       {
//         path : 'userprofile/:username',
//         element : <UserProfile/>
//       }
//     ]
//   }
// ])

// <RouterProvider router = {browserRouterObject}/>

