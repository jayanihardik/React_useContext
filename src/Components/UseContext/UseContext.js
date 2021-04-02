import React from "react";
import FunctionSubUseContext from './FunctionSubUseContext/FunctionSubUseContext';

import { ThemeContext } from './ThemeContext/ThemeContext'

const UseContext = () => {
    return (
        <ThemeContext>
            <div className="mt-3 mb-3">
                <FunctionSubUseContext />
            </div>
        </ThemeContext>
    )
}

export default UseContext