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

    const update = transitEvent.state;
    const formatTime = moment(transitEvent.timestamp).format('h:mma');
    const formatDate = moment(transitEvent.timestamp).format('DD/MM/YYYY');



    function arabicUpdates() {
      switch(update) {
        case 'TICKET_CREATED':
          return 'تم إنشاء الشحنة';
        case 'PACKAGE_RECEIVED':
          return 'تم استلام الشحنة من التاجر';
        case 'IN_TRANSIT':
          return 'في مرحلة الإنتقال';
        case 'NOT_YET_SHIPPED':
          return 'لم يتم شحن المنتج';
        case 'OUT_FOR_DELIVERY':
          return 'الشحنة خرجت للتسليم';
        case 'WAITING_FOR_CUSTOMER_ACTION':
          return 'في إنتظار العميل';
        case 'DELIVERED_TO_SENDER':
          return 'تم إلغاء الشحنة';
        case 'DELIVERED':
          return 'تم التوصيل';
        case 'RECEIVED_DELIVERY_LOCATION':
          return 'تم استقبال مكان التوصيل';
        default:
          return 'لا توجد معلومات';
      }
    }

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
          {arabicUpdates()}<br/>
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