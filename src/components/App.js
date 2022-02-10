import './App.scss';
import React from "react";
import {Header} from "./Header/Header";
import {Body} from "./Body/Body";
import {InMemoryCache, useQuery} from "@apollo/client";
import {GET_CATEGORIES, GET_CATEGORY, GET_CURRENCIES} from "../constants/apolloQueries/queries";
import { Query } from '@apollo/client/react/components';
import {ApolloClient, gql} from "@apollo/client";
import {graphql} from "@apollo/client/react/hoc";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000"
});



export default class App extends React.Component{
  constructor(props) {
    super(props);
  }


  render() {

    return (
        <>
          <Query query={GET_CATEGORIES()}>
            {({loading, error, data}) =>{
              if (loading)
                return <p>Loading...</p>
              if (error)
                return <p>An Error has occurred! {error.message}</p>
              const {categories} = data;
              return <Header categories={categories}/>
            }}
          </Query>
          <Query query={GET_CURRENCIES()}>
            {({loading, error, data}) =>{
              if (loading)
                return <p>Loading...</p>
              if (error)
                return <p>An Error has occurred! {error.message}</p>
              const {currencies} = data;
              return currencies.map(c=><p key={c.label}>{c.label + ' ' + c.symbol}</p>)
            }}
          </Query>
          <Query query={GET_CATEGORY()} variables={{title: "all"}}>
            {({loading, error, data}) =>{
              if (loading)
                return <p>Loading...</p>

              if (error)
                return <p>An Error has occurred! {error.message}</p>

              const {category: {products}} = data;
              return <Body products={products}/>
            }}
          </Query>

        </>
    );
  }
}


// export default function App() {
//
//   const {loading, error, data} = useQuery(CATEGORIES());
//
//   if (loading)
//     return <p>Loading...</p>;
//   if (error)
//     return <p>Error :(</p>;
//
//   console.log(data.categories)
//   return (
//       <>
//         <Header categories={data.categories}/>
//         <Body/>
//       </>
//   );
// }

