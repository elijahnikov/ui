import Layout from "@/components/common/Layout/Layout";
import Badge from "@/components/ui/Badge/Badge";
import Tabs from "@/components/ui/Tabs/Tabs";
import { BiFile, BiGitBranch } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

export default function Home() {
    return (
        <Layout>
            <div className="space-y-5">
                <Badge>
                    <Badge.Icon icon={BiGitBranch} />
                    <Badge.Label>component/badge</Badge.Label>
                </Badge>
                <Badge size="sm">
                    <Badge.Label>helo</Badge.Label>
                </Badge>
                <Badge size="large">
                    <Badge.Label>helo</Badge.Label>
                </Badge>

                <Badge variant={"outline"}>
                    <Badge.Label>helo</Badge.Label>
                </Badge>
                <Badge variant={"outline"} size="sm">
                    <Badge.Label>helo</Badge.Label>
                </Badge>
                <Badge variant={"outline"} size="large">
                    <Badge.Label>helo</Badge.Label>
                </Badge>

                <Badge variant={"solid"}>
                    <Badge.Label>helo</Badge.Label>
                </Badge>
                <Badge variant={"solid"} size="sm">
                    <Badge.Label>helo</Badge.Label>
                </Badge>
                <Badge variant={"solid"} size="large">
                    <Badge.Label>helo</Badge.Label>
                </Badge>
            </div>
        </Layout>
    );
}
