import { Theme } from "@material-ui/core"

export const styles = (theme: Theme) => {
    return {
        productsTable: {
            minWidth: 700,
        },
        tableRow: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
            '&:nth-of-type(even)': {
                backgroundColor: '#aaa',
            },
        },
        tableHeaderCell: {
            fontSize: 16,
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        }
    }
}