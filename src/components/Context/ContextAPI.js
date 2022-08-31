import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const APIContext = createContext();

export function APIContextProvider({ children }) {

  const [currentStatus, setCurrentStatus] = useState([]);
  const [transitEvents, setTransitEvents] = useState([]);
  const [promiseDate, setPromiseDate] = useState("");
  const [trackingNum, setTrackingNum] = useState("");

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://tracking.bosta.co/shipments/track/3000416046`
      );
      setCurrentStatus(data.CurrentStatus);
      setTransitEvents(data.TransitEvents);
      setTrackingNum(data.TrackingNumber);
      setPromiseDate(data.PromisedDate);
    }
    fetchData();
  }, []);


  return (
    <APIContext.Provider
        value={{
          currentStatus,
          transitEvents,
          trackingNum,
          promiseDate
        }}>
      {children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
