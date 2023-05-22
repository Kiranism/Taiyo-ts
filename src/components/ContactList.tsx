import React, { FC } from "react";
import { RxAvatar } from "react-icons/rx";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteContact } from "../features/contact/contactSlice";
type ContactListProps = {
  id?: number;
  firstName: string;
  lastName: string;
  status: string;
};

const ContactList: FC<ContactListProps> = ({
  id,
  firstName,
  lastName,
  status,
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="flex items-center justify-between w-full border-2 p-2">
      <div className="flex items-center space-x-2">
        <span className="text-3xl">
          <RxAvatar />
        </span>
        <h3>
          {firstName}
          {lastName}
        </h3>
      </div>
      <div className="flex space-x-2">
        <button className="text-2xl">
          <AiFillEdit />
        </button>
        <button className="text-2xl" onClick={handleDelete}>
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default ContactList;
