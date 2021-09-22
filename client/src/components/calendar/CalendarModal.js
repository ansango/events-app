import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const CalendarModal = () => {
  return (
    <Modal
      isOpen={true}
      //onAfterOpen={afterOpenModal}
      //onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div>I am a modal</div>
    </Modal>
  );
};

export default CalendarModal;
