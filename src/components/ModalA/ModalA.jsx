import React, { useEffect, useState } from "react";
import Modal from "../../utils/Modal";
import axios from "axios";
import Contact from "../Contact";
import { Link } from "react-router-dom";
import ModalC from "../ModalC";
import Scrollbars from "react-custom-scrollbars";

const ModalA = ({ data }) => {
  const [contactData, setContactData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [even, setEven] = useState();
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getContacts = async () => {
    setIsLoading(true);
    const res = await axios.get(
      "https://650c060347af3fd22f66e124.mockapi.io/api/contacts"
    );
    setContactData(res.data[0]);
    setIsLoading(false);
  };

  const evenHanlder = (e) => {
    e.target.checked === true ? setEven(true) : setEven(false);
  };

  useEffect(() => {
    getContacts();
  }, []);

  const removeCurrent = () => {
    setCurrentItem(null);
  };

  const contactIds = contactData.contacts_ids;

  // Check if contactIds is defined before mapping over it

  const allContacts =
    !isLoading && contactIds
      ? contactIds.map((item) => contactData.contacts[item])
      : null;

  useEffect(() => {
    setFilteredContacts(allContacts);
  }, [isLoading]);

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };

  console.log(searchTerm);

  useEffect(() => {
    console.log(searchTerm);

    if (!isLoading && allContacts) {
      setFilteredContacts(
        allContacts.filter(
          (item) =>
            item?.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item?.last_name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    console.log(filteredContacts);
  }, [searchTerm]);

  console.log(filteredContacts);

  const contactElements =
    !isLoading && filteredContacts
      ? filteredContacts.map(
          (item) =>
            (even ? item.id % 2 === 0 : item) && (
              <div
                onClick={() => setCurrentItem(item)}
                className="cursor-pointer"
              >
                <Contact key={item.id} contact={item} />
              </div>
            )
        )
      : null;

  return (
    <div className="bg-blue-500">
      <div></div>
      {!currentItem && (
        <Modal maxWidth={600}>
          <div className="px-4 py-4">
            <div className=" flex justify-center">
              <input
                type="text"
                className="border border-gray-500 rounded-[5px] py-[3px] px-2 outline-none mb-4 w-2/3 "
                placeholder="Search Contacts"
                onChange={searchHandler}
              />
            </div>
            <div className="flex flex-col gap-1 max-h-[500px] overflow-auto scrollbar">
              {contactElements}
            </div>
            <div className="flex gap-3 justify-center mt-4">
              <Link to="/all-contacts" className="button button-a">
                All Contacts
              </Link>
              <Link to="/us-contacts" className="button button-b">
                US Contacts
              </Link>
              <Link to="/" className="button button-c">
                Close
              </Link>
            </div>
            <div className="flex gap-1 items-center mt-1">
              <input type="checkbox" id="even" onChange={evenHanlder} />
              <label className="font-medium text-sm" htmlFor="even">
                Only Even
              </label>
            </div>
          </div>
        </Modal>
      )}
      {currentItem && <ModalC detail={currentItem} remove={removeCurrent} />}
    </div>
  );
};

export default ModalA;
