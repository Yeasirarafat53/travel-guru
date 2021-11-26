import React, { useContext } from 'react';
import './Registration.css'
// import { Button, Form } from 'react-bootstrap';
// import { useHistory } from 'react-router-dom';

import firebase from "firebase/app";
import "firebase/auth";
import { useState } from 'react';
import firebaseConfig from "../Firebase/firebase.config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

firebase.initializeApp(firebaseConfig);






const Registration = () => {
    const history = useHistory();
    let location = useLocation();
    // const login =()=>{
    //     history.push("/login")
    // }

const [ loggedInUser, setLoggedInUser] = useContext(UserContext);
let { from } = location.state || { from: { pathname: "/room" } };

    // ............email and password diye signup er jonno...................
    // sign in er jonno state declare kora hoice
  const [newUser, setNewUser] = useState(false);

  // sign up er jonno state declare kora hoice
  const [user, setUser] = useState({
    name:'',
    email:'',
    password:'',
    photo:'',
    error:'',
    success:false
  })

        // STEP-2

  const handleBlur = (e) => {
    // console.log(e.target.name, e.target.value);
    let isFieldValid = true;
    if (e.target.name === 'email') {
      // e.target.value dile email ta pabo
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      
      
    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 6;
      // e.target.value dile password ta pabo
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    // email and password sudhu valid holei jno show kore tai ata kora hoice
    if (isFieldValid) {
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo)
      
    }
  }

    //  STEP-3
// sign up er jonno....
  const handleSubmit=(e)=>{
    console.log(user.email, user.email);

      if (newUser && user.email && user.password) {
        
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(res => {
        // new email diye sign up korar somoy browser er error msg ta jno chole jay tai ata kora hoice
        const newUserInfo = {...user};
        newUserInfo.error = '';
        // new email hole success dekhabe and error hide thkbe
        newUserInfo.success = true;
        setUser(newUserInfo)

        updateUserName(user.name)

      })
      .catch(error => {
        // browser a error message ta dekhanor jonno custom vabe aivabe kora hoice..
        const newUserInfo = {...user}
        newUserInfo.error = error.message;
        // new email na hole success hide thkbe and error show  korbe
        newUserInfo.success = false;
        setUser(newUserInfo)


        // var errorCode = error.code;
        // var errorMessage = error.message;
        // console.log(errorCode, errorMessage);
        // ..
      });
    }
      
   // newUser na hole r baki 2 ta thkle taile sign In hobe
      if (!newUser && user.email && user.password) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        const newUserInfo = {...user};
          newUserInfo.error = '';
          // new email hole success dekhabe and error hide thkbe
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
          console.log('sign un user name' , res.user);
      })
      .catch((error) => {
          const newUserInfo = {...user}
          newUserInfo.error = error.message;
          // new email na hole success hide thkbe and error show  korbe
          newUserInfo.success = false;
          setUser(newUserInfo)
      });
      
    }
      
   


// aita na dile bar bar console a refresh nibe tai aita first ei deya vlo
    e.preventDefault();
  }


  const updateUserName = name => {
        const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name,
     
    }).then(() => {
      console.log('user name update succesfully');
    }).catch((error) => {
      console.log(error);
    });  
  }

    

  //google sign in part

    // step-5
    const googleProvider = new firebase.auth.GoogleAuthProvider();
  // step-7
    const handleSignin = ()=>{
      
      firebase.auth().signInWithPopup(googleProvider)

      .then(res =>{
        console.log(res);
        const {displayName,email,photoURL} = res.user;
        // step-9
        const signedInUser = {
          
          isSignedIn:true,
          name:displayName,
          email: email,
          photo:photoURL
        }
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
        // ..........
  
        console.log(displayName,email,photoURL);
      })
      .catch(error =>{
        console.log(error);
        console.log(error.message);
      })
    }
  




    // step-10
    // const handleSignOut = () => {
    //   // console.log("sign out");
    //   firebase.auth().signOut()
    //   .then(res=>{
    //     history.push("/"); 
    //     const signedOutUser={
    //       isSignedIn:false,
    //       name:'',
    //       email:'',
    //       photo:''
    //     }
    //     setUser(signedOutUser);
        
    //   })
    //   .catch(error =>{
    //     console.log(error);
    //     console.log(error.message);
    //   })
    // }


    return (
   
      <div> 

     <div className="registration-form">

     
       <form  onSubmit={handleSubmit} > 
        { newUser ? <h3>Create Account</h3> : <h3> Login</h3>}

        {
          newUser && <>
         
            <label> Enter your name </label>
            <input type="text" name="name" onBlur={handleBlur} placeholder=" Your Name"  />

          </>
        }
   
          <label> Enter your email </label>
          <input type="text" name="email" onBlur={handleBlur} placeholder=" Your Email" required/>
      
          <label> Enter your password </label>
          <input type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required/>
     
            {
                !newUser &&
                <div style={{display:"flex",justifyContent:"space-between"}}>
                  <div>
                      <input type="checkbox"/>
                      <span style={{color:"white"}}>Remember me</span>
                  </div>
                  <div>
                      <Link style={{color:"yellow"}} to="#">Forget password</Link>
                  </div>
                </div>
            }

            <br />

              <input className="submit-frm" onclick="handleButton" type="submit" value={newUser ? 'Create an account' : 'Sign in'} />


                    
                    <div className="text-center">
                            <small style={{color:"white"}}>{newUser ? "Already have an account? ": "Don't have an account? "}</small>
                            <small onClick={()=> setNewUser(!newUser)} style={{cursor:"pointer", color:"orange", borderBottom:"1px solid orange"}}> {newUser? " Sign in": " Sign up"}</small>
                    </div>
        </form> 
      </div> 


      {/* ........error or success message show korar part.......... */}

          <p style={{color:'red'}}>{user.error}</p>

            {/*   success message ta show koranor jonno ata kora hoice  */}
            
            {
                user.success && <p className="text-center" style={{color:'green'}}>user {newUser ? 'created' : 'Loged In' } successfully</p>
            }


{/* ............Another login part.................. */}
              
      <div className="another-login">
           <div className="fb-signin">
              <FontAwesomeIcon icon={faFacebook} />
              <p>Continue with Facebook</p>
           </div>

 
           
            <div onClick={handleSignin} className="google-signin">
              <FontAwesomeIcon icon={faGoogle} />
              <p>Continue with Google</p>
           </div> 

      </div>


           
      </div>            
       
    );
};

export default Registration;