import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

function GoogleMaps({ coords }) {
  //   const position = { lat: 43.6484673, lng: -79.3822378 };
  return (
    <div className="overflow-hidden">
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            width: "100%",
            height: "20rem",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <Map zoom={10} center={coords} mapId={import.meta.env.VITE_MAP_ID}>
            <AdvancedMarker position={coords}></AdvancedMarker>
          </Map>
        </div>
      </APIProvider>
    </div>
  );
}

export default GoogleMaps;
