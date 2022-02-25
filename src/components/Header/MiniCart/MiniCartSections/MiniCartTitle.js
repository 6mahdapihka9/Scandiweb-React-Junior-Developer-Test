import React from "react";

class MiniCartTitle extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={'mini-cart-title'}>
          <h3>My Bag</h3>
          {
            this.props.productsAmount ?
                <h3 className={'lighter-title'}>
                  , {this.props.productsAmount} item{this.props.productsAmount > 1 ? 's' : ''}
                </h3> : null
          }
        </div>
    )
  }
}

export default MiniCartTitle
