import React from 'react';
import LazyLoad from 'react-lazy-load';
import {Link} from 'react-router';

export default class UltimoMinuto extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let srcImage = this.props.nota.images.movil;
    let link = this.props.nota.post_URL.replace('http://www.biobiochile.cl', '/notas');
    return (<section className="gran-titular">
    	<Link to={link} state={this.props.nota}>
    		<h1 dangerouslySetInnerHTML={{__html: this.props.nota.post_title}}></h1>
        <LazyLoad height={200}>
        	<div className="pic" style={{backgroundImage: `url(${srcImage})`}}></div>
        </LazyLoad>
        <h4 dangerouslySetInnerHTML={{__html: this.props.nota.extracto}}></h4>
    	</Link>
    </section>);
  }
}
