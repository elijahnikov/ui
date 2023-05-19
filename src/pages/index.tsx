import Layout from "@/components/common/Layout/Layout";
import Kbd from "@/components/ui/Kbd/Kbd";
import Progress from "@/components/ui/Progress/Progress";
import Spinner from "@/components/ui/Spinner/Spinner";

export default function Home() {
    return (
        <Layout>
            <span>
                <Kbd alt shift meta ctrl>
                    H
                </Kbd>

                <Kbd meta>H</Kbd>

                <Kbd shift meta>
                    H
                </Kbd>

                <Kbd meta shift>
                    H
                </Kbd>
            </span>
        </Layout>
    );
}
