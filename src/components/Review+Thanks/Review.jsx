import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { List, ListItem, ListItemIcon, ListItemText, ListItemButton, Divider, Box } from "@mui/material";
import { legacy_createStore } from "redux";


function Review() {
    const navigate = useNavigate();
    const feedback = useSelector(store => store.feedback);

    // if I use MUI's list, I need to make the feedback into a single returnable statment
    const feelingsFeedback = () => {
        return `Feelings: ${feedback.feelings}`
    }

    // otheriwse if I use a normal UL with LI, then I would want to check if there was feedback given. Maybe even conditionally render the comments bit, since comments are optional?
    const checkInput = (fdbck) => {
        if (fdbck) {
            return fdbck;
        }
        else {
            return 'No Feedback'
        }
    }

    const handleSubmit = () => {
        axios({
            method: 'POST',
            url:'/feedback',
            data: feedback
        }).then((res) => {
            console.log('Successfully sent our inquiry to server');
        }).catch((err) => {
            console.log("couldn't connect to server", err);
        })  
        navigate('../thanks')
    }

    return (

        <>
            {/* vvvvv MIGHT USE MUI LIST STYLE, MAYBE vvvvv */}
            {/* <Box>
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>

                        </ListItemIcon>
                        <ListItemText primary={feelingsFeedback()}/>
                    </ListItemButton>
                </ListItem>
            </List> */}
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
            {/* </Box> */}
            
        </>
    )
}
export default Review;