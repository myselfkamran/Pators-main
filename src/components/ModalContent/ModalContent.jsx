// import React, { useEffect, useState } from "react";
// import Modal from "../../utils/Modal";
// import { Link } from "react-router-dom";
// import Contact from "../Contact";
// import axios from "axios";
// import ModalA from "../ModalA";
// import ModalB from "../ModalB";

// const ModalContent = () => {
//   const [contactData, setContactData] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [even, setEven] = useState();

//   const getContacts = async () => {
//     setIsLoading(true);
//     const res = await axios.get(
//       "https://650c060347af3fd22f66e124.mockapi.io/api/contacts"
//     );
//     setContactData(res.data[0]);
//     setIsLoading(false);
//   };

//   const evenHanlder = (e) => {
//     e.target.checked === true ? setEven(true) : setEven(false);
//   };

//   useEffect(() => {
//     getContacts();
//   }, []);

//   const contactIds = contactData.contacts_ids;
//   // Check if contactIds is defined before mapping over it
//   const contactElements =
//     !isLoading && contactIds
//       ? contactIds.map((item) =>
//           even ? (
//             item % 2 === 0 && (
//               <Contact key={item} contact={contactData.contacts[item]} />
//             )
//           ) : (
//             <Contact key={item} contact={contactData.contacts[item]} />
//           )
//         )
//       : null;
//   return (
//     <div className="bg-blue-500">
//       <div></div>
//       <Modal maxWidth={600}>
//         <div className="px-4 py-4">
//           <div className=" flex justify-center">
//             <input
//               type="text"
//               className="border border-gray-500 rounded-[5px] py-[3px] px-2 outline-none mb-4 w-2/3 "
//               placeholder="Search Contacts"
//             />
//           </div>
//           <ModalA />
//           <ModalB />
//           <div className="flex gap-3 justify-center mt-4">
//             <Link to="/all-contacts" className="button">
//               All Contacts
//             </Link>
//             <Link to="/us-contacts" className="button">
//               US Contacts
//             </Link>
//             <Link to="/" className="button">
//               Close
//             </Link>
//           </div>
//           <div className="flex gap-1 items-center mt-1">
//             <input type="checkbox" id="even" onChange={evenHanlder} />
//             <label className="font-medium text-sm" htmlFor="even">
//               Only Even
//             </label>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default ModalContent;
