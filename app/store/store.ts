// store.ts
import create from 'zustand';

interface Store {
    recurrence: string;
    setRecurrence: (recurrence: string) => void;
}

export const useStore = create<Store>((set) => ({
    recurrence: 'none',
    setRecurrence: (recurrence) => set({ recurrence }),
}));