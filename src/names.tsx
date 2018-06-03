import * as React from 'react';
import withAges, { WithAgesProps } from './withAges'; 
import withNames, { WithNamesProps } from './withNames';
interface INameProps {
  parents?: string[]
}
class NamesContainer extends React.Component<
INameProps &
WithNamesProps &
WithAgesProps
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

const plusNames = withNames<INameProps>(NamesContainer);
const plusAges = withAges(plusNames);

export default plusAges;
