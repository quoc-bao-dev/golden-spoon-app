"use client";

import Container from "@/core/components/layout/Container";
import { _Image } from "@/core/const/asset";
import AppLayoutConfig from "@/store/app-layout/AppLayoutConfig";
import Image from "next/image";

const MyVoucher = () => {
    return (
        <>
            <AppLayoutConfig title="Ưu đãi của tôi" />

            <Container>
                <div className="flex flex-col gap-3">
                    {/* ==== Voucher Item */}
                    {Array.from({ length: 10 }).map((_, index) => (
                        <VoucherItem key={index} />
                    ))}
                </div>
            </Container>
        </>
    );
};

const VoucherItem = () => {
    return (
        <div className="bg-white rounded-xl flex items-stretch overflow-hidden min-h-[100px]">
            {/* Logo Section - Logo Shogun với samurai helmet */}
            <div className="shrink-0 relative flex">
                <div className="h-full border-t border-b border-l border-[#DDDDE3] rounded-l-xl flex items-center">
                    <div className=" px-2 flex flex-col items-center justify-center">
                        {/* Samurai helmet icon - có thể thay bằng icon thực tế */}
                        <Image
                            src={_Image["logo-shogun"]}
                            width={100}
                            height={100}
                            alt="logo-shogun"
                            className="w-[50px] object-contain"
                        />
                    </div>
                </div>
                <div className="absolute right-0 h-full w-px flex items-center justify-center">
                    {" "}
                    <div className="w-px h-[60%] border border-dashed border-[#DDDDE3]"></div>
                </div>
                <div className="absolute top-0 right-0 size-[20px] border border-[#DDDDE3] bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 size-[20px] border border-[#DDDDE3] bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="flex  border-t border-r border-b border-[#DDDDE3] rounded-r-xl p-4 gap-1">
                {/* Content Section - Thông tin ưu đãi */}
                <div className="flex-1 min-w-0 ">
                    {/* Title - Tên ưu đãi */}
                    <h3 className="text-xs font-medium text-gray-900 mb-1 line-clamp-2">
                        Kaen Day - Thứ 3, thỏa thích tiệc nướng, Shogun tặng ngay coupon...
                    </h3>

                    {/* Validity Period - Thời gian áp dụng */}
                    <p className="text-sm text-gray-500 mb-2">Áp dụng: 14/10/2025 - 27/10/2025</p>
                </div>

                {/* Action Button - Nút áp dụng */}
                <div className="shrink-0 mt-auto">
                    <button className=" text-brand-500 text-sm  transition-colors">Áp dụng</button>
                </div>
            </div>
        </div>
    );
};

export default MyVoucher;
