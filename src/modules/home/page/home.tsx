import Container from "@/core/components/layout/Container";
import Icon from "@/core/components/ui/Icon";
import { _Image } from "@/core/const/asset";
import Image from "next/image";

const HomePage = () => {
    return (
        <div className="bg-[#FCFCFC] min-h-svh overflow-hidden">
            {/* ============  BACKGROUND ============ */}

            {/* ============  APP HEADER ============ */}
            <div className="relative h-fit">
                {/* ============  BACKGROUND ============ */}
                <div className="absolute top-0 left-0 w-full h-[96px]  bg-cover bg-center bg-brand-500 "></div>

                {/* ============  CONTENT ============ */}
                <Container className="relative z-10 pt-4">
                    <div className="py-[12px] flex justify-between items-center">
                        {/*  === user name === */}
                        <h2 className="text-gray-900">Chào MINH NHAT</h2>

                        {/* === action button === */}
                        <div className="flex gap-3 items-center ">
                            <Icon icon="icon-search" size={24} />
                            <Icon icon="icon-history" size={24} />
                        </div>
                    </div>
                </Container>
            </div>

            {/* ============ WALLET BALANCE ============ */}
            <div className="relative">
                <Container>
                    <div className="p-3 rounded-[12px] bg-white flex items-center justify-between">
                        {/* === wallet === */}
                        <div className="relative flex items-center gap-2">
                            <div className="relative">
                                <div className="absolute -top-2 -right-2">
                                    <div className="size-[20px] rounded-full text-xs bg-gray-900 text-white flex items-center justify-center">
                                        1
                                    </div>
                                </div>
                                <Icon icon="icon-gift" size={26} />
                            </div>

                            <p className="text-gray-900 text-sm">Ví Voucher, Coupon</p>
                        </div>

                        {/* === coin === */}
                        <div className="flex items-center gap-2">
                            <Icon icon="icon-rewards" size={26} />
                            <p className="text-gray-900 text-sm">300 G-coin</p>
                        </div>
                    </div>
                </Container>
            </div>

            {/* ============ SECTION SHORTCUT LIST ============ */}
            <div className="relative">
                <Container>
                    <div className="grid grid-cols-4 gap-1 py-2">
                        {/* === shortcut item === */}
                        <div className="flex flex-col items-center gap-2">
                            <Icon icon="icon-menu-table" size={48} />
                            <p className="text-gray-700 text-xs">Đặt bàn</p>
                        </div>

                        {/* === shortcut item === */}
                        <div className="flex flex-col items-center gap-2">
                            <Icon icon="icon-menu-address" size={48} />
                            <p className="text-gray-700 text-xs">Tìm nhà hàng</p>
                        </div>

                        {/* === shortcut item === */}
                        <div className="flex flex-col items-center gap-2">
                            <Icon icon="icon-menu-cart" size={48} />
                            <p className="text-gray-700 text-xs max-w-[80%] text-center">Đặt hàngGdeli.vn </p>
                        </div>

                        {/* === shortcut item === */}
                        <div className="flex flex-col items-center gap-2">
                            <Icon icon="icon-menu-book" size={48} />
                            <p className="text-gray-700 text-xs">Đặt hàng iCook</p>
                        </div>
                    </div>

                    <div className="pt-2 text-[#007AFF] text-sm text-center font-medium">Xem tất cả dịch vụ</div>
                </Container>
            </div>

            {/* ============  Greeting Banner ============ */}
            <div className="">
                <div className="py-[24px]">
                    <Container>
                        <Image
                            src={_Image["banner-01"]}
                            alt="banner-01"
                            width={1000}
                            height={1000}
                            className="w-full aspect-358/167 rounded-[12px]"
                        />
                    </Container>
                </div>
            </div>

            {/* ============ Promotion Carousel ============ */}
            <div className="">
                {/* === header === */}
                <Container>
                    <div className="flex items-center justify-between">
                        <h2 className="text-gray-900">Ưu đãi siêu hời</h2>
                        <p className="text-[#007AFF] text-sm font-medium">Tất cả</p>
                    </div>
                </Container>

                {/* === carousel === */}
                <div className="pt-2">
                    <Container>
                        <div className="flex gap-4">
                            {/* === promotion item === */}
                            <div className="w-[316px] shrink-0">
                                <Image
                                    src={_Image["banner-02"]}
                                    alt="banner-02"
                                    width={1000}
                                    height={1000}
                                    className="w-full aspect-256/120 rounded-[12px]"
                                />
                                <div className="pt-2 text-gray-900">Mừng sinh nhật bạn GoGi khao 10%</div>
                                <div className="pt-2">
                                    <div className="flex justify-between items-center">
                                        <div className="">
                                            <p className="text-xs text-gray-700">Mừng sinh nhật bạn GoGi khao 10%</p>
                                            <div className="flex gap-1 items-center pt-1">
                                                <Icon icon="icon-rewards" size={24} />
                                                <p className="text-gray-900">0</p>
                                            </div>
                                        </div>

                                        <button className="bg-brand-500 text-gray-900 py-2 px-2 rounded-full text-xs min-w-[90px] text-center">
                                            Xem
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* === promotion item === */}
                            <div className="w-[316px] shrink-0">
                                <Image
                                    src={_Image["banner-02"]}
                                    alt="banner-02"
                                    width={1000}
                                    height={1000}
                                    className="w-full aspect-256/120 rounded-[12px]"
                                />
                                <div className="pt-2 text-gray-900">Mừng sinh nhật bạn GoGi khao 10%</div>
                                <div className="pt-2">
                                    <div className="flex justify-between items-center">
                                        <div className="">
                                            <p className="text-xs text-gray-700">Mừng sinh nhật bạn GoGi khao 10%</p>
                                            <div className="flex gap-1 items-center pt-1">
                                                <Icon icon="icon-rewards" size={24} />
                                                <p className="text-gray-900">0</p>
                                            </div>
                                        </div>

                                        <button className="bg-brand-500 text-gray-900 py-2 px-2 rounded-full text-xs min-w-[90px] text-center">
                                            Xem
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>

            {/* ============ APP FOOTER ============ */}
            <div className="fixed bottom-0 left-0 right-0">
                <div className="w-full py-[16px] bg-white border-t border-gray-200">
                    <Container>
                        <div className="grid grid-cols-5 gap-1">
                            {/* === footer item === */}
                            <div className="flex flex-col gap-2 items-center">
                                <Icon icon="icon-bottom-bar-home" size={24} />
                                <p className="text-gray-900 text-xs">Trang chủ</p>
                            </div>

                            {/* === footer item === */}
                            <div className="flex flex-col gap-2 items-center">
                                <Icon icon="icon-bottom-bar-mark" size={24} />
                                <p className="text-gray-500 text-xs">Thương hiệu</p>
                            </div>

                            {/* === footer item === */}
                            <div className="flex flex-col justify-center items-center">
                                <div className="size-[48px] rounded-full bg-[#E4B653] flex items-center justify-center">
                                    <Icon icon="icon-qr-code" size={28} />
                                </div>
                            </div>

                            {/* === footer item === */}
                            <div className="flex flex-col gap-2 items-center">
                                <Icon icon="icon-bottom-bar-notification" size={24} />
                                <p className="text-gray-500 text-xs">Thông báo</p>
                            </div>

                            {/* === footer item === */}
                            <div className="flex flex-col gap-2 items-center">
                                <Icon icon="icon-bottom-bar-user" size={24} />
                                <p className="text-gray-500 text-xs">Tài khoản</p>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
