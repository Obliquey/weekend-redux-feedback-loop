import axios from "axios";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import logger from "redux-logger";

function Admin() {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        getTableData();
    }, [])

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

    return (

        <>
            Hello
        </>
    )
}
export default Admin;