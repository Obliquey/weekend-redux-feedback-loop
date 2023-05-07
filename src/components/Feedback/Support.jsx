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
            <h2 className="text-2xl mb-8 font-sans font-semibold">How well do you feel supported?</h2>
            <form id="SupportForm" onSubmit={handleSubmit}>
                <TextField
                    type="text" 
                    label="Support"
                    value={supportInput}
                    onChange={(event) => setSupportInput(event.target.value)}
                    helperText="Scale of 1-5"/>
            </form>
            <div className="mt-10 flex space-x-1 justify-center">
                <Button 
                    variant="outlined"
                    onClick={() => navigate('../understanding')}
                >Back</Button>
                <Button 
                    form="SupportForm"
                    type="submit"
                    variant="contained">Next</Button>
            </div>
        </>
    )
}
export default Support;