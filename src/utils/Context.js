import { useState,useContext, createContext } from "react";

const snackbarContext = createContext()
const updateSnackbarContext = createContext()

export const useSnackbar = () => {return useContext(snackbarContext)}

export const useSnackbarUpdate = () => {return useContext(updateSnackbarContext)}

export const ContextProvider = ({children}) => {
    const [snackbar, setSnackbar] = useState('')
    
    return(
        <snackbarContext.Provider value={snackbar}>
            <updateSnackbarContext.Provider value={setSnackbar}>
                {children}
            </updateSnackbarContext.Provider>
        </snackbarContext.Provider>
    )
}
