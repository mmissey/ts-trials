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
