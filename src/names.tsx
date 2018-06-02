import * as React from 'react';
import withNames from './withNames';

class NamesContainer extends React.Component<{names: string[]}> {
  public render(){
    return (
      <div>
      {
        this.props.names.map((name) => {
          return <div key={name}>{name}</div>;
        })
      }
      </div>);
  }
}

export default withNames(NamesContainer);
