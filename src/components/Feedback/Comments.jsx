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
        navigate('../review')
    }

    return (
        <>
            <h2 className="text-2xl mb-8 font-sans font-semibold">Any comments?</h2>
            <form id="CommentsForm" onSubmit={handleSubmit}>
                <TextField
                    type="text" 
                    label="Comments"
                    value={commentsInput}
                    onChange={(event) => setCommentsInput(event.target.value)}
                    multiline maxRows={10} 
                    helperText="Optional"
                    />
            </form>
            <div className="mt-10 flex space-x-1 justify-center">
                <Button 
                    variant="outlined"
                    onClick={() => navigate('../support')}
                >Back</Button>
                <Button 
                    form="CommentsForm"
                    type="submit"
                    variant="contained">Next</Button>
            </div>
        </>
    )
}
export default Comments;