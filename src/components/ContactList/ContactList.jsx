import React from 'react';
import { Text, Alert, Paper, Table, Stack } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectFilteredContacts,
} from 'redux/contacts/selectors';
import ContactItem from 'components/ContactItem/ContactItem';
import ContactFilter from 'components/ContactFilter/ContactFilter';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Paper shadow="sm" radius="sm" p="md" sx={{ width: '420px' }}>
      <Stack justify="flex-start" spacing="xl">
        <Text size="md" weight={600} ta="center">
          Your contacts:
        </Text>
        <ContactFilter />
        {contacts.length > 0 && (
          <Table verticalSpacing="xs">
            <thead>
              <tr>
                <th width="200px">Name</th>
                <th>Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map(({ id, name, number }) => (
                <tr key={id}>
                  <ContactItem contactId={id} name={name} number={number} />
                </tr>
              ))}
            </tbody>
          </Table>
        )}

        {!isLoading && contacts.length === 0 && (
          <Alert
            icon={<IconAlertCircle size="1rem" />}
            title="Attention!"
            color="red"
          >
            Something terrible happened! You don't have any saved contacts in
            your phone book!
          </Alert>
        )}
      </Stack>
    </Paper>
  );
};

export default ContactList;
