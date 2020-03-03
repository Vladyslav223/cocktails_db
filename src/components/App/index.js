import { connect } from 'react-redux';
import App from './App';
import { startLoading } from '../../store/actions';

const mapDispatchToProps = {
  startLoading,
};

export default connect(
  null,
  mapDispatchToProps,
)(App);
