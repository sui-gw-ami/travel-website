import data from '@/assets/data/dalianTours.json'
import { computed } from 'vue'

export default function useTourInfo(tourId) {
  const tourInfo = computed(() => 
    data.dalianTours.find(t => t.id === tourId)
  )

  return {
    tourInfo
  }
}