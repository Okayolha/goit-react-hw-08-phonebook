import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { useForm, isEmail } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Anchor,
  Stack,
} from '@mantine/core';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }) => {
    dispatch(
      logIn({
        email,
        password,
      })
    );
  };

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: isEmail('Invalid email'),
    },
  });

  return (
    <Paper shadow="sm" p="xl" w={350} mx="auto">
      <Text size="lg" weight={500} ta="center">
        Welcome, login with
      </Text>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
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
        </Stack>

        <Group position="apart" mt="xl">
          <Text color="dimmed" size="xs">
            Don't have an account?{' '}
            <Anchor component={Link} to="/register">
              Register
            </Anchor>
          </Text>
          <Button type="submit">Login</Button>
        </Group>
      </form>
    </Paper>
  );
};

export default LoginForm;
