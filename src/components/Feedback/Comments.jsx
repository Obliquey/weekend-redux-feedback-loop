import { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Comments() {
    const [commentsInput, setCommentsInput] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'COMMENTS',
            payload: commentsInput
        })
        navigate('../')
    }

    return (
        <>
            <h2>Any comments?</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    type="text" 
                    label="Comments"
                    value={commentsInput}
                    onChange={(event) => setCommentsInput(event.target.value)}
                    multiline maxRows={10} 
                    helperText="Optional"/>
                <Button 
                    type="submit"
                    variant="contained">Next</Button>
            </form>
        </>
    )
}
export default Comments;