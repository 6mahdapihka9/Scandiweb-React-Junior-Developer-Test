import React from "react";
import './NavBar.scss';
import {NavLink} from "react-router-dom";
import {GET_CATEGORIES} from "../../../constants/apolloQueries/queries";
import {Query} from "@apollo/client/react/components";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <>
          <Query query={GET_CATEGORIES()}>
            {({loading, error, data}) => {
              if (loading) return <p>Loading...</p>

              if (error) return <p>An Error has occurred! {error.message}</p>

              const {categories} = data;
              return (
                  <nav>
                    {categories.map(c => (
                        <NavLink
                            to={`/categories/${c.name}`}
                            key={c.name}
                        >
                          {c.name}
                        </NavLink>
                    ))}
                  </nav>
              )
            }}
          </Query>
        </>
    );
  }
}

export default NavBar;
