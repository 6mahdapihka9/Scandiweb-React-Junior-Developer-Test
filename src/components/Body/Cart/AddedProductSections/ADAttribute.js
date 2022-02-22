import React from "react";
import {v4} from "uuid";
import {changeProductsAttributeAction} from "../../../../redux/cart.actions";
import {connect} from "react-redux";

class ADAttribute extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={'ad-attribute'}>
          {
            this.props.attribute.items.map(i =>
                <div
                    key={v4()}
                    className={`ad-attribute-item 
                      attribute-${this.props.attribute.type} 
                      ${i.value === this.props.chosenAttributeValue ? 'attribute-checked' : ''}
                      button-pointer`}
                    style={
                      !(this.props.attribute.type === 'text') ?
                          {backgroundColor: i.value} :
                          null
                    }
                    onClick={e => this.props.onChangeAttribute(this.props.attribute.name, i.value, e)}
                >
                  {(this.props.attribute.type === 'text') ? i.value : ''}
                </div>
            )
          }
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  onChangeAttribute: (name, value, e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(changeProductsAttributeAction(props.id, name, value))
  }
})

export default connect(null, mapDispatchToProps)(ADAttribute)
