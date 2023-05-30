import Layout from "@/components/common/Layout/Layout";
import Accordion from "@/components/ui/Accordion/Accordion";
import Button from "@/components/ui/Button/Button";
import Modal from "@/components/ui/Dialog/Dialog";
import Input from "@/components/ui/Input/Input";
import Kbd from "@/components/ui/Kbd/Kbd";
import Progress from "@/components/ui/Progress/Progress";
import Spinner from "@/components/ui/Spinner/Spinner";

export default function Home() {
    return (
        <Layout>
            <Modal>
                <Modal.Trigger>Click me</Modal.Trigger>
                <Modal.Content>
                    <Modal.Title>Hello</Modal.Title>
                    <Input />
                    <Modal.Close>
                        <Button>Close</Button>
                    </Modal.Close>
                </Modal.Content>
            </Modal>
        </Layout>
    );
}
