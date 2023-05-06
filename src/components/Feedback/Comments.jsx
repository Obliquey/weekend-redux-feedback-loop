import { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button } from "@mui/material";

function Comments() {
    const [commentsInput, setCommentsInput] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Pressed the Comments button! Here is the input:', commentsInput)
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
                    multiline maxRows={10} />
                <Button 
                    type="submit"
                    variant="contained">Next</Button>
            </form>
        </>
    )
}
export default Comments;