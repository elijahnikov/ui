import ExampleBlock from "@/components/common/ExampleBlock/ExampleBlock";
import Layout from "@/components/common/Layout/Layout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import PageStepper from "@/components/common/PageStepper/PageStepper";
import Button from "@/components/ui/Button/Button";
import CodeBlock from "@/components/ui/CodeBlock/CodeBlock";
import Modal from "@/components/ui/Modal/Modal";
import { modalCode, modalMenuMap } from "@/maps/component/modal";
import React from "react";

interface ModalPageProps {}

const ModalPage = ({}: ModalPageProps) => {
    return (
        <Layout title="Modal - Supercrumble UI" menuMap={modalMenuMap}>
            <div className="mb-[40px]">
                <PageHeader
                    title="Modal"
                    description="A large UI element that sits on top of the application page in the form of a dialog window."
                    githubLink="/"
                />
            </div>
            <div>
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="usage"
                ></a>
                <h4>Usage</h4>
                <ExampleBlock>
                    <Modal>
                        <Modal.Trigger>Click me!</Modal.Trigger>
                        <Modal.Content>
                            <p>This is a modal!</p>
                            <Modal.Close>
                                <Button>Close</Button>
                            </Modal.Close>
                        </Modal.Content>
                    </Modal>
                </ExampleBlock>
                <CodeBlock code={modalCode.usage} />
            </div>
            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="close"
                ></a>
                <h4>Close</h4>
                <p className="mb-[30px]">
                    Add additional methods of closing the modal.
                </p>
                <ExampleBlock>
                    <Modal>
                        <Modal.Trigger>Click me!</Modal.Trigger>
                        <Modal.Content>
                            <p>
                                You can click either button to close the modal,
                                and add your own actions upon closing as well!
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
                    </Modal>
                </ExampleBlock>
                <CodeBlock code={modalCode.close} />
            </div>
            <PageStepper currentPage="modal" />
        </Layout>
    );
};

export default ModalPage;
