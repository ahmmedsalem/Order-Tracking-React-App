import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import TableSection from '../components/Tables Section/TableSection';
import TrackingTable from '../components/Tracking Table/TrackingTable';
import Footer from '../components/Footer/Footer';

const OrderTracking = () => {
    return ( 
        <React.Fragment >
            <Navbar />
            <TrackingTable />
            <TableSection />
            <Footer />
        </React.Fragment>
    );
}
 
export default OrderTracking;