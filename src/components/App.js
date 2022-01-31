import React from 'react';
import Navbar from './Navbar/Navbar';
import TrackingTable from './Tracking Table/TrackingTable';
import TableSection from './Tables Section/TableSection';
import Footer from './Footer/Footer';
import { APIContextProvider } from './Context/ContextAPI';

const App = () => {

  return ( 
    <APIContextProvider>
      <Navbar />
      <TrackingTable />
      <TableSection />
      <Footer />
    </APIContextProvider>
  );
}
 
export default App;