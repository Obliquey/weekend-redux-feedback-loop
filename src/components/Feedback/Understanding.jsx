import { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Understanding() {
    const [understandInput, setUnderstandInput] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        if(!!understandInput) {
            if(isNaN(understandInput) || understandInput > 5 || understandInput < 1) {
                alert("Please input a number between 1-5")
            }
            else {
                dispatch({
                    type: 'UNDERSTANDING',
                    payload: understandInput
                })
                navigate('../support')
            }

        }
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