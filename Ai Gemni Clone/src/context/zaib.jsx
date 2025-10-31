import { createContext, useState } from "react";
import Reply from "../backEnd";
export const contexts = createContext(0);

function Zaib({ children }) {

   
    const [Input, setInput] = useState("")

    const wow = {
        Input,
        setInput,
        Reply,
    }




    return (
        <contexts.Provider value={wow}>
            {children}
        </contexts.Provider>)
};

export default Zaib;