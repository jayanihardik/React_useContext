import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MyContext } from '../Home/Home'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    root1: {
        minWidth: 275,
        background: "blanchedalmond"
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
});


const FunctionBaseContext = () => {
    const classes = useStyles();
    const isBackground = useContext(MyContext)
    return (
        <Card className={isBackground ? classes.root : classes.root1}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    FunctionBaseContext
                 </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    adjective
                </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained" color="primary">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default FunctionBaseContext
