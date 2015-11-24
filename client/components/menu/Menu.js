import React from 'react';
import { Link } from 'react-router';
import menuData from './../../data/menu-secciones';
import MenuItem from './MenuItem.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      showMenu: false,
      showSearch: false
    };
  }
  toggleSearch() {
    this.setState({
      showSearch: !this.state.showSearch,
      showMenu: false
    });
  }
  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu,
      showSearch: false
    });
  }
  renderSearchDesplegable() {
    return (<div id="menu-search" className="menu-desplegable buscador">
      <form action="/api.php" method="get">
        <input name="s" type="search" placeholder="Buscar..."></input>
        <button type="submit"><i className="fa fa-search"></i></button>
      </form>
      <span className="triangulo"></span>
    </div>);
  }
  renderMenuDesplegable() {
    return (<div id="menu-desplegable" className="menu-desplegable">
      <ul>
        {menuData.map((section, index) => {
          return (<MenuItem key={index} section={section} />);
        })}
      </ul>
      <span className="triangulo"></span>
    </div>);
  }
  render() {
    let desplegable;
    if(this.state.showMenu) {
      desplegable = this.renderMenuDesplegable();
    } else if(this.state.showSearch) {
      desplegable = this.renderSearchDesplegable();
    } else {
      desplegable = '';
    }
    return (<header className="new-head">
      <Link to="/" className="rbb-logo"></Link>
      <span id="btn-menu" className="new-menu" onClick={this.toggleMenu.bind(this)}>
        <i className="fa fa-bars"></i>
      </span>
      <span id="btn-search" className="new-menu search" onClick={this.toggleSearch.bind(this)}>
        <i className="fa fa-search"></i>
      </span>
      {desplegable}
    </header>);
  }
}
