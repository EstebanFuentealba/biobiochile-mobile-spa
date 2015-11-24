import React from 'react';
import { Link } from 'react-router';
import Menu from './menu/Menu';
import Nav from './nav/Nav';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  setPortadaLocal(params) {
    console.log(params);
  }
  render() {
    return (<div>
      <Menu setPortadaLocal={this.setPortadaLocal.bind(this)} />
      <Nav />
      <div className="content-site-news home">
        {this.props.children}
      </div>
    </div>);
  }
}
