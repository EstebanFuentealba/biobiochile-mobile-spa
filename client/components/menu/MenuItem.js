import React from 'react';

export default class MenuItem extends React.Component {
  setPortadaLocal(portada) {
    console.log("setPortadaLocal");
    console.log(portada);
  }
  render() {
    let item;
    if(this.props.section.isLink) {
      item = <a href={this.props.section.link}><span className={`menu-marca ${this.props.section.className}`}></span>{this.props.section.name}</a>
    } else {
      item = <a onClick={this[this.props.section.fn.name].bind(this, this.props.section.fn.params)}><span className={`menu-marca ${this.props.section.className}`}></span>{this.props.section.name}</a>
    }
    return (<li>{item}</li>);
  }
}
