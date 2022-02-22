import React from "react";
import './CategoryPage.scss';
import {withRouter} from '../../../hooks/withRouter';
import {GET_CATEGORY} from "../../../constants/apolloQueries/queries";
import {Query} from "@apollo/client/react/components";
import Product from "./Product/ProductBlock";
import {v4} from 'uuid';

class CategoryPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <>
          <h1 className={'title lighter-title'}>{this.props.params.category}</h1>
          <div className={'container '}>
            <Query query={GET_CATEGORY()} variables={{title: this.props.params.category}}>
              {({loading, error, data}) => {
                if (loading) return <div className={'loader'}>Loading...</div>

                if (error) return <div className={'error'}>An Error has occurred! {error.message}</div>

                const {category: {products}} = data;
                return products.map(p => <Product key={v4()} product={p}/>)
              }}
            </Query>
          </div>
        </>
    );
  }
}

export default withRouter(CategoryPage)
