import React from "react";
import { useState } from "react";
import TicketForm from "./ticket-form/TicketForm";

function Tickets() {
  let initialFormState = {
    category: "",
    title: "",
    description: "",
    emergency: 0,
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  return (
    <div>
      Tickets
      <TicketForm formData={formData} setFormData={setFormData} />
    </div>
  );
}

export default Tickets;
