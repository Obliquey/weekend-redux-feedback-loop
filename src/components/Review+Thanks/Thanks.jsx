import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Thanks() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const reset = () => {
        dispatch({
            type: 'RESET'
        })

        navigate('../')
    }
    return (
        <>
            <h2>Thank you for your feedback!</h2>
            <Button
                variant="contained"
                onClick={() => reset()}
            >Leave New Feedback</Button>
        </>
    )
}
export default Thanks;