import { create } from "zustand";

type AppLayoutStore = {
    title: string;
    setTitle: (title: string) => void;
};

export const appLayoutStore = create<AppLayoutStore>((set) => {
    return {
        title: "",
        setTitle: (title) => set({ title }),
    };
});
