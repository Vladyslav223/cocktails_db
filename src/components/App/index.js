import { connect } from 'react-redux';
// eslint-disable-next-line import/extensions
import App from './App.jsx';
import { startLoading } from '../../store/actions';

const mapDispatchToProps = {
  startLoading,
};

export default connect(
  null,
  mapDispatchToProps,
)(App);
