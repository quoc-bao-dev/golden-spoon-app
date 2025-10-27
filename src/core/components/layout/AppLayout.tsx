"use client";

import React, { PropsWithChildren } from "react";
import Container from "./Container";
import Icon from "../ui/Icon";
import { appLayoutStore } from "@/store/app-layout/appLayoutStroe";
import AppModal from "../common/AppModal";

const AppLayout = ({ children }: PropsWithChildren) => {
    const { title } = appLayoutStore();
    return (
        <div className="h-svh overflow-hidden flex flex-col">
            {/* ============ APP HEADER ============ */}
            <div className="py-[24px] ">
                <Container>
                    <div className="flex items-center justify-center relative">
                        <Icon icon="icon-arrow-left" size={24} className="absolute left-0 top-1/2 -translate-y-1/2" />
                        <h1 className="text-base text-gray-900 font-medium text-center">{title}</h1>
                    </div>
                </Container>
            </div>

            {/* ============ APP CONTENT ============ */}
            <div className="pt-4 flex-1 overflow-y-auto min-h-0 pb-5">{children}</div>
            <AppModal />
        </div>
    );
};

export default AppLayout;
