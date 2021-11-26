import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Cards.css';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Button, Card } from '@material-ui/core';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Cards = (props) =>{

  const classes = useStyles();
  const [info, setInfo] = useContext(UserContext);

  console.log(info);
  let { image, name, description } = props.place;


  //showing place information
  function handleClick(PlaceInformation) {
    setInfo(PlaceInformation);
    // history.push("/login");
    // console.log(PlaceInformation)


  }


  const truncateString = (string = '', maxLength = 50) =>
    string.length > maxLength
      ? `${string.substring(0, maxLength)}…`
      : string

  return (
   <div style={{ marginLeft: "50px" }}>
      <Card  className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          {
            truncateString(description, 40)
          }

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

      <Button onClick={() => handleClick(props.place)} size="small" color="secondary" variant="contained">
        Show data
      </Button>

      <Link to="/booking">
          
        <Button className="btn" onClick={() => handleClick(props.place)} size="small" color="secondary" variant="contained">
          booking
        </Button>
      </Link>

      </CardActions>
    </Card>
   </div>
  );
}

export default Cards;