import React from 'react';
import { useDispatch } from 'react-redux';
import { ActionIcon, Group } from '@mantine/core';
import { IconTrash, IconEdit } from '@tabler/icons-react';
import { deleteContact } from 'redux/contacts/operations';

const ContactItem = ({ contactId, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contactId));

  return (
    <>
      <td>{name}</td>
      <td>{number}</td>
      <td>
        <Group position="center" spacing="xs">
          <ActionIcon color="red" variant="outline" onClick={handleDelete}>
            <IconTrash size="1.125rem" aria-label="Delete" />
          </ActionIcon>
          <ActionIcon color="cyan" variant="outline" onClick={() => {}}>
            <IconEdit size="1.125rem" aria-label="Delete" />
          </ActionIcon>
        </Group>
      </td>
    </>
  );
};

export default ContactItem;
