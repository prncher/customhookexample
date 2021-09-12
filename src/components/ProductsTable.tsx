import React, { useContext } from 'react';
import { TableContainer, Paper, Table, TablePagination, FormControlLabel, Switch } from '@material-ui/core';
import { StylesContext } from '../styles';
interface PaginationProps {
    page: number
    rowCount: number;
    rowsPerPage: number;
    handlePageChange: (event: React.MouseEvent<HTMLButtonElement> | null,
        page: number) => void;
    handleRowsPerPageChange?: React.ChangeEventHandler<
        HTMLTextAreaElement | HTMLInputElement>;
    children?: React.ReactNode;
}
const ProductsTable: React.FC<PaginationProps> = (props) => {
    const { classes } = useContext(StylesContext);
    const { page, rowCount, rowsPerPage,
        handlePageChange, handleRowsPerPageChange } = props;
    const [dense, setDense] = React.useState(false);
    let ref = React.createRef<typeof TablePagination>();
    return <div>
        <Paper>
            <TableContainer component={Paper}>
                <Table className={classes.productsTable}
                    size={dense ? 'small' : 'medium'}
                    aria-label="Products">
                    {props.children}
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rowCount}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
            />
        </Paper>
        <FormControlLabel
            control={<Switch
                checked={dense}
                onChange={e => setDense(e.target.checked)} />}
            label="Dense padding"
        />
    </div>
}
export default ProductsTable;