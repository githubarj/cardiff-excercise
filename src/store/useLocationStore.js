import {create} from 'zustand'

const useLocationStore = create((set) => ({
  locationFilter: [], 
  setLocationFilter: (filter) => set({ locationFilter: filter }), 
}));

export default useLocationStore;