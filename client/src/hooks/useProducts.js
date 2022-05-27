import { gql, useQuery } from '@apollo/client';

const QUERY_ALL_PEODUCTS = gql`
    query {
        products {
            name
            price
        }
    }
`;

const useProducts = () => {

    const {error, data, loading} = useQuery(QUERY_ALL_PEODUCTS);

    return {
        error,
        data,
        loading
    };
};

export default useProducts;