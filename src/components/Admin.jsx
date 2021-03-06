import React from 'react';
import PropTypes from 'prop-types';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
import { connect } from 'react-redux';

function Admin(props) {
  let optionalSelectedTicketContent = null;
  if (props.selectedTicket.length > 0) {
    optionalSelectedTicketContent = <TicketDetail selectedTicket={props.ticketList[props.selectedTicket]}/>;
  }
  return (
    <div>
      <h2>Admin</h2>
      {optionalSelectedTicketContent}
      <TicketList
        ticketList={props.ticketList}
        currentRouterPath={props.currentRouterPath}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    selectedTicket: state.selectedTicket,
    ticketList: state.masterTicketList
  };
};

Admin.propTypes = {
  selectedTicket: PropTypes.string,
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(Admin);
