import Layout from "@/components/common/Layout/Layout";
import Accordion from "@/components/ui/Accordion/Accordion";
import Input from "@/components/ui/Input/Input";
import Kbd from "@/components/ui/Kbd/Kbd";
import Progress from "@/components/ui/Progress/Progress";
import Spinner from "@/components/ui/Spinner/Spinner";

export default function Home() {
    return (
        <Layout>
            <Input
                placeholder="Search Supercrumble UI"
                className="w-[400px]"
                kbd={<Kbd shift>/</Kbd>}
            />
        </Layout>
    );
}
