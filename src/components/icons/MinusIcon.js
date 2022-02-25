import React from "react";

export default class MinusIcon extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={this.props.width || '24'} height={this.props.height || '24'} viewBox="0 0 24 24">
          <path fill={this.props.color} d="M0 10h24v4h-24z"/>
        </svg>
    )
  }
}
