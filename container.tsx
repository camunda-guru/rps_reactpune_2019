import Product from '../components/Product';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import {Dispatch} from 'redux'
export function mapStateToProps({ enthusiasmLevel, jobName }: StoreState) {
  return {
    enthusiasmLevel,
    name: jobName,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
