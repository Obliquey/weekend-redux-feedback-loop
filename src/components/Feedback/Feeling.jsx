import { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Feeling() {
    const [feelingInput, setFeelingInput] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Pressed the Feelings button! Here is the input:', feelingInput)
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