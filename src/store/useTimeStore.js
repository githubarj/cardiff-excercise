import {create} from 'zustand'

const useTimeStore = create((set) => ({
  timeQuery: null, 
  setTimeQuery: (time) => set({ timeQuery: time }), 
}));

export default useTimeStore;