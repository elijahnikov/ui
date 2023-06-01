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
            <DialogPrimitive.Overlay className="fixed inset-0 z-10 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in" />
            <DialogPrimitive.Content className="border-[1px] dark:border-ink-dark animate-in z-20 data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 data-[state=open]:sm:slide-in-from-bottom-0 fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white dark:bg-slate-800 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                {children}
                <DialogPrimitive.Close asChild>
                    <button
                        className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                        aria-label="Close"
                    >
                        <BsX className="h-5 w-5" />
                    </button>
                </DialogPrimitive.Close>
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
        <DialogPrimitive.Close asChild className="mt-5 mr-5">
            {children}
        </DialogPrimitive.Close>
    );
};

Modal.Trigger = Trigger;
Modal.Content = Content;
Modal.Title = Title;
Modal.Close = Close;

export default Modal;
