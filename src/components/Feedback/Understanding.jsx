import { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button } from "@mui/material";

function Understanding() {
    const [understandInput, setUnderstandInput] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Pressed the Understanding button! Here is the input:', understandInput)
    }

    return (
        <>
            <h2>How well do you feel you understood today's material?</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    type="text" 
                    label="Understanding"
                    value={understandInput}
                    onChange={(event) => setUnderstandInput(event.target.value)}
                    helperText="Scale of 1-5"/>
                <Button 
                    type="submit"
                    variant="contained">Next</Button>
            </form>
        </>
    )
}
export default Understanding;