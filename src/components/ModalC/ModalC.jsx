import React from "react";
import Modal from "../../utils/Modal";
import Contact from "../Contact";

const ModalC = ({ detail, remove }) => {
  return (
    <Modal maxWidth={600}>
      <div className="px-3 py-4">
        <Contact contact={detail} />
        <div className="flex justify-end mt-3">
          <button className="button button-c" onClick={() => remove()}>
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalC;
