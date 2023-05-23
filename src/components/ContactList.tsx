import React, { FC } from "react";
import { RxAvatar } from "react-icons/rx";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteContact } from "../features/contact/contactSlice";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="flex items-center justify-between w-full border-2 p-2">
      <div className="flex items-center space-x-2">
        <span className="text-3xl">
          <RxAvatar />
        </span>
        <h3 className="overflow-hidden w-20">
          {firstName} {lastName}
        </h3>
      </div>
      <div className="flex space-x-2 items-center">
        <button
          type="button"
          className={`rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm ${
            status === "active" ? "bg-green-600" : "bg-red-600"
          } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
        >
          {status.toUpperCase()}
        </button>
        <Link
          to={`/edit/${id}`}
          state={{ data: { firstName, lastName, status, id } }}
          className="text-2xl"
        >
          <AiFillEdit />
        </Link>
        <button className="text-2xl" onClick={handleDelete}>
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default ContactList;
