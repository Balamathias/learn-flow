import { create } from 'zustand'

interface IStore {
    currentUser: Record<string, unknown>
}

export const useStore = create<IStore>((set) => ({
    currentUser: {},
    setCurrentUser: (currentUser: Record<string, unknown>) => set(() => ({currentUser: currentUser})),
}))