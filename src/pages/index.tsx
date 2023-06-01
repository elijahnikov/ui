import Layout from "@/components/common/Layout/Layout";
import Accordion from "@/components/ui/Accordion/Accordion";
import Button from "@/components/ui/Button/Button";
import Modal from "@/components/ui/Modal/Modal";
import Input from "@/components/ui/Input/Input";
import Kbd from "@/components/ui/Kbd/Kbd";
import Progress from "@/components/ui/Progress/Progress";
import Spinner from "@/components/ui/Spinner/Spinner";
import Error from "@/components/ui/Error/Error";

export default function Home() {
    return (
        <Layout>
            <Error>This is a test</Error>
            <Error label="Email Error">Incorrect email</Error>
        </Layout>
    );
}
