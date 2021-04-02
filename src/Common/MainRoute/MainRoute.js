import React from 'react'
import { Switch, Route } from "react-router-dom";
import Container from '@material-ui/core/Container';

import NavBar from '../../Common/Navbar'
import Home from '../../Components/Home'
import UseContext from '../../Components/UseContext'

const MainRoute = () => {
    return (
        <>
            <NavBar />
            <Container maxWidth="lg" className="margin-30">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/useContext" component={UseContext} />
                </Switch>
            </Container>
        </>
    )
}

export default MainRoute
