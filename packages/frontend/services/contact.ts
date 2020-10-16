import { Contact } from "../types";

export default class ContactService {
  sendContactForm = async (contact: Contact): Promise<Contact> => {
    const url = "https://dev-api.zacstrangeway.com/contact";

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
