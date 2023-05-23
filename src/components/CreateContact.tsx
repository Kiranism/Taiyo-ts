import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../features/contact/contactSlice";
import { useNavigate } from "react-router-dom";
type CreateContactProps = {};

const CreateContact: FC<CreateContactProps> = ({}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("active");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (firstName.length === 0 || lastName.length === 0) return;
    const data = {
      firstName,
      lastName,
      status,
    };
    dispatch(addContact(data));
    navigate("/");
    console.log(data);
  };
  return (
    <div>
      <h2 className="text-2xl text-center my-4 font-semibold">
        Create Contact
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="bg-white max-w-xl mx-1 sm:mx-auto flex items-center justify-center  flex-col gap-10 p-4 sm:p-10">
          <div className="flex gap-2 w-full">
            <h2 className="flex-1  flex justify-center items-center">
              First Name
            </h2>
            <input
              type="text"
              className="flex-1"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full">
            <h2 className="flex-1 flex justify-center items-center">
              Last Name
            </h2>
            <input
              type="text"
              className="flex-1"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full">
            <div className="flex-1 justify-center items-center flex">
              <h2>Status</h2>
            </div>
            <div className="flex flex-1 flex-col ">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="active"
                  name="radioGroup"
                  value="active"
                  onChange={(event) => setStatus(event.target.value)}
                  checked={status === "active"}
                  className="form-radio mr-2"
                />
                <label htmlFor="active" className="cursor-pointer">
                  Active
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="inactive"
                  name="radioGroup"
                  value="inactive"
                  onChange={(event) => setStatus(event.target.value)}
                  checked={status === "inactive"}
                  className="form-radio mr-2"
                />
                <label htmlFor="inactive" className="cursor-pointer">
                  Inactive
                </label>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="p-2 bg-gray-800 text-white flex mx-auto my-4"
        >
          Save Contact
        </button>
      </form>
    </div>
  );
};

export default CreateContact;
