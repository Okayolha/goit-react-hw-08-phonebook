import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Flex } from '@mantine/core';
import { Helmet } from 'react-helmet';
import { fetchContacts } from 'redux/contacts/operations';
import ContactEditor from 'components/ContactEditor/ContactEditor';
import ContactList from 'components/ContactList/ContactList';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Flex
        align="flex-start"
        direction={{ base: 'column', sm: 'row' }}
        gap={{ base: 'sm', sm: 'lg' }}
        justify={{ sm: 'center' }}
      >
        <Box>
          <ContactEditor />
        </Box>
        <Box>
          <ContactList />
        </Box>
      </Flex>
    </>
  );
};

export default Contacts;
