import { connect, Dispatch } from 'react-redux';
const mapStateToProps = (store: any) => ({
  names: store.ages as number[],
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchNames() { 
    dispatch({
      type: 'ages.fetch'
    });
  },
});


type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
export type WithAgesProps = StateProps & DispatchProps;

export default <OwnProps extends any>(Cmp: React.ComponentType<OwnProps>) =>
  connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps
  )(Cmp);
