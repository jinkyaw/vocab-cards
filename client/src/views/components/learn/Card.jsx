import React from 'react';
import { Link as RouterLink} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { getImgURL } from '../../../utils/unsplashImage'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 275,
        minHeight: 375,
        margin: 8
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: 140,
        width: 275
    },
    content:{
        minHeight: 100,
    },
    pagintion: {
        marginLeft: "auto"
    }
});

export default function WordCard(props) {
    const classes = useStyles();
    
    {/*"https://source.unsplash.com/pVmjvK44Dao/275X140"*/}
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={getImgURL(props.data.img_url)}                
                title={props.data.word}
            />
            <CardContent className={classes.content}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.data.category}
                </Typography>
                <Typography variant="h5" component="h2">
                    {props.data.word}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {props.data.grammar}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.data.meaning}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    variant="outlined"
                    color="secondary"
                    component={RouterLink}
                    to={`/learn/${props.data._id}`}
                >
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}