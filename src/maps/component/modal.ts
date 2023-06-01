import { MenuMap } from "./types";

export const modalMenuMap: MenuMap[] = [
    {
        label: "Usage",
        href: "#usage",
    },
    {
        label: "Close",
        href: "#close",
    },
];

export const modalCode = {
    usage: `import Modal from "@/components/ui/Modal/Modal";

<Modal>
    <Modal.Trigger>Click me!</Modal.Trigger>
    <Modal.Content>
        <p>This is a modal!</p>
        <Modal.Close>
            <Button>Close</Button>
        </Modal.Close>
    </Modal.Content>
</Modal>`,

    close: `import Modal from "@/components/ui/Modal/Modal";

<Modal>
    <Modal.Trigger>Click me!</Modal.Trigger>
    <Modal.Content>
        <p>
            You can click either button to close the modal.
        </p>
        <Modal.Close>
            <Button intent={"secondary"}>Close</Button>
        </Modal.Close>
        <Modal.Close>
            <Button
                onClick={() =>
                    console.log(
                        "Perform extra actions here too!"
                    )
                }
            >
                Save
            </Button>
        </Modal.Close>
    </Modal.Content>
</Modal>`,
};
