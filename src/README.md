# Are @types/react-redux at 6.0.1 wrong, or am I?

It seems that with Redux 4 and Typescript 2.9.1 that the types for Redux's `connect` function are incorrect.

I've created a super small example app. 

2 Components. App and NamesList

NamesList uses Redux's `connect` with a container called `withNames`

### names.tsx
```
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
```

### withNames
```
import { connect, Dispatch } from 'react-redux';
const mapStateToProps = (store: any) => ({
  names: store.names,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchNames() { 
    dispatch({
      type: 'names.fetch'
    });
  },
});


type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;

export const withNames = <OwnProps extends any>(Cmp: React.ComponentType<OwnProps>) =>
  connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps
  )(Cmp);

export default withNames;
```


Then, when the App component tries to use the NamesList component it produces a TS compiler error:
```
Type '{}' is not assignable to type 'IntrinsicAttributes & IntrinsicClassAttributes<Component<Pick<{ names: string[]; }, never> & { na...'.
  Type '{}' is not assignable to type 'Readonly<Pick<{ names: string[]; }, never> & { names: string[]; }>'.
    Property 'names' is missing in type '{}'.

```

I can see that TS expects me to pass in the names property, however shouldn't it already know that `names` is added by the container?
