import React from "react";
import {connect} from "react-redux";

class ShadowBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div
            style={{
              display: (this.props.isMiniCartVisible? 'block' : 'none')
            }}
            className={'shadow-block'}
        />
    );
  }
}

const mapStateToProps = state => ({
  isMiniCartVisible: state.miniCartDisplay
})

export default connect(mapStateToProps)(ShadowBlock)
