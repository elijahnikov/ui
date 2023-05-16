import Layout from "@/components/common/Layout/Layout";
import { Badge, BadgeIcon, BadgeLabel } from "@/components/ui/Badge/Badge";
import Button from "@/components/ui/Button/Button";
import Tabs from "@/components/ui/Tabs/Tabs";
import Tooltip from "@/components/ui/Tooltip/Tooltip";
import { BiFile, BiGitBranch } from "react-icons/bi";
import { BsGithub, BsPlus } from "react-icons/bs";

export default function Home() {
    return (
        <Layout>
            <div>
                <Tooltip>
                    <Tooltip.Trigger>
                        <Button>Hello</Button>
                    </Tooltip.Trigger>
                    <Tooltip.Content>123</Tooltip.Content>
                </Tooltip>
            </div>
        </Layout>
    );
}
