import React from "react";

const Contact = ({ contact }) => {
  const { id, first_name, last_name, email, phone_number, country_id } =
    contact;

  return (
    <div className="flex flex-wrap bg-[#eeeeee] rounded-md px-4 py-2 text-sm gap-y-1">
      {id && (
        <div className="flex gap-2 w-1/2">
          <p className="font-semibold">Id : </p>
          <p>{id}</p>
        </div>
      )}
      {first_name && (
        <div className="flex gap-2 w-1/2">
          <p className="font-semibold">First Name : </p>
          <p>{first_name}</p>
        </div>
      )}
      {last_name && (
        <div className="flex gap-2 w-1/2">
          <p className="font-semibold">Last Name :</p>
          <p>{last_name}</p>
        </div>
      )}
      {email && (
        <div className="flex gap-2 w-1/2">
          <p className="font-semibold">Email :</p>
          <p>{email}</p>
        </div>
      )}
      {phone_number && (
        <div className="flex gap-2 w-1/2">
          <p className="font-semibold">Phone Number :</p>
          <p>{phone_number}</p>
        </div>
      )}
      {country_id && (
        <div className="flex gap-2 w-1/2">
          <p className="font-semibold">Country Id :</p>
          <p>{country_id}</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
