import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useForm, isEmail } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Checkbox,
  Anchor,
  Stack,
} from '@mantine/core';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ name, email, password }) => {
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
  };

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
      terms: true,
    },

    validate: {
      name: val =>
        val.length <= 3
          ? 'Password should include at least 3 characters'
          : null,
      email: isEmail('Invalid email'),
      password: val =>
        val.length <= 6
          ? 'Password should include at least 6 characters'
          : null,
    },
  });

  return (
    <Paper shadow="sm" p="xl" w={350} mx="auto">
      <Text size="lg" weight={500} ta="center">
        Welcome, register with
      </Text>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            withAsterisk
            required
            label="Name"
            placeholder="Your name"
            value={form.values.name}
            onChange={event =>
              form.setFieldValue('name', event.currentTarget.value)
            }
            error={form.errors.name && 'Invalid email'}
            radius="md"
            {...form.getInputProps('name')}
          />
          <TextInput
            withAsterisk
            required
            label="Email"
            placeholder="hello@gmail.com"
            value={form.values.email}
            onChange={event =>
              form.setFieldValue('email', event.currentTarget.value)
            }
            error={form.errors.email && 'Invalid email'}
            radius="md"
            {...form.getInputProps('email')}
          />
          <PasswordInput
            withAsterisk
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={event =>
              form.setFieldValue('password', event.currentTarget.value)
            }
            radius="md"
            {...form.getInputProps('password')}
          />
          <Checkbox
            label="I accept terms and conditions"
            checked={form.values.terms}
            onChange={event =>
              form.setFieldValue('terms', event.currentTarget.checked)
            }
          />
        </Stack>

        <Group position="apart" mt="xl">
          <Text color="dimmed" size="xs">
            Already have an account?{' '}
            <Anchor component={Link} to="/login">
              Login
            </Anchor>
          </Text>
          <Button type="submit">Register</Button>
        </Group>
      </form>
    </Paper>
  );
};

export default RegisterForm;
