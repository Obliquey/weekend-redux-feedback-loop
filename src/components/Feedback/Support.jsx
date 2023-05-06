import { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Support() {
    const [supportInput, setSupportInput] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const handleSubmit = (event) => {
        event.preventDefault();
        if(!!supportInput) {
            if(isNaN(supportInput) || supportInput > 5 || supportInput < 1) {
                alert("Please input a number between 1-5")
            }
            else {
                dispatch({
                    type: 'SUPPORT',
                    payload: supportInput
                })
                navigate('../comments')
            }

        }
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