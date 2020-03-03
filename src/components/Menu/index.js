import { connect } from 'react-redux';

import Menu from './Menu';
import { handleApply } from '../../store/actions';

const mapStateToProps = (state) => ({
  filters: state.filters, filteredCat: state.filteredCat,
});

const mapDispatchToProps = {
  handleApply,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
