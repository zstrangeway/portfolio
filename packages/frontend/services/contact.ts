import { Contact } from "../types";

const api_url = `https://${process.env.NEXT_PUBLIC_API_URL}`;

export default class ContactService {
  sendContactForm = async (contact: Contact): Promise<Contact> => {
    const url = `${api_url}/contact`;

    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(contact),
    });

    if (!res.ok) {
      // TODO: implement better logging
      console.log(res);
      throw "Something went wrong.  Please try again later.";
    }
    return res.json();
  };
}
