import React from "react";

export default class PlusIcon extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={this.props.width || '24'} height={this.props.height || '24'} viewBox="0 0 24 24">
          <path fill={this.props.color} d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
        </svg>
    )
  }
}

