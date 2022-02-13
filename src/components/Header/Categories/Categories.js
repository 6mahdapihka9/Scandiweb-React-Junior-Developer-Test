import React from "react";
import './Categories.scss';

export class Categories extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
        <>
          {
            this.props.categories.map(c => c
            )
          }
        </>
    );
  }
}
