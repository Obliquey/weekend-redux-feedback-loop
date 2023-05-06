import { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button } from "@mui/material";

function Support() {
    const [supportInput, setSupportInput] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Pressed the Support button! Here is the input:', supportInput)
    }

    return (
        <>
            <h2>How well do you feel supported?</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    type="text" 
                    label="Support"
                    value={supportInput}
                    onChange={(event) => setSupportInput(event.target.value)}
                    helperText="Scale of 1-5"/>
                <Button 
                    type="submit"
                    variant="contained">Next</Button>
            </form>
        </>
    )
}
export default Support;