// import React from "react";
// import { Button, Form } from "react-bootstrap";
// import "./Login.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
// import { useHistory } from "react-router-dom";

// import firebase from "firebase/app";
// import "firebase/auth";
// import { useState } from 'react';
// // import firebaseConfig from "../Firebase/firebase.config";

// // firebase.initializeApp(firebaseConfig);

// const Login = () => {

//     const history = useHistory();

//     const signup =()=>{
//         history.push("/registration")
//     }

// // google sign in 


//     const [user,setUser] = useState({
//       isSignedIn: false,
//       name: '',
//       email: '',
//       photo: ''
  
//     })
  
//   // step-5
//     const googleProvider = new firebase.auth.GoogleAuthProvider();
//   // step-7
//     const handleSignin = ()=>{
      
//       firebase.auth().signInWithPopup(googleProvider)

//       .then(res =>{
//         console.log(res);
//         const {displayName,email,photoURL} = res.user;
//         // step-9
//         const signedInUser = {
          
//           isSignedIn:true,
//           name:displayName,
//           email: email,
//           photo:photoURL
//         }
//         setUser(signedInUser)
//         // ..........
  
//         console.log(displayName,email,photoURL);
//       })
//       .catch(error =>{
//         console.log(error);
//         console.log(error.message);
//       })
//     }
  
//   // step-10
//     // const handleSignOut = () => {
//     //   // console.log("sign out");
//     //   firebase.auth().signOut()
//     //   .then(res=>{
//     //     const signedOutUser={
//     //       isSignedIn:false,
//     //       name:'',
//     //       email:'',
//     //       photo:''
//     //     }
//     //     setUser(signedOutUser);
        
//     //   })
//     //   .catch(error =>{
//     //     console.log(error);
//     //     console.log(error.message);
//     //   })
//     // }



//   return (
//     <div>
//       <div className="login-form">
//         <Form>
//           <h3>Login</h3>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type="email" placeholder="Enter email" />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control type="password" placeholder="Password" />
//           </Form.Group>
//           <Form.Group className="mb-3 remember" controlId="formBasicCheckbox">
//             <Form.Check type="checkbox" label="Remember me" />
//             <Form.Text className="forgetPass">forgot password</Form.Text>
//           </Form.Group>
//           <Button variant="primary" type="submit">
//             Login
//           </Button>

//             <br />

//           <p className="create-account">
//               "Don't have an account?"
//               <span onClick={signup}>create account</span>
//           </p>
//         </Form>
         
//             </div>

//       <br />
//             <div className="or">
//               or
//             </div>

//                 <br />

//       <div className="another-login">
//           <div className="fb-signin">
//           <FontAwesomeIcon icon={faFacebook} />
//           <p>Continue with Facebook</p>
//           </div>

 
           
//               <div onClick={handleSignin} className="google-signin">
//           <FontAwesomeIcon icon={faGoogle} />
//           <p>Continue with Google</p>
//           </div> 
           

//             {
//               user.isSignedIn && 
//               history.push("/room")
//             }


//             {/* { user.isSignedIn ? <button onClick={handleSignOut}>sign out</button> :
//                     <button onClick={handleSignin}>sign in</button>
//                   } */}

      
//               {/* user.isSignedIn ? history.push("/room") */}
      


//       </div>
     



//     </div>
//   );
// };

// export default Login;
