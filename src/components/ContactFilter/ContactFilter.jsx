import React from 'react';
import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/slice';

const ContactFilter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <TextInput
      placeholder="Search by name"
      mb="md"
      icon={<IconSearch size="0.9rem" stroke={1.5} />}
      onChange={handleFilterChange}
    />
  );
};

export default ContactFilter;
