import React from "react";
import './Header.scss';
import ShoppingCartButton from "./ShoppingCartButton/ShoppingCartButton";
import {Link} from "react-router-dom";

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'all'
    }
  }

  onChange = value => {
    this.setState({selectedTab: value})
  }

  render() {
    return (
        <header>
          <nav>
            {this.props.categories.map(c => (
                <Link
                    style={{ display: "block", margin: "1rem 0" }}
                    to={`/categories/${c.name}`}
                    key={c.name}
                >
                  {c.name}
                </Link>
            ))}
          </nav>

          <div className={'categories-tabs'}>
          </div>

          <div className={'currency-selector'}>
          </div>

          <ShoppingCartButton/>
          {/*<Link to="/categories/all">All</Link> | {" "}*/}
          {/*<Link to="/categories/clothes">Clothes</Link> | {" "}*/}
          {/*<Link to="/categories/tech">Tech</Link>*/}
        {/*  <div className={'tabs'}>*/}
        {/*    <input*/}
        {/*        type="radio"*/}
        {/*        id="all"*/}
        {/*        value={'all'}*/}
        {/*        onChange={this.onChange.bind(this, 'all')}*/}
        {/*        checked={this.state.selectedTab === 'all'}*/}
        {/*    />*/}
        {/*    <input*/}
        {/*        type="radio"*/}
        {/*        id="clothes"*/}
        {/*        value={'clothes'}*/}
        {/*        onChange={this.onChange.bind(this, 'clothes')}*/}
        {/*        checked={this.state.selectedTab === 'clothes'}*/}
        {/*    />*/}
        {/*    <input*/}
        {/*        type="radio"*/}
        {/*        id="tech"*/}
        {/*        value={'tech'}*/}
        {/*        onChange={this.onChange.bind(this, 'tech')}*/}
        {/*        checked={this.state.selectedTab === 'tech'}*/}
        {/*    />*/}

        {/*    <ul>*/}
        {/*      <li title="Features">*/}
        {/*        <label htmlFor="all" role="button">*/}
        {/*          <br/>*/}
        {/*          <span>All</span>*/}
        {/*        </label>*/}
        {/*      </li>*/}
        {/*      <li title="Delivery Contents">*/}
        {/*        <label htmlFor="clothes" role="button">*/}
        {/*          <br/>*/}
        {/*          <span>Clothes</span>*/}
        {/*        </label>*/}
        {/*      </li>*/}
        {/*      <li title="Shipping">*/}
        {/*        <label htmlFor="tech" role="button">*/}
        {/*          <br/>*/}
        {/*          <span>Tech</span>*/}
        {/*        </label>*/}
        {/*      </li>*/}
        {/*    </ul>*/}

        {/*    <div className="slider">*/}
        {/*      <div className="indicator" />*/}
        {/*    </div>*/}

        {/*    <div className="content">*/}
        {/*      <section>*/}
        {/*        <h2>Features</h2>*/}
        {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolorem sequi, quo tempore*/}
        {/*      </section>*/}
        {/*      <section>*/}
        {/*        <h2>Delivery Contents</h2>*/}
        {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas adipisci a accusantium eius ut*/}
        {/*      </section>*/}
        {/*      <section>*/}
        {/*        <h2>Shipping</h2>*/}
        {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nemo ducimus eius, magnam error quisquam*/}
        {/*      </section>*/}
        {/*      <section>*/}
        {/*        <h2>Returns</h2>*/}
        {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dicta vero rerum? Eaque repudiandae*/}
        {/*      </section>*/}
        {/*    </div>*/}

        {/*  </div>*/}
          {/*{*/}
          {/*  this.props.categories.map(c => <p key={c.name}>{c.name}</p>)*/}
          {/*}*/}
        </header>
    );
  }
}
