import React from "react";
import { ModalSuccess, ModalVoucher } from "../ui";
import ModalError from "../ui/ModalError";

const AppModal = () => {
    return (
        <div>
            {/* <ModalSuccess isOpen={true} onClose={() => {}} onRate={() => {}} onSkip={() => {}} /> */}
            {/* <ModalError isOpen={true} onClose={() => {}} onRate={() => {}} onSkip={() => {}} /> */}

            <ModalVoucher isOpen={true} onClose={() => {}} onConfirm={() => {}} />
        </div>
    );
};

export default AppModal;
