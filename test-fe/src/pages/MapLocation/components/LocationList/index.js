import { useState } from "react";

export default function LocationList({ locations, selected, handleSelect, listRef }) {

  return (
    <div className="ml-list">
      {locations.map((loc) => (
        <div
          key={loc.id}
          ref={(el) => (listRef.current[loc.id] = el)}
          className={`ml-list-item ${selected?.id === loc.id ? "ml-selected" : ""}`}
          onClick={() => handleSelect(loc)}
        >
          <h4 className="ml-item-title">{loc.name}</h4>
          <p className="ml-item-address">{loc.address}</p>
          <small className="ml-item-rating">⭐ {loc.rating}</small>
        </div>
      ))}

    </div>
  );
}
