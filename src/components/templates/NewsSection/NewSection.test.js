import React from 'react';
import { screen } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import NewsSection, { query } from './NewsSection';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';

const mock = new MockAdapter(axios);

describe('News Section', () => {
  afterEach(() => {
    mock.reset();
  });

  it('Displays error when the article are not loaded', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(500);
    renderWithProviders(<NewsSection />);
    await screen.findByText(/Sorry/);
  });

  it('Displays the articles', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(200),
      {
        data: {
          allArticles: [{ id: 1, title: 'Test', category: 'Test', content: 'Test' }],
        },
      };
    renderWithProviders(<NewsSection />);
    screen.findAllByText(/Test/);
  });

  it('Displays Loading', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(200),
    renderWithProviders(<NewsSection />);
    screen.findByText('Loading');
  });
});
