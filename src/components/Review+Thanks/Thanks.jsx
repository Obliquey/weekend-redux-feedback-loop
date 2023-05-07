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
            <h2 className="text-2xl mb-8 font-sans font-semibold">Thank you for your feedback!</h2>
            <div className="mt-10 flex space-x-1 justify-center">
                <Button
                    variant="contained"
                    onClick={() => reset()}
                    >Leave New Feedback</Button>
            </div>
        </>
    )
}
export default Thanks;