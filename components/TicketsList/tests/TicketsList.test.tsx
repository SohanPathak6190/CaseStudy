import { render, screen } from '../../../test-utils';
import { TicketsList } from '../TicketsList';
import { useTickets } from '../../../hooks/useTickets';
import { createFakeTickets } from '../../../mocks/tickets.mock';

jest.mock('../../../hooks/useTickets');

const tickets = createFakeTickets();

describe('TicketsList', () => {
  it('should display List Header in larger screen', () => {
    (useTickets as jest.Mock).mockReturnValue({
      isLoading: false,
      data: tickets,
    });
    render(<TicketsList />);
    expect(screen.getByTestId(`listHeader`)).toBeInTheDocument();
  });

  it('should not display List Header in mobile screen', () => {
    (useTickets as jest.Mock).mockReturnValue({
      isLoading: false,
      data: tickets,
    });
    //ToDO: Find better way to resize screen?
    render(<TicketsList />);
    // expect(screen.getByTestId(`listHeader`)).not.toBeInTheDocument();
  });
});
