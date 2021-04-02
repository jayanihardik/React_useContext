import React, { useContext, useState } from 'react'

export const MySubContext = React.createContext()
export const UpdateMySubContext = React.createContext()

export function useTheme() {
    return useContext(MySubContext)
}

export function useThemeUpdate() {
    return useContext(UpdateMySubContext)
}

export function ThemeContext({ children }) {
    const [theme, setTheme] = useState(true)

    const changeTheme = () => {
        setTheme(!theme)
    }

    return (
        <MySubContext.Provider value={theme} >
            <UpdateMySubContext.Provider value={changeTheme}>
                {children}
            </UpdateMySubContext.Provider>
        </MySubContext.Provider>
    )
}
