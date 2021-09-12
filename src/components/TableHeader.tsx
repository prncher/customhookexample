import React, { useContext } from 'react';
import { TableHead, TableRow, TableCell } from '@material-ui/core';
import { StylesContext } from '../styles';

interface TableHeaderProps {
    headers: string[];
}

const TableHeader: React.FC<TableHeaderProps> = (props) => {
    const { classes } = useContext(StylesContext);
    return <TableHead>
        <TableRow>
            {props.headers.map((h, i) =>
                <TableCell
                    className={classes.tableHeaderCell}
                    key={i}>{h}</TableCell>)}
        </TableRow>
    </TableHead>
}

export default TableHeader;