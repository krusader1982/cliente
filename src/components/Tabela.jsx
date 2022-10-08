import React from 'react'
import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper } from '@mui/material'

export const Tabela = () => {
  return (
    <TableContainer component={Paper} >
        <Table aria-label='simple table' >
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {tableData.map((row)=> (
                    <TableRow
                        key={row.id}
                        sx={{'&:last-child td, &:last-child th': {border:0}}}
                    >
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.first_name}</TableCell>
                        <TableCell>{row.last_name}</TableCell>
                        <TableCell>{row.email}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

const tableData = [
    {
    "id":1,
    "first_name": "Samuel",
    "last_name": "Xavier",
    "email": "sam@gmail.com",
    "gender":"Male",
    "ip_address":"58.255.78.254"
},
{
    "id":2,
    "first_name": "Una",
    "last_name": "Chiva",
    "email": "una@gmail.com",
    "gender":"Female",
    "ip_address":"558.55.78.300"
}
]

export default Tabela