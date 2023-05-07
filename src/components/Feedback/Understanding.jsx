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
            <h2 className="text-2xl mb-8 font-sans font-semibold">How well do you feel you understood today's material?</h2>
            <form 
                id="UnderstandingForm"
                onSubmit={handleSubmit}>
                <TextField
                    type="text" 
                    label="Understanding"
                    value={understandInput}
                    onChange={(event) => setUnderstandInput(event.target.value)}
                    helperText="Scale of 1-5"/>
            </form>
            <div className="mt-10 flex space-x-1 justify-center">
                <Button 
                    variant="outlined"
                    onClick={() => navigate('../')}
                >Back</Button>
                <Button 
                    form="UnderstandingForm"
                    className=""
                    type="submit"
                    variant="contained">Next</Button>
            </div>
        </>
    )
}
export default Understanding;