import { cn } from "@/core/utils/cn";
import React, { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren & {
    className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
    return <div className={cn("mx-auto max-w-[1440px] px-[16px] md:px-[32px]", className)}>{children}</div>;
};

export default Container;
