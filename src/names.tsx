import * as React from 'react';
import withNames, { InjectedProps } from './withNames';

interface INameProps {
  ages: number[]
}
class NamesContainer extends React.Component<
INameProps &
InjectedProps
> {
  public render(){
    return (
      <div>
      {
        this.props.names && this.props.names.map((name) => {
          return <div key={name}>{name}</div>;
        })
      }
      </div>);
  }
}

export default withNames<INameProps>(NamesContainer);
