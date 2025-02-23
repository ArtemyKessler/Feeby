interface MiniMapProps {
  lat: number
  long: number
}

export const MiniMap = ({ lat, long }: MiniMapProps) => {
  const lang = localStorage.getItem('i18nextLng')
  return (
    <iframe
      width="100%"
      height="250"
      src={`https://maps.google.com/maps?q=${lat},${long}&hl=${lang}&z=14&output=embed`}
    />
  )
}
