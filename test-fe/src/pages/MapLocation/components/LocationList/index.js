import { useState } from "react";

export default function LocationList({ locations, selected, handleSelect, listRef }) {
  const [visibleCount, setVisibleCount] = useState(10); // số item hiển thị ban đầu
  const increment = 10; // mỗi lần nhấn load thêm bao nhiêu item

  const visibleLocations = locations.slice(0, visibleCount);

  return (
    <div className="ml-list">
      {visibleLocations.map((loc) => (
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

      {visibleCount < locations.length && (
        <button className="btn-lead-more"
          onClick={() => setVisibleCount(visibleCount + increment)}
        >
          Load More
        </button>
      )}
    </div>
  );
}
