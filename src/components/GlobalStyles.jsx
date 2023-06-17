import { Global } from '@mantine/core';

const GlobalStyles = () => {
  return (
    <Global
      styles={theme => ({
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },

        body: {
          ...theme.fn.fontStyles(),
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[7] : '#F8F9FA',
          color:
            theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          lineHeight: theme.lineHeight,
        },

        '.your-class': {
          backgroundColor: 'red',
        },

        '#your-id > [data-active]': {
          backgroundColor: 'pink',
        },
      })}
    />
  );
};

export default GlobalStyles;
