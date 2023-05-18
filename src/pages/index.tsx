import Layout from "@/components/common/Layout/Layout";
import Progress from "@/components/ui/Progress/Progress";
import Spinner from "@/components/ui/Spinner/Spinner";

export default function Home() {
    return (
        <Layout>
            <div className="w-[600px]">
                <Progress value={0} />
            </div>
        </Layout>
    );
}
