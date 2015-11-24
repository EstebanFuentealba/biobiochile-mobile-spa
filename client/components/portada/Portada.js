import React from 'react';
import UltimoMinuto from './UltimoMinuto';
import GranTitular from './GranTitular';
import request from 'superagent';


export default class Portada extends React.Component {
  constructor(props) {
    super(props);
    let me = this;
    me.state = {
      data: DATA
    };
    me.updateData();
    setInterval(() => {
      me.updateData();
    }, 30000);

  }

  updateData() {
    let me = this;
    request.get('/api')
      .set('Accept', 'application/json')
      .end((req , res) => {
        if(res.body) {
          me.setState({
            data: res.body
          });
        }
      });
  }
  render() {
    return (<div>
      {this.state.data.loultimo != false && this.state.data.loultimo.map((nota) => {
        return <UltimoMinuto key={nota.ID} nota={nota} />
      })}
      {this.state.data.gran_titular != false && this.state.data.gran_titular.map((nota) => {
        return <GranTitular key={nota.ID} nota={nota} />
      })}
    </div>);
  }
}
