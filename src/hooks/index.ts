import { useEffect, useState } from "react";

export interface Product {
    ID: number;
    Name: string;
    Description: string;
    ReleaseDate: Date;
    DiscontinuedDate: Date;
    Rating: number;
    Price: number;
}

const useProducts = () => {
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        let isMounted = true;
        setIsFetching(true);
        (async () => {
            await fetch('http://localhost:4000/products').then(r => {
                    (async () => {
                        const productsFetched = await r.json();
                        if (isMounted && productsFetched){
                            setProducts(productsFetched.value);
                            setIsFetching(false);
                        }
                    })();
                }).catch(() => {
                    setIsFetching(false);
                })
        })();

        return () => {
            isMounted = false;
        }
    }, []);

    return [products, isFetching] as const;
}

export default useProducts;