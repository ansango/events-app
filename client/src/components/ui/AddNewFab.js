import { useDispatch } from "react-redux";
import { uiOpenModal } from "../../state/actions/ui";

const AddNewFab = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="btn btn-primary fab"
      onClick={() => dispatch(uiOpenModal())}
    >
      <i className="fas fa-plus"></i>
    </button>
  );
};

export default AddNewFab;
