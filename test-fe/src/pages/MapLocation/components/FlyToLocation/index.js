import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function FlyToLocation({ location }) {
  const map = useMap();

  useEffect(() => {
    if (location) {
      map.flyTo([location.location.lat, location.location.lng], 13);
    }
  }, [location, map]);

  return null;
}
 