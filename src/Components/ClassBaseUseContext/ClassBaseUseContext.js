import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { MyContext } from '../Home/Home'

const myStyle = {
    white: {
        background: "white"
    },
    blanchedalmond: {
        background: "rgb(45 51 84 / 50%)"
    }
}

export default class ClassBaseUseContext extends Component {
    render() {
        return (
            <MyContext.Consumer>{(isBackGround) => (
                <Card style={isBackGround ? myStyle.white : myStyle.blanchedalmond}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            ClassBaseUseContext
                        </Typography>
                        <Typography color="textSecondary">
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
            </MyContext.Consumer>
        )
    }
}
