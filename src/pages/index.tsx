import Layout from "@/components/common/Layout/Layout";
import Accordion from "@/components/ui/Accordion/Accordion";
import Kbd from "@/components/ui/Kbd/Kbd";
import Progress from "@/components/ui/Progress/Progress";
import Spinner from "@/components/ui/Spinner/Spinner";

export default function Home() {
    return (
        <Layout>
            <Accordion>
                <Accordion.Item>
                    <Accordion.Trigger value="1">
                        Is it accessible?
                    </Accordion.Trigger>
                    <Accordion.Content value="1">
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item>
                    <Accordion.Trigger value="2">
                        Is it styled?
                    </Accordion.Trigger>
                    <Accordion.Content value="2">
                        {`Yes. It comes with default styles that matches the other
                        components' aesthetic.`}
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item>
                    <Accordion.Trigger value="3">
                        Is it animated?
                    </Accordion.Trigger>
                    <Accordion.Content value="3">
                        {`Yes. It's animated by default, but you can disable it if you prefer.`}
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion>
        </Layout>
    );
}
