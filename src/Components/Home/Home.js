import React, { useContext, useState } from "react";
import "./Home.css";
import fakeData from '../fakeData/fakedata';
import Cards from "../Card/Cards";
import { UserContext } from "../../App";
// import {MyContext} from '../../App'


const Home = () => {


  const [info,setInfo]=useContext(UserContext);
console.log(info);
  // const [cart, setCart] = useState([]);

  // const handleLocation = (info) => {
  //   const newCart = [...info, info]
  //   setCart(newCart)
  // }




  return (
    // <div className="main">
    //   {
    //     fakeData.map(data => <Card info={data} handleLocation={handleLocation}></Card>)
    //   }

    // </div>


    <div className="main-container">
            
            
        {/* button a click korla data dakhanor jonno*/}
          { 
            Object.keys(info).length?
            <div className="info-part">
                <h1>{info.name}</h1>
                <hr/>
                <p>{info.details}</p>
            
            </div> :'' 
          }

            <div className="cart">

          {
              fakeData.map(placeInfo => (<Cards place={placeInfo} ></Cards> ))
 
          }
          </div>

             
          
            
        </div>
    
  );
};

export default Home;



// {/* <div className="container">

// <div className="col-md-5 row">
//     <h1>{location.name}</h1>
//     <p>{location.details}</p>
// </div>

// <div className="col-md-7 d-flex">
//   {
//     fakeData.map(info => <img onload ={()=> handleLocation(info)} onclick={handleLocation(info)} src={info.image} key={info.id} alt=""/>) 
//   }


// </div>




// </div> */}