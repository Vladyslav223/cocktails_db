import { connect } from 'react-redux';

// eslint-disable-next-line import/extensions
import App from './App.jsx';
import { recievPhotos, startLoading } from '../../store/actions';

const mapStateToProps = (state) => ({
  categories: state.categories && state.categories,
});

const mapDispatchToProps = {
  recievPhotos,
  startLoading
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
