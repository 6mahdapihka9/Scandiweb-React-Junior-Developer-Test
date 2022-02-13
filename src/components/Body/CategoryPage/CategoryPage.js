import React from "react";
import './CategoryPage.scss';
import { connect } from "react-redux";
import { withRouter } from '../../../hooks/withRouter'
import {GET_CATEGORY} from "../../../constants/apolloQueries/queries";
import {Query} from "@apollo/client/react/components";
import Product from "./Product/Product";
import {v4} from 'uuid';

class CategoryPage extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    // console.log(this.props)
    // console.log(this.props.params)
    return (
        <>
          <h1>{this.props.params.category}</h1>
          <Query query={GET_CATEGORY()} variables={{title: this.props.params.category}}>
            {({loading, error, data}) =>{
              if (loading)
                return <p>Loading...</p>

              if (error)
                return <p>An Error has occurred! {error.message}</p>

              const {category: {products}} = data;
              return (
                  products.map(p => <Product key={v4()} product={p}/> )
              )
            }}
          </Query>
        </>
    );
  }
}

export default withRouter(connect()(CategoryPage))
