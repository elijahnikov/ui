import Layout from "@/components/common/Layout/Layout";
import { Badge, BadgeIcon, BadgeLabel } from "@/components/ui/Badge/Badge";
import Button from "@/components/ui/Button/Button";
import Spinner from "@/components/ui/Spinner/Spinner";
import Tabs from "@/components/ui/Tabs/Tabs";
import Tooltip from "@/components/ui/Tooltip/Tooltip";
import { BiFile, BiGitBranch } from "react-icons/bi";
import { BsGithub, BsPlus } from "react-icons/bs";

export default function Home() {
    return (
        <Layout>
            <div className="mt-[20px]">
                <Spinner />
            </div>
        </Layout>
    );
}
