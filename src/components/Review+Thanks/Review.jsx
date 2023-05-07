import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { List, ListItem, ListItemIcon, ListItemText, ListItemButton, Divider, Box } from "@mui/material";
import { legacy_createStore } from "redux";


function Review() {
    const navigate = useNavigate();
    const feedback = useSelector(store => store.feedback);

    // otheriwse if I use a normal UL with LI, then I would want to check if there was feedback given. Maybe even conditionally render the comments bit, since comments are optional?
    const checkInput = (fdbck) => {
        if (fdbck) {
            return fdbck;
        }
        else {
            return 'No Feedback'
        }
    }

    // now that the user is finished entering in their feedback, they can click submit and actually POST the information object to the database.
    const handleSubmit = () => {
        axios({
            method: 'POST',
            url:'/feedback',
            data: feedback
        }).then((res) => {
            console.log('Successfully sent our inquiry to server');
            navigate('../thanks')
        }).catch((err) => {
            console.log("couldn't connect to server", err);
        })  
    }

    return (

        <>
            <div className="max-w-sm self-center">
                <ul className="text-2xl mb-8 font-sans font-medium">
                    <li className="mt-3">Feelings: {checkInput(feedback.feelings)}</li>
                    <li className="mt-3">Understanding: {checkInput(feedback.understanding)}</li>
                    <li className="mt-3">Support: {checkInput(feedback.support)}</li>
                    <li className="mt-3">Comments: {checkInput(feedback.comments)}</li>
                </ul>
            </div>
            <div className="mt-8 flex space-x-1 justify-center">
                <Button 
                    variant="outlined"
                    onClick={() => navigate('../comments')}
                >Back</Button>
                <Button
                    onClick={() => handleSubmit()}
                    variant="contained"
                >Submit</Button>
            </div>
        </>
    )
}
export default Review;