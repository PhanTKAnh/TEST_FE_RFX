import { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { getLocation } from "./services/LocationServices";
import SearchAndSort from "./components/SearchAndSort";
import LocationList from "./components/LocationList";
import FlyToLocation from "./components/FlyToLocation";
import "./css/style.css"

// Icons
const defaultIcon = new L.Icon({
  iconUrl: "https://static.thenounproject.com/png/333603-200.png",
  iconSize: [20, 20],
  iconAnchor: [15, 30],
});

const selectedIcon = new L.Icon({
  iconUrl:
    "https://thumbs.dreamstime.com/b/vector-map-location-icon-isolated-soft-shadow-element-design-ui-app-website-interface-blank-template-position-pin-118850501.jpg",
  iconSize: [30, 30],
  iconAnchor: [10, 20],
});

export default function MapWithList() {
  const [locations, setLocations] = useState([]);
  const [selected, setSelected] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const listRef = useRef([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await getLocation();
        setLocations(response);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };
    fetchApi();
  }, []);

  const handleSelect = (loc) => {
    setSelected(loc);
    const el = listRef.current[loc.id];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const filteredLocations = locations.filter(
    (loc) =>
      (loc.name?.toLowerCase() || "").includes(searchTerm.toLowerCase()) 
      // (loc.address?.toLowerCase() || "").includes(searchTerm.toLowerCase())
  );

  return (
    <div className="ml-map-wrapper">
      {/* Left panel */}
      <div className="ml-panel">
        <SearchAndSort
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSort={() =>
            setLocations([...locations].sort((a, b) => b.rating - a.rating))
          }
        />
        <LocationList
          locations={filteredLocations}
          selected={selected}
          handleSelect={handleSelect}
          listRef={listRef}
        />
      </div>

      {/* Map */}
      <div className="ml-map">
        <MapContainer
          center={[16.0678, 108.2208]}
          zoom={6}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {locations.map((loc) => (
            <Marker
              key={loc.id}
              position={[loc.location.lat, loc.location.lng]}
              icon={selected?.id === loc.id ? selectedIcon : defaultIcon}
              eventHandlers={{ click: () => handleSelect(loc) }}
            >
              <Popup>
                <b>{loc.name}</b>
                <br />
                {loc.description}
                <br />
                ⭐ {loc.rating}
              </Popup>
            </Marker>
          ))}
          <FlyToLocation location={selected} />
        </MapContainer>
      </div>
    </div>
  );
}
