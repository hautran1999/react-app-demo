import { connect } from "react-redux";
import { deleteItem } from "../actions/Actions";
import { addItem } from "../actions/Actions";
import List from "../components/List";
const mapStateToProps = (state) => {
  return { list: state.list };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (text) => dispatch(deleteItem(text)),
    addItem: (text) => dispatch(addItem(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
