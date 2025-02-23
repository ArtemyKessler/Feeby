interface MiniMapProps {
  lat: number
  long: number
}

export const MiniMap = ({ lat, long }: MiniMapProps) => {
  return (
    <iframe
      width="300"
      height="250"
      src={`https://maps.google.com/maps?q=${lat},${long}&hl=en&z=14&output=embed`}
    />
  )
}
