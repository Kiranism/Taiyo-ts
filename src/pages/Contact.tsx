import { FC } from "react";
import { useNavigate } from "react-router-dom";
import ContactList from "../components/ContactList";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type ContactProps = {};
const Contact: FC<ContactProps> = ({}) => {
  const { contacts } = useSelector((state: RootState) => state.contacts);
  console.log("contacts=>", contacts);
  const navigate = useNavigate();
  return (
    <div className="container-sm flex flex-col items-center justify-center p-4 sm:p-20 gap-10">
      <button
        onClick={() => navigate("/contact/add")}
        type="button"
        className="rounded-md text-2xl bg-black px-3 py-2 font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Create Contact
      </button>
      {!!contacts.length ? (
        contacts.map((contact) => (
          <ContactList
            firstName={contact.firstName}
            lastName={contact.lastName}
            status={contact.status}
            id={contact.id}
          />
        ))
      ) : (
        <div className="border-2 border-black p-4">
          <p>
            No Contact Found <br />
            Please add contact from create contact button
          </p>
        </div>
      )}
    </div>
  );
};

export default Contact;
