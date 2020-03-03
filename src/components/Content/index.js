import { connect } from 'react-redux';

import Content from './Content';

const mapStateToProps = (state) => ({
  filters: state.filters,
  filteredCat: state.filteredCat,
  data: state.data,
});

export default connect(
  mapStateToProps,
)(Content);
