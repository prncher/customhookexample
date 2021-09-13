import React from 'react';
import ProductsTable, { PaginationProps, ProductsTableType } from './ProductsTable';

interface ProductsTableRefProps {
    node: Node
}

// const Div = React.forwardRef<HTMLDivElement>((props, divRef) => {
//     return <div ref={divRef} />;
// });

// const DivRef: React.FC<ProductsTableRefProps> = (props) => {
//     const input = React.useRef<HTMLDivElement>(null);

//     React.useEffect(() => {
//         if (input.current) {
//             input.current.appendChild(props.node)
//         }
//     }, [input, props.node]);

//     return <Div ref={input} />;
// }

// Usage :<DivRef node={document.createTextNode('I am testing, Prince')} />


const ProductsTableRef = React.forwardRef<React.FC<ProductsTableType>, PaginationProps>((props) => {
    const {ref, ...rest} = props;
    return <ProductsTable ref={ref} {...rest} />;
});

export default ProductsTableRef;