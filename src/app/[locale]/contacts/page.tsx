import Page from '@/components/Page';

import { useTranslations } from 'next-intl';

import Contacts from '@/components/Contacts';

const ContactsPage = () => {
  const t = useTranslations('pages.contacts');

  return (
    <Page>
      <Page.Title
        src="https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/small-white-ceramic-mortar-with-eucalyptus-leaves-AANHPA2.jpg"
        title={t('subtitle')}
      />
      <Contacts />
    </Page>
  );
};

export default ContactsPage;
