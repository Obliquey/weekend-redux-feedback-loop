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
            <h2 className="text-2xl mb-8 font-sans font-semibold">How are you feeling today?</h2>
            <form 
                id="FeelingsForm"
                onSubmit={handleSubmit}>
                <TextField
                    type="text" 
                    label="Feelings"
                    value={feelingInput}
                    onChange={(event) => setFeelingInput(event.target.value)}
                    helperText="Scale of 1-5"/>
            </form>
            <div className="mt-10 object-center">
                <Button 
                    form="FeelingsForm"
                    type="submit"
                    variant="contained">Next</Button>
            </div>
        </>
    )
}
export default Feeling;