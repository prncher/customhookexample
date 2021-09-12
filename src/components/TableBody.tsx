import React, { useContext } from 'react';
import { Product } from '../hooks';
import { TableBody as Body, TableCell, TableRow } from '@material-ui/core';
import { StylesContext } from '../styles';

interface TableBodyProps {
    products: Product[];
}

const TableBody: React.FC<TableBodyProps> = (props) => {
    const { classes } = useContext(StylesContext);
    return <Body>
        {props.products.map(p => <TableRow className={classes.tableRow} key={p.ID}>
            <TableCell>{p.Name}</TableCell>
            <TableCell>{p.Description}</TableCell>
            <TableCell>{p.ReleaseDate ?
                new Date(p.ReleaseDate).toISOString().slice(0, 10) :
                'N/A'}</TableCell>
            <TableCell>{p.DiscontinuedDate ?
                new Date(p.DiscontinuedDate).toISOString().slice(0, 10) :
                'N/A'}</TableCell>
            <TableCell>{p.Rating}</TableCell>
            <TableCell>{p.Price}</TableCell>
        </TableRow>)}
    </Body>
}

export default TableBody;