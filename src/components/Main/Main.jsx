import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Main = () => {
  const [contactData, setContactData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getContacts = async () => {
    setIsLoading(true);
    const res = await axios.get(
      "https://650c060347af3fd22f66e124.mockapi.io/api/contacts"
    );
    setContactData(res.data[0]);
    setIsLoading(false);
  };

  useEffect(() => {
    getContacts();
  }, []);

  const contactIds = contactData.contacts_ids;
  // Check if contactIds is defined before mapping over it
  const contactElements =
    !isLoading && contactIds
      ? contactIds.map(
          (item) =>
            contactData.contacts[item].id % 2 === 0 && (
              <div key={item}>{contactData.contacts[item].first_name}</div>
            )
        )
      : null;

  return (
    <div className="h-screen w-screen">
      <div className="h-full w-full flex items-center justify-center gap-10">
        <div>
          <Link to="/all-contacts" className="button button-a">
            Button A
          </Link>
        </div>
        <div>
          <Link to="/us-contacts" className="button button-b">
            Button B
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
