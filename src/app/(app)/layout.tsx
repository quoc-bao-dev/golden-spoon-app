import AppLayout from "@/core/components/layout/AppLayout";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
    return <AppLayout>{children}</AppLayout>;
};

export default Layout;
