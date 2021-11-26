import React, { useContext }  from 'react';

import './Booking.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';


const Booking = (props) => {

    // const { id } = useParams();
    // const { name, details } = props.place;
    const [info, setInfo] = useContext(UserContext);
    console.log(info);

    return (

        <div class="container">
            <div class="locationInfo row">

                {/* Location details */}
                <div className="booking_details col-md-5">

                    {/* <h1 style={{ fontSize: '70px' }}> {name}</h1>
                    <p style={{ fontSize: '20px', marginTop: '4px' }}>{details}</p> */}
                        <h1>
                            {
                                info.name
                            }
                        </h1>
                        <p>
                            {
                                info.details 
                            }
                        </p>
                </div>

                <div className="booking-box col-md-7">
                    <form action="" className="bookingForm">
                        <div className="form-group">
                            <label for="Origin">Origin</label>
                            <input type="text" id="origin" class="form-control bg-light" placeholder="Origin" />
                        </div>
                        <div className="form-group">
                            <label for="Destination">Destination</label>
                            <input value={info.name} type="text" id="destination" class="form-control bg-light" placeholder="Destination" />
                        </div>

                        <div className="form-row">
                            <div class="form-group col-md-6">
                                <label for="from">From</label>
                                <input type="date" class=" dates form-control bg-light" id="from" />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="to">To</label>
                                <input type="date" class="dates form-control bg-light" id="to" />
                            </div>
                        </div>

                        <br />
                        

                        <Link to="/registration" >
                            <button className="btn btn-warning col-md-12" href="">Start Booking</button>
                        </Link>
                    </form>


                </div>




            </div>


        </div>
    );
};

export default Booking;













// import React, { useContext } from 'react';
// import { MyContext, UserContext } from '../../App';
// import './Booking.css';


// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import { useHistory } from 'react-router-dom';




// const useStyles = makeStyles((theme) => ({
//     container: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
//     textField: {
//         marginLeft: theme.spacing(1),
//         marginRight: theme.spacing(1),
//         width: 200,
//     },
// }));


















// const Booking = () => {
//     const [info, setInfo] = useContext(UserContext);
//     console.log(info);
//     let history = useHistory();

//     const classes = useStyles();


//     function handleBooking (PlaceInformation){
//         setInfo(PlaceInformation)
//         history.push("/login"); 
//         console.log('ok --');   
//       }







//     return (
//         <div className="Main-container">

//             <div className="info-p">
//                 <p>
//                     {
//                         info.description
//                     }

//                 </p>
//             </div>

//             <div className="from">
//                 <label for="origin">Origin</label>
//                 <br />
//                 <input type="text" />
//                 <br />
//                 <label for="origin">Destination</label>
//                 <br />
//                 <input type="text" value={info.name} />
//                 <br />
//                 <br />
//                 {/* <label for="origin">From</label> */}

//                 <div className="date-field">


//                     <div className="first-date">
//                         <form className={classes.container} noValidate>
//                             <TextField
//                                 id="date"
//                                 label="From"
//                                 type="date"
//                                 defaultValue="2017-05-24"
//                                 className={classes.textField}
//                                 InputLabelProps={{
//                                     shrink: true,
//                                 }}
//                             />
//                         </form>
//                     </div>

//                     <div className="second-date">
//                         <form className={classes.container} noValidate>
//                             <TextField
//                                 id="date"
//                                 label="TO"
//                                 type="date"
//                                 defaultValue="2017-05-24"
//                                 className={classes.textField}
//                                 InputLabelProps={{
//                                     shrink: true,
//                                 }}
//                             /> 
                      
                      
//                         </form>
//                         <br />
                        
//                         <button onClick={handleBooking}  className=" booked btn btn-warning">Booking</button>
                        
//                     </div>

//                 </div>

//             </div>



//         </div>


//     );
// };

// export default Booking;










