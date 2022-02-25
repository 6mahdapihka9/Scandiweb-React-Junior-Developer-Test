import React from "react";
import {withRouter} from "../../../../hooks/withRouter";
import {hideMiniCartAction} from "../../../../redux/minicart.actions";
import {connect} from "react-redux";

class MiniCartButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  onViewBagClick = () => {
    this.props.navigate('/cart')
  }

  render() {
    return (
        <div className={'mini-cart-buttons'}>
          <button onClick={()=>{
            this.props.hideMiniCart()
            this.onViewBagClick()
          }}>
            VIEW BAG
          </button>
          <button className={'mini-cart-button-checkout'}>
            CHECK OUT
          </button>
        </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  hideMiniCart: () => dispatch(hideMiniCartAction())
})
export default withRouter(connect(null, mapDispatchToProps)(MiniCartButtons))
