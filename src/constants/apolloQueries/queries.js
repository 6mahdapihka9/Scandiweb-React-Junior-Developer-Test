import {gql} from "@apollo/client";

export const CATEGORIES = () => gql`
    query{
        categories{
            name
        }
    }
`;

export const CATEGORY = title => gql`
    query{
        category(input: {title: ${title}}){
            products{
                id
                name
                inStock
                gallery
                description
                category
                attributes{
                    id
                    name
                    type
                    items{
                        displayValue
                        value
                        id
                    }
                }
                prices
                brand
            }
        }
    }
`;

export const PRODUCT = id => gql`
    query{
        product(id: ${id}){
            id
            name
            inStock
            gallery
            description
            category
            attributes{
                id
                name
                type
                items{
                    displayValue
                    value
                    id
                }
            }
            prices{
                currency{
                    label
                    symbol
                }
                amount
            }
            brand
        }
    }
`;

export const CURRENCIES = () => gql`
    query{
        currencies{
            label
            symbol
        }
    }
`;
