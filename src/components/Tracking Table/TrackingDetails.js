import React from 'react';
import './TrackingDetails.css';
import moment from 'moment';
import { useAPI } from "./../Context/ContextAPI";
import SwitchLanguage from '../TranslationState';


const TrackingDetails = () => {


  const { currentStatus, trackingNum, promiseDate } = useAPI();
  
  const currentState = currentStatus.state;
  const lastUpdate = currentStatus.timestamp;

  const lastUpdateFormated = moment(lastUpdate).format('dddd DD/MM/YYYY h:mma');
  const promiseTimeFormated = moment(promiseDate).format('d MMMM YYYY');


  const coloringStatus = () => {
    if(currentState === 'DELIVERED') {
      return "green";
    } else 
    if (currentState === 'CANCELLED' || currentState === "DELIVERED_TO_SENDER") {
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
          <p className={coloringStatus()}>
            <SwitchLanguage />
          </p>
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