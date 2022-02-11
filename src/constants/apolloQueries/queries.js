import {gql} from "@apollo/client";

export const GET_CATEGORIES = () => gql`
    query GET_CATEGORIES{
        categories{
            name
        }
    }
`;

export const GET_CATEGORY = () => gql`
    query GET_CATEGORY($title: String!){
        category(input: {title: $title}){
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
    }
`;

export const GET_PRODUCT = () => gql`
    query GET_PRODUCT($id: String!){
        product(id: $id){
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

export const GET_CURRENCIES = () => gql`
    query GET_CURRENCIES{
        currencies{
            label
            symbol
        }
    }
`;
