import { useContext, createContext } from "react";
export const Notecontext = createContext({
    notes:[],
    tags:[],
    addTag:(tagname)=>{},
    addnotes:(note, tag, title)=>{},
    deletenote:(id)=>{},
    updatenote:(id)=>{},
})
export const useNotes= ()=>{
    return useContext(Notecontext)
}
export const NoteProvider = Notecontext.Provider;