import React from "react";
import './CategoryPage.scss';
import { connect } from "react-redux";

class CategoryPage extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  render() {
    return (
        <>
          {
            this.props.category
          }
        </>
    );
  }
}
export default connect()(CategoryPage)
