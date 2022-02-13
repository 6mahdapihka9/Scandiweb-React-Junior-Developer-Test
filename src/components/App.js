import './App.scss';
import React from "react";
import {Header} from "./Header/Header";
import {Body} from "./Body/Body";
import {GET_CATEGORIES, GET_CATEGORY, GET_CURRENCIES} from "../constants/apolloQueries/queries";
import {Query} from '@apollo/client/react/components';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
        <>
          <Query query={GET_CATEGORIES()}>
            {({loading, error, data}) => {
              if (loading)
                return <p>Loading...</p>
              if (error)
                return <p>An Error has occurred! {error.message}</p>
              const {categories} = data;
              return <Header categories={categories}/>
            }}
          </Query>
          {/*<Header/>*/}
          <Body/>

          {/*<Query query={GET_CURRENCIES()}>*/}
          {/*  {({loading, error, data}) =>{*/}
          {/*    if (loading)*/}
          {/*      return <p>Loading...</p>*/}
          {/*    if (error)*/}
          {/*      return <p>An Error has occurred! {error.message}</p>*/}
          {/*    const {currencies} = data;*/}
          {/*    return currencies.map(c=><p key={c.label}>{c.label + ' ' + c.symbol}</p>)*/}
          {/*  }}*/}
          {/*</Query>*/}
          {/*<Query query={GET_CATEGORY()} variables={{title: "all"}}>*/}
          {/*  {({loading, error, data}) =>{*/}
          {/*    if (loading)*/}
          {/*      return <p>Loading...</p>*/}

          {/*    if (error)*/}
          {/*      return <p>An Error has occurred! {error.message}</p>*/}

          {/*    const {category: {products}} = data;*/}
          {/*    return <Body products={products}/>*/}
          {/*  }}*/}
          {/*</Query>*/}

        </>
    );
  }
}
