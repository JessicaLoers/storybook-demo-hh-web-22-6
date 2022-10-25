import GlobalStyle from '../src/GlobalStyle';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

/*
decorators, werden von Storybook um unsere Stories 'geschlungen'
Wir übergeben unsere jeweilige Story. z.B. Button Story, importieren und verwenden
die GlobalStyle Componente.
*/
export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];
