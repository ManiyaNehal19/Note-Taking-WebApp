import { useState } from "react";
import { createContext, useContext } from "react";

const ViewContext  = createContext();
export function ViewProvider({children}){
    const [activeFilter, setactiveFilter] = useState("All Notes");
    const [notesID, setNotesID] = useState(null);
    const changeActiveFilter = (filtername)=>{
        setactiveFilter(filtername);
        setNotesID(null)
    }
    const changeNotesId = (noteid)=>{
        setNotesID(noteid);
    }
    return (
        <ViewContext.Provider value={
            {activeFilter,
            notesID,
            changeActiveFilter,
            changeNotesId}
        }>
            {children}
            </ViewContext.Provider>
    );
}
export function useView(){
    return useContext(ViewContext)
}