import { render, screen } from '@testing-library/react';
import { detailsMocked } from '../mocks/masterList';
import DetailView from '../details';



describe('DetailView', () => {
  beforeEach(() => {
    window.localStorage.setItem('detail', JSON.stringify(detailsMocked))
  })

  test('it renders the DetailView page', async () => {
    render(<DetailView />);
    const title = screen.getByText(/Republican Candidates Keep Straying Into Dangerous Territory: Abortion/i);
    expect(title).toBeInTheDocument();
  });
})


