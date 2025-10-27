import React from "react";
import Modal from "./Modal";
import Icon from "./Icon";

interface ModalSuccessProps {
    isOpen: boolean;
    onClose: () => void;
    onRate?: () => void;
    onSkip?: () => void;
    title?: string;
    message?: string;
    rateButtonText?: string;
    skipButtonText?: string;
}

const ModalSuccess: React.FC<ModalSuccessProps> = ({
    isOpen,
    onClose,
    onRate,
    onSkip,
    title = "Thanh toán thành công",
    message = "Đơn hàng của bạn đã được thanh toán thành công. Hãy đánh giá để giúp chúng tôi cải thiện dịch vụ nhé.",
    rateButtonText = "Đánh giá dịch vụ",
    skipButtonText = "Bỏ qua",
}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col items-center space-y-6">
                {/* Success Icon */}
                <div className=" flex items-center justify-center">
                    <Icon icon="icon-succes" size={55} className="text-white" />
                </div>

                {/* Title */}
                <h2 className="text-xl font-medium text-gray-900 text-center">{title}</h2>

                {/* Message */}
                <p className="text-sm text-gray-500 text-center leading-relaxed max-w-[90%]">{message}</p>

                {/* Action Buttons */}
                <div className="w-full space-y-3">
                    {/* Rate Button */}
                    <button
                        onClick={onRate}
                        className="w-full bg-brand-500 hover:bg-brand-600 text-gray-900 font-medium py-3 px-4 rounded-full transition-colors duration-200"
                    >
                        {rateButtonText}
                    </button>

                    {/* Skip Button */}
                    <button
                        onClick={onSkip || onClose}
                        className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-full transition-colors duration-200"
                    >
                        {skipButtonText}
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default ModalSuccess;
