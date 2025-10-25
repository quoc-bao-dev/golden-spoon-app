import Container from "@/core/components/layout/Container";
import Icon from "@/core/components/ui/Icon";

const MyVoucher = () => {
    return (
        <div>
            {/* ============ APP HEADER ============ */}

            <div className="py-[24px] ">
                <Container>
                    <div className="flex items-center justify-center relative">
                        <Icon icon="icon-arrow-left" size={24} className="absolute left-0 top-1/2 -translate-y-1/2" />
                        <h1 className="text-base text-gray-900 font-medium text-center">Ưu đãi của tôi</h1>
                    </div>
                </Container>
            </div>

            {/* ============ LIST VOUCHER ============ */}

            <div className="pt-4">
                <div className="flex flex-col gap-3">{/* ==== Vouchder Item */}</div>
            </div>
        </div>
    );
};

export default MyVoucher;
