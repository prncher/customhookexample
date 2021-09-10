import React, { useContext } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow } from '@material-ui/core';
import useProducts from './hooks';
import { StylesContext } from './styles'
import { withAppliedStyles } from './hoc';

const headers = ['Name',
    'Description',
    'ReleaseDate',
    'DiscontinuedDate',
    'Rating',
    'Price'];

// Following is implemented using styles provider.
// const StyledTableCell = withStyles((theme) => ({
//     head: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//     },
//     body: {
//         fontSize: 14,
//     },
// }))(TableCell);

// Following is implemented using styles provider.
// const StyledTableRow = withStyles((theme) => ({
//     root: {
//         '&:nth-of-type(odd)': {
//             backgroundColor: theme.palette.action.hover,
//         },
//     },
// }))(TableRow);

const ProductsBodyBase: React.FC = () => {
    const [products, isFetching] = useProducts();
    const { classes } = useContext(StylesContext);
 
    const showHeader = () => {
        return <TableHead>
            <TableRow>
                {headers.map((h, i) =>
                    <TableCell className={classes.tableHeaderCell} key={i}>{h}</TableCell>)}
            </TableRow>
        </TableHead>
    }

    const showTableBody = () => {
        return <TableBody>
            {products.map(p => <TableRow className={classes.tableRow} key={p.ID}>
                <TableCell>{p.Name}</TableCell>
                <TableCell>{p.Description}</TableCell>
                <TableCell>{p.ReleaseDate ?
                    new Date(p.ReleaseDate).toISOString().slice(0, 10):
                    'N/A'}</TableCell>
                <TableCell>{p.DiscontinuedDate ?
                    new Date(p.DiscontinuedDate).toISOString().slice(0, 10):
                    'N/A'}</TableCell>
                <TableCell>{p.Rating}</TableCell>
                <TableCell>{p.Price}</TableCell>
            </TableRow>)}
        </TableBody>

    }

    const showProductsTable = () => {
        return <TableContainer component={Paper}>
            <Table className={classes.productsTable} aria-label="Products">
                {showHeader()}
                {showTableBody()}
            </Table>
        </TableContainer>
    }

    return <>{!isFetching &&
        Array.isArray(products) &&
        showProductsTable()}</>

}

export const ProductsBody = () => withAppliedStyles(ProductsBodyBase);