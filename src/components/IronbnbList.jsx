// src/components/IronbnbList.jsx

import { useContext } from "react";
import { ApartmentContext } from "../context/apartments.context";


function IronbnbList() {

    const { fetching, apartments } = useContext(ApartmentContext)

  return (
    <div>
      <h3>List of apartments</h3>
      {fetching && <p>Loading ...</p>}

      {apartments.map((apt) => {
        return (
          <div key={apt._id} className="card">
            <img src={apt.img} alt="apartment" />
            <h3>{apt.title}</h3>
            <p>Price: {apt.pricePerDay}</p>
          </div>
        )
      })}
    </div>
  );
}

export default IronbnbList;
