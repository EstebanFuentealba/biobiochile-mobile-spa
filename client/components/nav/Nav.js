import React from 'react';
import {Link} from 'react-router';

export default class Nav extends React.Component {
  render() {
    return (<nav>
      <ul className="new-nav">
          <li><Link to="/">Inicio</Link></li>
          <li><a href="/mas-leido.html">+ Leído</a></li>
          <li><a target="_blank" href="/vivo.html">En Vivo</a></li>
      </ul>
    </nav>);
  }
}
