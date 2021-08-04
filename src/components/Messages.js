import React from "react";
import { Modal, Card } from "@wigxel/react-components/lib/cards";
import { HeadingGroup } from "../components/Typography/Heading";
import success from "../assets/success.png";
import failed from "../assets/failed.png";
import warning from "../assets/warning.png";

export const TicketModel1 = () => {
  return (
    <Modal name="Exist" size="sm">
      <Card style={{ backgroundColor: "white" }}>
        <div className="grid justify-center items-center">
          <HeadingGroup className="ml-6" heading="Warning" />
          <img className="w-10 ml-14" src={warning} alt="warning logo" />
          <span>Ticket Already Scanned</span>
        </div>
      </Card>
    </Modal>
  );
};

export const TicketModel2 = () => {
  return (
    <Modal name="Invalid" size="sm">
      <Card style={{ backgroundColor: "white" }}>
        <div className="grid justify-center items-center">
          <HeadingGroup className="ml-8" heading="Invalid" />
          <img className="w-10 ml-12" src={failed} alt="failed logo" />
          <span>Ticket Not Recognized</span>
        </div>
      </Card>
    </Modal>
  );
};

export const TicketModel3 = () => {
  return (
    <Modal name="Success" size="sm">
      <Card style={{ backgroundColor: "white" }}>
        <div className="grid justify-center items-center">
          <HeadingGroup heading="Success" />
          <img className="w-10 ml-5" src={success} alt="success logo" />
          <span>Ticket valid</span>
        </div>
      </Card>
    </Modal>
  );
};

export const TicketModel4 = () => {
  return (
    <Modal name="Unauthorized" size="sm">
      <Card style={{ backgroundColor: "white" }}>
        <div className="grid justify-center items-center">
          <HeadingGroup className="text-center" heading="Error" />
          <img className="w-10 ml-36" src={failed} alt="error logo" />
          <span>Something went wrong! Refresh and Try Again.</span>
        </div>
      </Card>
    </Modal>
  );
};
