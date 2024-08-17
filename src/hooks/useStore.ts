import { User } from 'firebase/auth'
import { create } from 'zustand'

interface IStore {
    currentUser: User | null,
    setCurrentUser: (currentUser: User | null) => void
}

export const useStore = create<IStore>((set) => ({
    currentUser: null,
    setCurrentUser: (currentUser: User | null) => set(() => ({currentUser})),
}))