import { connect, Dispatch } from 'react-redux';
const mapStateToProps = (store: any) => ({
  names: store as string[],
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchNames() { 
    dispatch({
      type: 'names.fetch'
    });
  },
});


type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
export type InjectedProps = StateProps & DispatchProps;

export default <OwnProps extends any>(Cmp: React.ComponentType<OwnProps>) =>
  connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps
  )(Cmp);
