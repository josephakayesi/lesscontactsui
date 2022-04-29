import axios from 'axios';
import { Contact } from '../../types/contact';
import { contactsData } from '../../_data/ContactsData';

class ContactService {
  async GetContacts(): Promise<Contact[] | null> {
    try {
      const contactsData = (await axios.get('http://localhost:5000/api/v1/contacts'))
        .data as Contact[];

      return contactsData;
    } catch (error) {
      console.log('error fetching contacts'); // Implement error handling on the ui
    }

    return null;
  }
}

export default new ContactService();
