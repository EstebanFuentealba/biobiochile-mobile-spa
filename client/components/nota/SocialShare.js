import React from 'react';

export default class SocialShare extends React.Component{
  render() {
    return (<div>
      <ul className="barra-social">
        <li className="s-fb">
          <a href={`https://www.facebook.com/sharer.php?u=${this.props.nota.post_URL}`} className="fa fa-facebook"></a>
        </li>
        <li className="s-tw">
          <a href={`https://twitter.com/intent/tweet?original_referer=${this.props.nota.post_URL}&text=${this.props.nota.post_title}&url=${this.props.nota.post_URL}`} data-lang="es" className="fa fa-twitter"></a>
        </li>
        <li className="s-gp">
          <a href={`https://plus.google.com/share?url=${this.props.nota.post_URL}`} className="fa fa-google-plus"></a>
        </li>
        <li className="s-lin">
          <a href={`https://www.linkedin.com/shareArticle?source=BioBioChile%22+rel%3D%22nofollow&amp;title=${this.props.nota.post_title}&summary=&mini=true&url=${this.props.nota.post_URL}`} className="fa fa-linkedin"></a>
        </li>
        <li id="s-wp" className="s-wp">
          <a href={`whatsapp://send?text=${this.props.nota.post_title} ${this.props.nota.post_URL}`}></a>
        </li>
      </ul>
      <ul className="data-social">
        <li id="s-fb" className="data-fb">0</li>
        <li id="s-tw" className="data-tw">0</li>
        <li id="s-gp" className="data-gp">0</li>
        <li id="s-lin" className="data-lin">0</li>
        <li className="data-wp">Enviar</li>
      </ul>
  </div>)
  }
}
