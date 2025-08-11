import React from "react";

import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   closeAddCoin,
//   closeCustomize,
//   closeFilter,
//   closeLogin,
//   closePortfolioCreate,
//   closePortfolioEdit,
//   closePortfolioRemove,
//   closeTransactionRemove,
//   closeRegister,
//   closeTransaction,
//   closeOngoingProject,
//   closeUpcomingProject,
// } from "../../store/slices/popupSlice";

const Backdrop = ({ closeable }) => {
  //   const dispatch = useDispatch();

  return (
    <div
      className="h-screen w-screen fixed bg-modalBackdrop"
      //   onClick={() => {
      //     if (closeable !== false) {
      //       dispatch(closeLogin());
      //       dispatch(closeRegister());
      //       dispatch(closeCustomize());
      //       dispatch(closeFilter());
      //       dispatch(closeAddCoin());
      //       dispatch(closePortfolioCreate());
      //       dispatch(closePortfolioRemove());
      //       dispatch(closeTransactionRemove());
      //       dispatch(closePortfolioEdit());
      //       dispatch(closeTransaction());
      //       dispatch(closeOngoingProject());
      //       dispatch(closeUpcomingProject());
      //     }
      //   }}
    ></div>
  );
};

const Overlay = ({ children, maxWidth }) => {
  //   const dispatch = useDispatch();
  return (
    <div
      className={`fixed xs:w-full w-[90%]  xs:h-full xs:flex xs:items-center justify-center xs:max-h-full xs:rounded-none overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[25px] py-2`}
      style={{ maxWidth: `${maxWidth}px` }}
    >
      <div className="max-h-[90vh] xs:max-h-screen overflow-x-auto w-full scrollbar-hide ">
        {children}
      </div>
    </div>
  );
};

const Modal = ({ children, onClose, maxWidth, closeable }) => {
  const modal = useSelector((state) => state.modal.isModal);

  // if (!modal) return null;

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} closeable={closeable} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <Overlay
          children={children}
          maxWidth={maxWidth}
          closeable={closeable}
        />,
        document.getElementById("overlay")
      )}
    </>
  );
};

export default Modal;
