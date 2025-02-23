import { LatLngExpression } from 'leaflet'
// import { MapContainer } from 'https://cdn.esm.sh/react-leaflet/MapContainer'
// import { TileLayer } from 'https://cdn.esm.sh/react-leaflet/TileLayer'
// import { Marker } from 'https://cdn.esm.sh/react-leaflet/Marker'

interface MiniMapProps {
  lat: number
  long: number
}

export const MiniMap = ({ lat, long }: MiniMapProps) => {
  // const position: LatLngExpression = [lat, long]
  return (
    // <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    //   <TileLayer
    //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //   />
    //   <Marker position={position}>
    //     {/*<Popup>*/}
    //     {/*  A pretty CSS3 popup. <br /> Easily customizable.*/}
    //     {/*</Popup>*/}
    //   </Marker>
    // </MapContainer>
    <iframe
      width="300"
      height="250"
      scrolling="no"
      src={`https://maps.google.com/maps?q=${lat},${long}&hl=es&z=14&output=embed`}
    />
  )
}
