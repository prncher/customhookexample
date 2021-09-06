import React from 'react';
import {
    makeStyles, Paper, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, withStyles
} from '@material-ui/core';
import useProducts from './hooks';

const headers = ['Name',
    'Description',
    'ReleaseDate',
    'DiscontinuedDate',
    'Rating',
    'Price'];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

export const ProductsBody: React.FC = () => {
    const [products, isFetching] = useProducts();
    const classes = useStyles();

    const showHeader = () => {
        return <TableHead>
            <TableRow>
                {headers.map((h, i) =>
                    <StyledTableCell key={i}>{h}</StyledTableCell>)}
            </TableRow>
        </TableHead>
    }

    const showTableBody = () => {
        return <TableBody>
            {products.map(p => <StyledTableRow key={p.ID}>
                <StyledTableCell>{p.Name}</StyledTableCell>
                <StyledTableCell>{p.Description}</StyledTableCell>
                <StyledTableCell>{p.ReleaseDate ?
                    new Date(p.ReleaseDate).toISOString().slice(0, 10):
                    'N/A'}</StyledTableCell>
                <StyledTableCell>{p.DiscontinuedDate ?
                    new Date(p.DiscontinuedDate).toISOString().slice(0, 10):
                    'N/A'}</StyledTableCell>
                <StyledTableCell>{p.Rating}</StyledTableCell>
                <StyledTableCell>{p.Price}</StyledTableCell>
            </StyledTableRow>)}
        </TableBody>

    }

    const showProductsTable = () => {
        return <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="Products">
                {showHeader()}
                {showTableBody()}
            </Table>
        </TableContainer>
    }

    return <>{!isFetching &&
        Array.isArray(products) &&
        showProductsTable()}</>

}