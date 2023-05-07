import axios from "axios";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import { useEffect, useState } from "react";
import logger from "redux-logger";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { DialogActions, Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

function Admin() {
    const [tableData, setTableData] = useState([]);
    // open state for dialog
    const [open, setOpen] = useState(false);
    // temp store for ID of table element to be deleted
    const [deleteID, setID] = useState();

    useEffect(() => {
        getTableData();
    }, [])

    // retrieve data from database for table display
    const getTableData = () => {
        console.log("In getTableData")
        axios({
            method: 'GET',
            url: '/feedback'
        }).then((res) => {
            setTableData(res.data);
            console.log("Got our Table Data!:", res.data);
        }).catch((err) => {
            console.log("Error retrieving data from database");
        })
    }

    // need alert for deleting table elements
    function openAlert(id) {
        alert("ID TO DELETE:", id)
        // setID to element to be deleted
        setID(id);
        // need to have a confirm delete alert
        // setOpen(true);
    }
    const closeAlert = () => {
        setOpen(false);
        setID(false);
    }

    // now's the function to actually delete the table item with a DELETE req
    const handleDelete = (id) => {
        // alert("trying to delete this one =>", id);
        // axios({
        //     method: 'DELETE',
        //     url: `/feedback/${id}`,
        // }).then((res) => {
        //     console.log("Successfully deleted table element");
        //     getTableData();
        //     setOpen(false);
        // }).catch((err) => {
        //     alert("Error deleting table element");
        // })
    }

    return (

        <>
            <TableContainer sx={{}}>
                <Table sx={{ maxWidth: 850, margin: 'auto' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Feeling</TableCell>
                            <TableCell align="right">Comprehension</TableCell>
                            <TableCell align="right">Support</TableCell>
                            <TableCell align="right">Comments</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            tableData.map((fdbck) => {
                                return (
                                    // These are the actual table elements, looped through from database data
                                    <TableRow key={fdbck.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell align="right">{fdbck.feeling}</TableCell>
                                        <TableCell align="right">{fdbck.understanding}</TableCell>
                                        <TableCell align="right">{fdbck.support}</TableCell>
                                        <TableCell align="right">{fdbck.comments}</TableCell>
                                        <TableCell>
                                            {/* this button deletes table elements EXCEPT it actually procs the alert to ask if the user certainly wants to delete element */}
                                            <Button startIcon={<DeleteForeverIcon />} onClick={() => openAlert(fdbck.id)}></Button>
                                        </TableCell>
                                        {/* vvvv This is all the modal/alert popup to make sure the user wants to delete the element */}
                                        {/* <Dialog
                                            // link it to the state open(true/false)
                                            open={open}
                                            // set the boundaries of the dialog, to be linked with the DialogTitle and DialogContentText
                                            aria-labelledby="alert-dialog-title"
                                            aria-describedby="alert-dialog-description"
                                            >
                                                <DialogTitle id="alert-dialog-title">{"Delete Feedback Item?"}</DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText id="alert-dialog-description">This cannot be undone</DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                    {/* These buttons appear on the dialog box, the user can choose between going back (setting the dialog's OPEN status to "false"), or deleting the element, proccing the axios call to delete this element */}
                                                    {/* <Button onClick={() => setOpen(false)}>Back</Button>
                                                    <Button onClick={() => alert(fdbck.id)}>Delete</Button>
                                                </DialogActions>

                                        </Dialog> */} 

                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Dialog
                // link it to the state open(true/false)
                open={open}
                // set the boundaries of the dialog, to be linked with the DialogTitle and DialogContentText
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Delete Feedback Item?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">This cannot be undone</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        {/* These buttons appear on the dialog box, the user can choose between going back (setting the dialog's OPEN status to "false"), or deleting the element, proccing the axios call to delete this element */}
                        <Button onClick={() => closeAlert()}>Back</Button>
                        <Button onClick={() => handleDelete(deleteID)}>Delete</Button>
                    </DialogActions>

            </Dialog>
        </>
    )
}
export default Admin;