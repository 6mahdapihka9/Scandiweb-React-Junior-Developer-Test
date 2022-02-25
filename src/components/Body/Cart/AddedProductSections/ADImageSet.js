import React from "react";
import LeftArrowIcon from "../../../icons/LeftArrowIcon";
import RightArrowIcon from "../../../icons/RightArrowIcon";

export default class ADImageSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenImage: 0
    }
  }

  onChangeImage = (index) => {
    this.setState(
        (prevState)=>({
          chosenImage: prevState.chosenImage + index
        })
    )
  }

  render() {
    return (
        <div className={'added-product-image-set'}>
          <img src={this.props.gallery[this.state.chosenImage]} alt={'added product to cart'}/>
          <button
              className={'gallery-observer decrease-image-index button-pointer'}
              disabled={this.state.chosenImage-1 < 0}
              onClick={()=>this.onChangeImage(-1)}
          >
            <LeftArrowIcon />
          </button>
          <button
              className={'gallery-observer increase-image-index button-pointer'}
              disabled={this.state.chosenImage+1 > this.props.gallery.length-1}
              onClick={()=>this.onChangeImage(1)}
          >
            <RightArrowIcon />
          </button>
        </div>
    )
  }
}
