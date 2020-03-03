import { connect } from 'react-redux';

import Content from './Content';

const mapStateToProps = (state) => ({
  filteredCat: state.filteredCat,
  data: state.data,
  finish: state.finish.isLoading,
});

export default connect(
  mapStateToProps,
)(Content);
