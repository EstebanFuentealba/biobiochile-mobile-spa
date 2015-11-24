import React from 'react';
import SocialShare from './SocialShare';
import moment from 'moment';
moment.locale('es');

export default class Nota extends React.Component{
  constructor(props) {
    super(props);
    let state = {
      nota: false,
      showPost: false
    };
    if(this.props.location.state != null) {
      state.nota = this.props.location.state;
    }
    this.state = state;
    console.log("nota");
    console.log(this.state);
  }
  toggleContent() {
    this.setState({
      showPost: !this.state.showPost
    });
  }
  componentDidMount() {
    try{
      window.twttr = (function (d,s,id) {
      var t, js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
      js.src="https://platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs);
      return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });
      }(document, "script", "twitter-wjs"));
    }catch(e){console.log("error twitter")}
    try{
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.3&appId=782931008416002";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }catch(e){console.log("error fb")}

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//platform.instagram.com/en_US/embeds.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'instagram-jssdk'));
  }
  render() {
    let postDate = moment(this.state.nota.post_date).format('dddd DD MMMM YYYY | HH:mm');
    let showContentCls = ((!this.state.showPost) ? "new-content-nota" : "new-content-nota no");

    let content = {
      button: ((this.state.showPost) ? '' : <span className="completo" onClick={this.toggleContent.bind(this)}>leer articulo completo</span>),
      css: {
        height: ((this.state.showPost) ? 'auto' : '500px')
      }
    };
    return (
      <div className="post-new">
        <div className="new-categoria nacional">
          <span className="nota-fecha">{postDate}</span>
          <span className="titulo">nacional</span>
        </div>
        <h1 className="title" dangerouslySetInnerHTML={{__html: this.state.nota.post_title}}></h1>
        <div className="full-data">
          <i>Publicado por</i>
          <a href="http://busca.biobiochile.cl/author/pobrador/" title="Ver Otras noticias publicadas por Piangella Obrador">Piangella Obrador</a>
          <span id="contador" className="contador">Visitas: 20</span>
          <br />
          <div id="ref_coautor">
            <i> | La Información es de</i>
            <a href="http://busca.biobiochile.cl/author/tlavado" title="Ver Otras noticias publicadas por Tania Lavado">Tania Lavado</a>
          </div>
        </div>
        <img src={this.state.nota.images.movil} alt="Archivo | Cristian Opazo | Agencia Uno" />
        <p>Archivo | Cristian Opazo | Agencia Uno</p>
        <SocialShare nota={this.state.nota}/>
        <div id="new-content-nota" style={content.css} className={showContentCls} dangerouslySetInnerHTML={{__html: this.state.nota.content}}></div>
        {content.button}
      </div>
    )
  }
}
