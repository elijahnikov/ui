import Layout from "@/components/common/Layout/Layout";
import { Badge, BadgeIcon, BadgeLabel } from "@/components/ui/Badge/Badge";
import Tabs from "@/components/ui/Tabs/Tabs";
import { BiFile, BiGitBranch } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

export default function Home() {
    return (
        <Layout>
            <div className="space-y-5">
                <Badge>
                    <BadgeIcon icon={BiGitBranch} />
                    <BadgeLabel>component/badge</BadgeLabel>
                    <BadgeIcon icon={BiGitBranch} />
                </Badge>
            </div>
        </Layout>
    );
}
