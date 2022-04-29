import React, { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';
import ContactService from './api/ContactService';
import { GetServerSidePropsResult } from 'next';
import { Contact } from '../types/contact';

import Layout from '../components/Layout';
import ContactTable from '../components/ContactsTable';

function Home({ contacts }: ContactsProps) {
  const [contacts_, setcontacts] = useState<Contact[]>([]);

  return (
    <Layout>
      <div>
        <h3>crypto contacts</h3>
        {contacts && contacts!.length ? (
          <ContactTable contacts={contacts_.length == 0 ? contacts : contacts_} />
        ) : (
          <div>sorry. no contacts to display yet</div>
        )}
      </div>
    </Layout>
  );
}

export default Home;

interface ContactsProps {
  contacts: readonly Contact[] | null;
}

export async function getServerSideProps(): Promise<GetServerSidePropsResult<ContactsProps>> {
  const contacts = await ContactService.GetContacts();

  return { props: { contacts } };
}
