import { createContext, useEffect, useState } from "react";

import axios from "axios";
import { API_URL } from "../services/API_URL";

const ApartmentContext = createContext()

const ApartmentProvider = ({ children }) => {
    const [fetching, setFetching] = useState(true);
    const [apartments, setApartments] = useState([]);
  
    useEffect(() => {
      console.log("useEffect - Initial render (Mounting)");
      axios.get(API_URL)
          .then((response) => {
              setApartments(response.data);
              setFetching(false);
          })
          .catch((err) => {
              console.log(err)
          })
    }, []);

    return (
        <ApartmentContext.Provider value={{ fetching, apartments }} >
            {children}
        </ApartmentContext.Provider>
    )
}

export { ApartmentContext, ApartmentProvider}