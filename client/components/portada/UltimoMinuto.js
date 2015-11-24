import React from 'react';
import {Link} from 'react-router';
import moment from 'moment';

export default class UltimoMinuto extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let hour = moment(this.props.nota.post_date).format('HH:mm');
    let link = this.props.nota.post_URL.replace('http://www.biobiochile.cl', '/notas');
    return (<section className="ultimo-minuto">
        <header><h1>último minuto</h1></header>
        <div className="post">
            <Link to={link} state={this.props.nota}>
              <span className="time">{hour} • </span>
              <h1 dangerouslySetInnerHTML={{__html: this.props.nota.post_title}}></h1>
            </Link>
        </div>
    </section>);
  }
}
