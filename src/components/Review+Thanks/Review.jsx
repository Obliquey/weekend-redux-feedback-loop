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
            <ul className="">
                <li>Feelings: {checkInput(feedback.feelings)}</li>
                <li>Understanding: {checkInput(feedback.understanding)}</li>
                <li>Support: {checkInput(feedback.support)}</li>
                <li>Comments: {checkInput(feedback.comments)}</li>
            </ul>
            <Button
                onClick={() => handleSubmit()}
                variant="contained"
            >Submit</Button>
            {/* </Box> */}
        </>
    )
}
export default Review;