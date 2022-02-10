import React from "react";
import './Header.scss';

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
        <header>
          {
            this.props.categories.map(c => <p key={c.name}>{c.name}</p>)
          }
        </header>
    );
  }
}
