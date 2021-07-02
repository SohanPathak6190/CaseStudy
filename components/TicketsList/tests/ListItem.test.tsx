import { fireEvent, render, screen } from '../../../test-utils';
import { ListItem } from '../ListItem';
import { createFakeTickets } from '../../../mocks/tickets.mock';
import { TicketStatus } from '../../../shared/types';

jest.mock('../../../hooks/useTickets');

const ticket = createFakeTickets()[0];

describe('ListItem', () => {
  const deleteHandler = jest.fn();
  it('should display delete icon', () => {
    render(<ListItem key={ticket.id} {...ticket} onRemoveTicket={deleteHandler} />);
    expect(screen.getByTestId(`delete${ticket.id}`)).toBeInTheDocument();
    fireEvent.click(screen.getByTestId(`delete${ticket.id}`));
    expect(deleteHandler).toHaveBeenCalledTimes(1);
    expect(deleteHandler).toHaveBeenCalledWith(ticket.id);
  });

  it('should add closedStatus class for closed status', () => {
    ticket.status = TicketStatus.CLOSED;
    render(<ListItem key={ticket.id} {...ticket} onRemoveTicket={deleteHandler} />);
    const statusChip = screen.getByTestId(`status${ticket.id}`);
    expect(statusChip).toBeInTheDocument();
    expect(statusChip.className).toContain(`status`);
    expect(statusChip.className).toContain(`closedStatus`);
  });

  it('should not add closedStatus class for open status', () => {
    ticket.status = TicketStatus.OPEN;
    render(<ListItem key={ticket.id} {...ticket} onRemoveTicket={deleteHandler} />);
    const statusChip = screen.getByTestId(`status${ticket.id}`);
    expect(statusChip).toBeInTheDocument();
    expect(statusChip.className).toContain(`status`);
    expect(statusChip.className).not.toContain(`closedStatus`);
  });
});
