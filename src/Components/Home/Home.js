import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import FunctionBaseUseContext from '../FunctionBaseContext'
import ClassBaseUseContext from '../ClassBaseUseContext'

export const MyContext = React.createContext()

const Home = () => {
    const [bgColor, setBgColor] = useState(true)

    return (
        <MyContext.Provider value={bgColor}>
            <div>
                <Button variant="contained" color="primary" onClick={() => setBgColor(!bgColor)} >
                    Change Background color
                </Button>
            </div>
            <div className="mt-3 mb-3">
                <ClassBaseUseContext />
            </div>
            <div className="mt-3 mb-3">
                <FunctionBaseUseContext />
            </div>
        </MyContext.Provider>
    );
};
export default Home;
