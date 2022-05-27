import { gql, useLazyQuery, useQuery } from '@apollo/client';
import React, { useState } from 'react';

const QUERY_ALL_PEODUCTS = gql`
    query {
        products {
            name
            price
            category {
            name
            }
        }
    }
`;

function DisplayData() {
    const { data, loading } = useQuery(QUERY_ALL_PEODUCTS);

    if(data) {
        console.log(data);
    }

    return (
        <div>
            {data && data.products.map(product => {
                return <div>
                    <h2>{product.name}</h2>
                </div>
            })}
        </div>
    );
}

export default DisplayData;

