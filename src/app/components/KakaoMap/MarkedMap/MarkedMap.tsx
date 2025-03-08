import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useParams, useSearchParams } from 'next/navigation';

const MarkedMap = () => {
  const searchParams = useSearchParams()
  
  const lat = searchParams.get('lat')
  const lng = searchParams.get('lng')

  console.log(`lat: ${lat}, lng: ${lng}`)

  if (!lat || !lng) {
    return <div>Error Occured...</div>
  }

    return (
        <Map
        center={{ lat: Number(lat), lng: Number(lng) }}
        style={{ width: '100%', height: '360px' }}
        level={3}
      >
        <MapMarker position={{ lat: Number(lat), lng: Number(lng) }}>
            <div style={{ color: '#000' }}>Hello World!</div>
        </MapMarker>
      </Map>  
    );
}

export default MarkedMap