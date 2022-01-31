import React from 'react';
import './TrackingDetails.css';
import moment from 'moment';
import { useAPI } from "./../Context/ContextAPI";


const TrackingDetails = () => {

  const { currentStatus, trackingNum, promiseDate } = useAPI();
  
  const state = currentStatus.state;
  const lastUpdate = currentStatus.timestamp;

  const lastUpdateFormated = moment(lastUpdate).format('dddd DD/MM/YYYY H:mma');
  const promiseTimeFormated = moment(promiseDate).format('d MMMM YYYY');

  console.log();

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


    return ( 
      <div className="status">
        <div className="status-info">
          <span>
            {trackingNum} رقم الشحنة
          </span>
          <p className={coloringStatus()}>{state}</p>
        </div>
        <div className="status-info">
          <span>
            اخر تحديث
          </span>
          <p>{lastUpdateFormated}</p>
        </div>
        <div className="status-info">
          <span>
            اسم التاجر
          </span>
          <p>SOUQ.COM</p>
        </div>
        <div className="status-info">
          <span>
            موعد التسليم خلال
          </span>
          <p>{promiseTimeFormated}</p>
        </div>
      </div>
    );
}
 
export default TrackingDetails;