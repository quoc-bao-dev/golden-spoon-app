"use client";

import { useEffect } from "react";
import { appLayoutStore } from "./appLayoutStroe";

type AppLayoutConfigProps = {
    title: string;
};
const AppLayoutConfig = ({ title }: AppLayoutConfigProps) => {
    const { setTitle } = appLayoutStore();

    useEffect(() => {
        setTitle(title);
    }, [title]);

    return null;
};

export default AppLayoutConfig;
