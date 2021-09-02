import React, {memo} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    root: {

        width: '260px'
    },
    media: {
        height: '60%',
    },
});

const RoversPage = memo(({roverPhoto}) =>  {
    const classes = useStyles();

    return (
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    component="img"
                    alt="This is Mars"
                    image={roverPhoto.img_src}
                />
                <CardContent>
                    <Typography style={{fontFamily: 'Titillium Web'}} gutterBottom variant="h5" component="h2">
                        Rover: {roverPhoto.rover.name ?? 'not defined'}
                    </Typography>
                    <Typography style={{fontFamily: 'Titillium Web'}} variant="body2" color="textSecondary" component="p">
                        Camera: {roverPhoto.camera.name ?? 'not defined'}
                    </Typography>
                    <Typography style={{fontFamily: 'Titillium Web'}} variant="body2" color="textSecondary" component="p">
                        Sol: {roverPhoto.sol ?? 'not defined'}
                    </Typography>
                    <Typography style={{fontFamily: 'Titillium Web'}} variant="body2" color="textSecondary" component="p">
                        Earth day: {roverPhoto.earth_date ?? 'not defined'}
                    </Typography>
                </CardContent>
                <Link to={`/details/:${roverPhoto.id}`}>
                    <CardActions>
                        <Button size="small" color="primary">
                            See details
                        </Button>
                    </CardActions>
                </Link>
            </Card>
    );
})

export default RoversPage