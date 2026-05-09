import { Button, Dialog, TextField } from "@radix-ui/themes";
import { createContext, useState, type PropsWithChildren } from "react";

type Note = {
    note: string;
    type: 'crime' | 'pessoa' | 'carteira' | 'entrevista' | 'facebook' | 'academia'
    id: number;
}

type NoteContextValue = {
    notes: Note[];
    addNote: (id: number, type: Note['type']) => void
}

export const NotesContext = createContext({} as NoteContextValue)

const NotesContextProvider = ({children}: PropsWithChildren) => {
    const [newNote, setNewNote] = useState<Partial<Note> | null>(null)
    const [notes, setNotes] = useState<Note[]>([{
        note: 'Annabel da Franklin Ave',
        type: 'pessoa',
        id: 16371
    }])

    const addNote: NoteContextValue['addNote'] = (id, type) => {
        setNewNote({
            id,
            type,
        })
    }

    return (
        <NotesContext.Provider value={{ notes, addNote }}>
            {children}
            <Dialog.Root open={!!newNote}>
                <Dialog.Content>
                    <TextField.Root 
                        onChange={(event) => setNewNote({
                            ...newNote,
                            note: event.target.value
                        })}
                        placeholder="note"
                    />
                    <Button onClick={() => {
                        setNotes([
                            ...notes,
                            newNote as Note
                        ])
                        setNewNote(null)
                    }}>
                        Enviar
                    </Button>
                </Dialog.Content>
            </Dialog.Root>
        </NotesContext.Provider>
    )
}

export default NotesContextProvider
