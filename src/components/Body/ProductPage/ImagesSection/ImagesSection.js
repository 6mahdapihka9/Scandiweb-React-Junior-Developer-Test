import React from "react";
import '../ProductPage.scss';

class ImagesSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chosenImage: 0 }
  }

  render() {
    return (
        <div className={'gallery-container'}>
          <div className={'list-of-images'}>
          {
            this.props.gallery.map( (img, id) =>
              <img
                  key={img} src={img}
                  alt={`product's picture number ${id}`}
                  onClick={() => this.setState({chosenImage: id})}
              />
            )
          }
          </div>
          <div className={'chosen-image'}>
            <img src={this.props.gallery[this.state.chosenImage]} alt={'chosen image'}/>
          </div>
        </div>
    );
  }
}

export default ImagesSection;
