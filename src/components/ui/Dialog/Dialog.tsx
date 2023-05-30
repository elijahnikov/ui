import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { BsX } from "react-icons/bs";
import clxsm from "@/lib/clsxm";

interface ModalProps {
    children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
    return <DialogPrimitive.Root>{children}</DialogPrimitive.Root>;
};

const Trigger = ({ children }: { children: React.ReactNode }) => {
    return (
        <DialogPrimitive.Trigger
            className={clxsm([
                "inline-flex items-center justify-center rounded-lg font-medium",
                "focus:outline-none focus-visible:ring focus-visible:ring-primary-500",
                "shadow-sm",
                "transition-colors duration-75",
                "bg-primary-base text-white",
                "hover:bg-primary-dark active:bg-primary-darker",
                "text-sm md:text-base px-3 py-1.5",
            ])}
        >
            {children}
        </DialogPrimitive.Trigger>
    );
};

const Content = ({ children }: { children: React.ReactNode }) => {
    return (
        <DialogPrimitive.Portal>
            <DialogPrimitive.Overlay className="bg-black opacity-40 data-[state=open]:animate-overlayShow fixed z-10 inset-0" />
            <DialogPrimitive.Content className="z-20 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white dark:bg-slate-800 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                {children}
            </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
    );
};

const Title = ({ children }: { children: React.ReactNode }) => {
    return (
        <DialogPrimitive.Title className="mb-5 text-mauve12 m-0 text-[17px] font-medium">
            {children}
        </DialogPrimitive.Title>
    );
};

const Close = ({ children }: { children: React.ReactNode }) => {
    return (
        <DialogPrimitive.Close asChild className="mt-5">
            {children}
        </DialogPrimitive.Close>
    );
};

Modal.Trigger = Trigger;
Modal.Content = Content;
Modal.Title = Title;
Modal.Close = Close;

export default Modal;
