import { create } from 'zustand'

interface BearState {
    blackBears: number;
    polarBears: number;
    pandaBears: number;
    increasePopulation: (by: number) => void;
}

export const useBearStore = create<BearState>((set) => ({
    blackBears: 10,
    polarBears: 10,
    pandaBears: 10,
    increasePopulation: (by: number) => set((state) => ({ blackBears: state.blackBears + by })),
}))