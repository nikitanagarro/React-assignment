import { render, screen } from '@testing-library/react';
import MasterList from './../masterList';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { articleListMocked as mockList } from '../mocks/masterList';

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn().mockResolvedValue(mockList),
  useSelector: () => jest.fn(),
}));


describe('With React Testing Library', () => {
  const initialState = mockList
  const mockStore = configureStore();
  let store;

  test('it renders the masterlist page', async () => {
    store = mockStore(initialState);

    render(<BrowserRouter><MasterList /></BrowserRouter>);
    const title = screen.getByText(/NY Times Most Viewed Articles/i);
    expect(title).toBeInTheDocument();
  });
})


