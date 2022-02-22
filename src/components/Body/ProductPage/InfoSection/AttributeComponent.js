import React from "react";
import '../ProductPage.scss';
import {v4} from "uuid";

class AttributeComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={'attribute'}>
          <h2>{this.props.name}</h2>
          <div className={'attribute-items-container'}>
            {
              this.props.items.map(i =>
                  <div
                      key={v4()}
                      className={`attribute-item attribute-${this.props.type}` + (i.value === this.props.chosenAttributeValue? ' attribute-checked' : '')}
                      style={
                        !(this.props.type === 'text') ?
                            {backgroundColor: i.value} :
                            null
                      }
                      onClick={ e => this.props.onChangeAttribute(this.props.id, i.value, e) }

                  >
                    {(this.props.type === 'text') ? i.value : ''}
                  </div>
              )
            }
          </div>
        </div>
    )
  }
}

export default AttributeComponent
