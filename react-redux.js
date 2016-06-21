declare module 'react-redux' {

  declare type ReactComponent<C> = any;

  declare type ActionCreator = (...props: any) => any;
  declare type State = any;
  declare type Action = Object;
  declare type AsyncAction = any;
  declare type BaseDispatch = (a: Action) => Action;
  declare type Dispatch = (a: Action | AsyncAction) => any;

  declare type Props = { [key: string]: any };
  declare type StateProps = Props;
  declare type OwnProps = Props;
  declare type DispatchProps = Props;
  declare type ActionProps = { [key: string]: (...props: any) => any };

  declare type MapStateToPropsResult = Props | (state: State, ownProps: OwnProps) => StateProps;
  declare type MapDispatchToPropsResult = ActionProps | ((dispatch: Dispatch, ownProps: OwnProps) => ActionProps);
  declare type MapStateToProps = (state: State, ownProps: OwnProps) => MapStateToPropsResult;
  declare type MapDispatchToProps = { [key: string]: ActionCreator } | ((dispatch: Dispatch, ownProps: OwnProps) => MapDispatchToPropsResult);
  declare type MergeProps = (stateProps: StateProps, dispatchProps: DispatchProps, ownProps: OwnProps) => Props;
  declare type Options = {
    pure?: boolean,
    withRef?: boolean,
  }

  declare type Generator<T> = (comp: T) => T;
  declare class ReactRedux {
    connect(mapStateToProps?: ?MapStateToProps, mapDispatchToProps?: ?MapDispatchToProps, mergeProps?: ?MergeProps, options?: ?Options): Generator;
    Provider: any;
  }
  declare var exports: ReactRedux;
}

