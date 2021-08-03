import React from "react";
import { Modal, Card } from "@wigxel/react-components/lib/cards";
import { HeadingGroup } from "../components/Typography/Heading";
import success from "../assets/success.png";
import failed from "../assets/failed.png";
import warning from "../assets/warning.png";

export const TicketModel1 = () => {
  return (
    <Modal name="401" size="sm">
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
    <Modal name="400" size="sm">
      <Card style={{ backgroundColor: "white" }}>
        <div className="grid justify-center items-center">
          <HeadingGroup className="ml-10" heading="Error" />
          <img className="w-10 ml-12" src={failed} alt="failed logo" />
          <span>Ticket Not Recognized</span>
        </div>
      </Card>
    </Modal>
  );
};

export const TicketModel3 = () => {
  return (
    <Modal name="200" size="sm">
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
