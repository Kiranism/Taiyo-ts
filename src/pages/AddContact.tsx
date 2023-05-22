import { FC } from "react";
import CreateContact from "../components/CreateContact";

type AddContactProps = {};

const AddContact: FC<AddContactProps> = ({}) => {
  return (
    <div>
      <CreateContact />
    </div>
  );
};

export default AddContact;
