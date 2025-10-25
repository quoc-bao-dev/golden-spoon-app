import { _Icon } from "@/core/const/asset";
import Image from "next/image";

type IconProps = { icon: keyof typeof _Icon; size: number; className?: string };

const Icon = ({ icon: key, size, className }: IconProps) => {
    return <Image src={_Icon[key]} alt={key} width={size} height={size} className={className} />;
};

export default Icon;
