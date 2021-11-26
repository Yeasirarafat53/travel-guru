import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import firebase from "firebase/app";
import "firebase/auth";
import logo from "../../Image/logo-white.png";
import "./Header.css";
// import Registration from '../Registration/Registration';

const Header = () => {
  let history = useHistory();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  //    const registration = () => {
  //        history.push("/registration")
  //    }

  const handlePopup = () => {
    alert(
      "This feature is temporarily unavailable\nSelect Destination & Go Booking"
    );
  };
  const handleSignin = () => {
    history.push("/registration")
    
  };

  const handleSignOut = () => {
    // console.log("sign out");
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        setLoggedInUser({});
      })
      .catch((error) => {
        // An error happened.
      });
  };

  //   // step-10
  //     const handleSignOut = () => {
  //       // console.log("sign out");
  //       firebase.auth().signOut()
  //       .then(res=>{
  //         history.push("/");
  //         const signedOutUser={
  //           isSignedIn:false,
  //           name:'',
  //           email:'',
  //           photo:''
  //         }
  //         setUser(signedOutUser);

  //       })
  //       .catch(error =>{
  //         console.log(error);
  //         console.log(error.message);
  //       })
  //     }

  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent container">
        <Link class="navbar-brand" to="/home">
          <img src={logo} alt="" />
        </Link>
        <button
          class="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon "></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <form class="d-flex form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search your Destination"
              id="searchBox"
            />
            <button
              class="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={handlePopup}
            >
              Search
            </button>
          </form>

          <ul class="nav-part navbar-nav ml-auto mt-2 mt-lg-0 ">
            <li class="nav-item active">
              <Link class="nav-link" to="/home">
                News{" "}
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/" onClick={handlePopup}>
                Destination
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/#" onClick={handlePopup}>
                Blog
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/#" onClick={handlePopup}>
                Contact
              </Link>
            </li>



            <li class="nav-item">
            {

                loggedInUser.email ? <p style={{color:"lightcoral", fontWeight: "bold"}} class="nav-link" >
                {loggedInUser.name}
                </p> : <p></p>
            
            }
            </li>



            <li class="nav-item">
              {loggedInUser.email ? (
                <button onClick={handleSignOut} class="btn btn-warning">
                  
                  Logout
                </button>
              ) : (
                <button onClick={handleSignin} class="btn btn-warning">
                  
                  Login
                </button>
              )}

              {/* { user.isSignedIn ? <button onClick={handleSignOut}>sign out</button> :
                            <button >sign in</button>
                            }  */}

              {/* <a href="/registration" class="btn btn-warning" role="button">Login</a> */}
            </li>
            {/* <button href="/registration" class="btn btn-warning"> arif</button> */}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

// import React from "react";
// import "./Header.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import logo from "../../Logo.png";
// import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";

// const Header = () => {
//   return (
//     <div>
//       <Navbar>
//         <img
//           className="logo-color"
//           style={{ height: "56px", width: "120.26px" }}
//           src={logo}
//           alt=""
//         />

//         <Form className="d-flex">
//           <FormControl
//             type="search"
//             placeholder="Search"
//             className="mr-2"
//             aria-label="Search"
//           />
//           <Button variant="outline-success">Search</Button>
//         </Form>

//         <Nav className="me-auto">
//           <Nav.Link className="clr" href="#home">Home</Nav.Link>
//           <Nav.Link href="#features">Features</Nav.Link>
//           <Nav.Link href="#pricing">Pricing</Nav.Link>
//           <Button variant="warning">Log In</Button>
//         </Nav>
//       </Navbar>
//     </div>
//   );
// };

// export default Header;

// import React from 'react';
// import { Button, Form, FormControl, Nav, Navbar} from 'react-bootstrap';
// import logo from '../../Logo.png';
// import './Header.css'

// const Header = () => {
//   return (
//     <div >
//             <Navbar variant="dark"  className="header" >
//                 <img src={logo} alt="" />
//                 <Nav className="clr">
//                 <Nav.Link href="#home">Home</Nav.Link>
//                 <Nav.Link href="#features">Features</Nav.Link>
//                 <Nav.Link href="#pricing">Pricing</Nav.Link>
//                 </Nav>
//                 {/* <Form inline>
//                 <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//                 <Button variant="outline-light">Search</Button>
//                 </Form> */}

//             </Navbar>
//         </div>
//   );
// };

// export default Header;
