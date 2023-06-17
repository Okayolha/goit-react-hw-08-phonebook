import React from 'react';
import {
  Text,
  TextInput,
  Stack,
  Button,
  Group,
  Box,
  Paper,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IMaskInput } from 'react-imask';
import { useForm } from '@mantine/form';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

const ContactEditor = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const form = useForm({
    initialValues: {
      name: '',
      number: '',
    },

    validate: {
      // name: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      // number: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const handleSubmit = ({ name, number }) => {
    const isIncludeName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const isIncludeNumber = contacts.some(
      contact =>
        contact.number.replace('+', '').split('-').join('') ===
        number.replace('+', '').split('-').join('')
    );

    if (isIncludeName) {
      notifications.show({
        id: 'hello-there',
        withCloseButton: true,
        autoClose: 5000,
        title: 'We notify you that',
        message: `Сontact with the name ${name.toUpperCase()} is already in your telephone book!`,
        color: 'red',
        loading: false,
      });
      return;
    }

    if (isIncludeNumber) {
      notifications.show({
        id: 'hello-there',
        withCloseButton: true,
        autoClose: 5000,
        title: 'We notify you that',
        message: `Сontact with the number ${number} is already in your telephone book!`,
        color: 'red',
        loading: false,
      });
      return;
    }
    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <Paper shadow="sm" radius="md" p="md">
      <Stack justify="flex-start" spacing="xl">
        <Text size="md" weight={600} ta="center">
          Add contact:
        </Text>
        <Box w={300}>
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
              required
              withAsterisk
              label="Contact name"
              placeholder="Enter contact name..."
              {...form.getInputProps('name')}
              mb={'sm'}
            />

            <TextInput
              component={IMaskInput}
              mask="000-00-00-000"
              required
              withAsterisk
              label="Contact phone number"
              placeholder="000-00-00-000"
              {...form.getInputProps('number')}
              mb={'sm'}
            />

            <Group position="center" mt="md">
              <Button variant="outline" onClick={() => form.reset()}>
                Reset
              </Button>
              <Button type="submit">Add Contact</Button>
            </Group>
          </form>
        </Box>
      </Stack>
    </Paper>
  );
};

export default ContactEditor;
