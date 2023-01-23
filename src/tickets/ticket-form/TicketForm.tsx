import React from "react";

interface props {
  formData: {
    category: string;
    title: string;
    description: string;
    emergency: number;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      category: string;
      title: string;
      description: string;
      emergency: number;
    }>
  >;
}

function TicketForm({ formData, setFormData }: props) {
  return (
    <div>
      Ticket form
      <form></form>
    </div>
  );
}

export default TicketForm;
