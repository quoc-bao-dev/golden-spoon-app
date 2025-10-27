import React, { useState } from "react";
import Modal from "./Modal";
import Icon from "./Icon";

interface ModalVoucherProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm?: (voucherCode: string) => void;
    title?: string;
    placeholder?: string;
    confirmButtonText?: string;
    initialValue?: string;
}

const ModalVoucher: React.FC<ModalVoucherProps> = ({
    isOpen,
    onClose,
    onConfirm,
    title = "Nhập mã voucher của bạn",
    placeholder = "MNBVCXZ6969",
    confirmButtonText = "Xác nhận",
    initialValue = "",
}) => {
    const [voucherCode, setVoucherCode] = useState(initialValue);

    const handleConfirm = () => {
        if (onConfirm) {
            onConfirm(voucherCode);
        }
        onClose();
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleConfirm();
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col items-center space-y-6">
                {/* Voucher Icon */}
                <div className=" w-full">
                    <Icon icon="icon-voucher" size={55} className="text-yellow-600" />
                </div>

                {/* Title */}
                <h2 className="text-lg font-medium text-gray-900 w-full">{title}</h2>

                {/* Input Field */}
                <div className="w-full">
                    <input
                        type="text"
                        value={voucherCode}
                        onChange={(e) => setVoucherCode(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder={placeholder}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-center font-medium"
                        autoFocus
                    />
                </div>

                {/* Confirm Button */}
                <button
                    onClick={handleConfirm}
                    className="w-full bg-brand-500 hover:bg-brand-600 text-gray-900 font-medium py-3 px-4 rounded-full transition-colors duration-200"
                >
                    {confirmButtonText}
                </button>
            </div>
        </Modal>
    );
};

export default ModalVoucher;
