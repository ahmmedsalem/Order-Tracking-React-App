import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import TableSection from '../components/Tables Section/TableSection';
import TrackingTable from '../components/Tracking Table/TrackingTable';
import Footer from '../components/Footer/Footer';
import { APIContextProvider } from '../components/Context/ContextAPI';

const OrderTracking = () => {
    return ( 
        <APIContextProvider >
            <Navbar />
            <TrackingTable />
            <TableSection />
            <Footer />
        </APIContextProvider>
    );
}
 
export default OrderTracking;