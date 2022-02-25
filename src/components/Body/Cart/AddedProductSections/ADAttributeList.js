import React from "react";
import {v4} from "uuid";
import ADAttribute from "./ADAttribute";

export default class ADAttributeList extends React.PureComponent{
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={'added-product-attribute-list'}>
            {
              this.props.product.attributes &&
              this.props.product.attributes.map(a =>
                  <ADAttribute
                      attribute={a}
                      chosenAttributeValue={this.props.attributes[a.id]}
                      id={this.props.id}
                      key={v4()}
                  />
              )
            }
        </div>
    )
  }
}
