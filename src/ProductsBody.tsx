import React, { useState } from 'react';
import { withAppliedStyles } from './hoc';
import useProducts from './hooks';
import TableHeader from './components/TableHeader';
import TableBody from './components/TableBody';
import ProductsTable from './components/ProductsTable';

const headers = ['Name',
    'Description',
    'ReleaseDate',
    'DiscontinuedDate',
    'Rating',
    'Price'];

const ProductsBodyBase: React.FC = () => {
    const [products, isFetching] = useProducts();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const showProductsTable = () => {
        return <ProductsTable {...{
            page,
            rowCount: products.length,
            rowsPerPage,
            handlePageChange: (e, n) => setPage(n),
            handleRowsPerPageChange: e => {
                setRowsPerPage(parseInt(e.target.value, 10));
                setPage(0);
            }
        }}>
            <TableHeader {...{ headers }} />
            <TableBody {...{
                products: products.slice(page * rowsPerPage,
                    rowsPerPage * (page + 1))
            }} />
        </ProductsTable>
    }

    return <>{!isFetching &&
        Array.isArray(products) &&
        showProductsTable()}</>
}

export const ProductsBody = () => withAppliedStyles(ProductsBodyBase);