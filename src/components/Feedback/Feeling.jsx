import { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Feeling() {
    const [feelingInput, setFeelingInput] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleSubmit = (event) => {
        event.preventDefault();
        if(!!feelingInput) {
            if(isNaN(feelingInput) || feelingInput > 5 || feelingInput < 1) {
                alert("Please input a number between 1-5")
            }
            else {
                dispatch({
                    type: 'FEELINGS',
                    payload: feelingInput
                })
                navigate('understanding')
            }

        }
    }

    return (
        <>
            <h2>How are you feeling today?</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    type="text" 
                    label="Feelings"
                    value={feelingInput}
                    onChange={(event) => setFeelingInput(event.target.value)}
                    helperText="Scale of 1-5"/>
                <Button 
                    type="submit"
                    variant="contained">Next</Button>
            </form>
        </>
    )
}
export default Feeling;