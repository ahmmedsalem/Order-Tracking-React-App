import React from 'react';
import TrackingDetails from './TrackingDetails';
import './TrackingTable.css'
import Tracker from './Stepper';

const TrackingTable = () => {
    return ( 
        <div className="container tracking-table">
            <div className="row">
                <div className="content">
                    <TrackingDetails />
                    <Tracker />
                </div>
            </div>
        </div>
     );
}
 
export default TrackingTable;