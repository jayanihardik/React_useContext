import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useTheme, useThemeUpdate } from '../ThemeContext/ThemeContext'

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

const FunctionSubUseContext = () => {
    const classes = useStyles();
    const isBackground = useTheme()
    const setBgColor = useThemeUpdate()
    return (
        <>
            <div className="mb-4">
                <Button variant="contained" color="primary" onClick={setBgColor} >
                    Change Background color
                </Button>
            </div>
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
        </>
    )
}
export default FunctionSubUseContext
