import selectedTicketReducer from './../src/reducers/selected-ticket-reducer';
import c from './../constants';

describe("selectedTicketReducer", () => {

  test('Should return default state if no action is recognized', () => {
    expect(selectedTicketReducer({}, {type: null})).toEqual({});
  });

  test('Should record which ticket has been selected by user', () => {
    expect(selectedTicketReducer({}, {type: c.SELECT_TICKET, ticketId: 1})).toEqual(1);
  });

});
