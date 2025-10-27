import AppLayoutConfig from "@/store/app-layout/AppLayoutConfig";
import React from "react";

import Image from "next/image";
import { _Image } from "@/core/const/asset";
import Container from "@/core/components/layout/Container";
import Icon from "@/core/components/ui/Icon";
import Rating from "@/core/components/ui/Rating";

const CheckoutPage = () => {
    return (
        <>
            <AppLayoutConfig title="Hóa đơn tạm tính" />
            <div className="bg-[#EAECF0] flex flex-col gap-2">
                {/* -- gogi -- */}
                <div className="bg-white  py-3 w-full">
                    <Container className=" flex gap-2">
                        {/* logo */}
                        <div className="size-[37px]">
                            <Image
                                src={_Image["logo-gogi"]}
                                alt="logo-gogi"
                                width={100}
                                height={100}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="text-sm font-medium text-gray-900">Gogi House Đường số 41</h2>
                            <p className="text-sm text-gray-500">
                                Số điện thoại: <span className="font-medium text-[#007AFF]">02873004124</span>
                            </p>
                            <div className="text-sm text-gray-500 flex justify-between">
                                <p className="">Mã KH: 06258118</p>
                                <p className="">23/08/2025 - 13:58</p>
                            </div>
                        </div>
                    </Container>
                </div>

                {/* discount */}
                <div className="py-4 bg-white">
                    <Container>
                        <div className="flex justify-between">
                            <h2 className="font-medium text-gray-900">Giảm giá</h2>
                            <div className="flex items-center gap-1">
                                <p className="text-sm text-[#007AFF] font-medium">Chọn thêm</p>
                                <Icon icon="icon-arrow-blue-right" size={14} className="size-[14px]" />
                            </div>
                        </div>

                        {/* --- list taps --- */}
                        <div className="pt-3 flex flex-wrap gap-2">
                            <div className="py-2 px-3 rounded-full border border-gray-200">
                                <p className="text-gray-900">02500CR06401-150K bill 1000K-MN</p>
                            </div>

                            <div className="py-2 px-3 rounded-full border border-gray-200">
                                <p className="text-gray-900">02500CR06401-150K bill 1000K-MN</p>
                            </div>

                            <div className="py-2 px-3 rounded-full border border-gray-200 relative">
                                <p className="text-gray-900">02500CR06401-150K bill 1000K-MN</p>

                                <div className="absolute top-1 right-1 translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                                    <Icon icon="icon-close" size={20} />
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <p className="text-xs text-gray-500 leading-[160%]">
                                Tổng số tiến giảm giả <span className="text-[#D94D27] ">không vượt quá tối đa 50%</span>{" "}
                                tổng số tiền hàng được áp dụng khuyến mại
                            </p>
                        </div>
                    </Container>
                </div>

                {/* tu cach thanh toan */}

                <div className="bg-white py-4">
                    <Container>
                        <h2 className="text-gray-900">Tư cách thanh toán</h2>
                        <div className="pt-4 flex items-center gap-3">
                            <Icon icon="icon-cheked" size={20} />
                            <p className="text-sm text-gray-900">Gói Không giới hạn 30 ngày</p>
                        </div>
                    </Container>
                </div>

                {/* ghi nhan cho nhan hang */}

                <div className="bg-white py-4">
                    <Container>
                        <h2 className="text-gray-900">Ghi nhận cho nhà hàng</h2>
                        <div className="mt-4 p-1 rounded-sm flex items-center gap-3 bg-[#F2F4F7]">
                            <Image
                                src={_Image["logo-gogi"]}
                                alt="logo-gogi"
                                width={100}
                                height={100}
                                className="size-[48px] object-contain"
                            />
                            <p className="text-sm text-gray-900">iSushi Vincom Lê Thánh Tôn</p>
                        </div>
                        <div className="pt-4">
                            <p className="text-gray-400 text-sm leading-[160%]">
                                Hãy đánh giá trải nghiệm của bạn để ghi nhận cho iSushi Vincom Lê Thánh Tôn nhé.
                            </p>
                        </div>
                        <div className="pt-2">
                            <Rating />
                        </div>
                    </Container>
                </div>

                {/* chi tiet thanh toan */}
                <div className="py-4 bg-white">
                    <Container>
                        <h2 className="text-gray-900 text-sm">Chi tiết thnah toán</h2>

                        <div className="mt-4 p-1 rounded-sm flex items-center gap-3 bg-[#F2F4F7]">
                            <Image
                                src={_Image["logo-gogi"]}
                                alt="logo-gogi"
                                width={100}
                                height={100}
                                className="size-[48px] object-contain"
                            />
                            <p className="text-sm text-gray-900">iSushi Vincom Lê Thánh Tôn</p>
                        </div>
                        <div className="pt-4 flex flex-col gap-2">
                            <div className="flex justify-between">
                                <p className="text-gray-900 text-sm">Tiền hàng</p>
                                <p className="text-gray-900 text-sm">907.000 vnđ</p>
                            </div>

                            <div className="flex justify-between">
                                <p className="text-gray-900 text-xs">Được áp dụng khuyến mãi</p>
                                <p className="text-gray-900 text-xs">907.000 vnđ</p>
                            </div>

                            <div className="flex justify-between">
                                <p className="text-gray-900 text-sm">Giảm giá</p>
                                <p className="text-gray-900 text-sm">-360.700 vnđ</p>
                            </div>
                        </div>
                        <div className="pt-3">
                            <div className="flex justify-between">
                                <p className="text-gray-900">Tổng phải trả (trước VAT)</p>
                                <p className="text-[#D94D27]">546.300 vnđ</p>
                            </div>
                        </div>

                        <div className="pt-3">
                            <button className=" py-3 flex items-center justify-center rounded-full bg-brand-500 text-gray-900 w-full cursor-pointer hover:bg-brand-600 transition-all duration-300">
                                Thanh toán
                            </button>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default CheckoutPage;
