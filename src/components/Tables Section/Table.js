import React from 'react';
import './Table.css';
import { useAPI } from "./../Context/ContextAPI";
import moment from 'moment';

const Table = () => {

  const { transitEvents } = useAPI();
  
  const state = transitEvents.state;

  const coloringStatus = () => {
    if(state === 'DELIVERED') {
      return "green";
    } else 
    if (state === 'CANCELLED' || state === "DELIVERED_TO_SENDER") {
      return "red";
    } else {
      return "yellow";
    }
  }
  
    const renderedStates = transitEvents.map((transitEvent) => {

    const formatTime = moment(transitEvent.timestamp).format('H:mma');
    const formatDate = moment(transitEvent.timestamp).format('DD/MM/YYYY');

    return (
      <tr key={transitEvent.timestamp}>
        <td>
          {transitEvent.hub}
        </td>
        <td>
          {formatDate}
        </td>
        <td>
          {formatTime}
        </td>
        <td>
          {transitEvent.state}<br/>
          <span className={coloringStatus()}>{transitEvent.reason}</span>
        </td>
      </tr>
    );
  })

    return ( 

        <table>
            <tbody>
              <tr className="table-header">
                <th>الفرع</th>
                <th>التاريخ</th>
                <th>الوقت</th>
                <th>تفاصيل</th>
              </tr>
              {renderedStates}
            </tbody>
        </table>
    );
}
 
export default Table;