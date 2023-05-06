import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom";

function Thanks() {
    const navigate = useNavigate();

    return (
        <>
            <h2>Thank you for your feedback!</h2>
            <Button
                variant="contained"
                onClick={() => navigate('../')}
            >Leave New Feedback</Button>
        </>
    )
}
export default Thanks;