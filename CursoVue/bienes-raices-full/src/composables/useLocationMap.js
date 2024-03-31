import {ref} from 'vue';

export default function useLocationMap() {
  const zoom = ref(15);
  const center = ref([25.767424, -80.192033]);

  function pin(e) {
    //* la data de coordenadas debe guardarse en una array

    const marker = e.target.getLatLng();

    center.value = [marker.lat, marker.lng];
    console.log(center.value);
  }

  return {zoom, center, pin};
}
