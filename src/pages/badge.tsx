import ExampleBlock from "@/components/common/ExampleBlock/ExampleBlock";
import Layout from "@/components/common/Layout/Layout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import PageStepper from "@/components/common/PageStepper/PageStepper";
import { Badge, BadgeIcon, BadgeLabel } from "@/components/ui/Badge/Badge";
import CodeBlock from "@/components/ui/CodeBlock/CodeBlock";
import { badgeCode, badgeMenuMap } from "@/maps/component/badge";
import React from "react";
import { BiGitBranch } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";

interface BadgePageProps {}

const BadgePage = ({}: BadgePageProps) => {
    return (
        <Layout title="Badge - Supercrumble UI" menuMap={badgeMenuMap}>
            <div className="mb-[40px]">
                <PageHeader
                    title="Badge"
                    description={`A badge is used for items that need to be labeled, categorized, or organized using keywords that describe them.`}
                    githubLink="/"
                />
            </div>

            <div>
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="usage"
                ></a>
                <h4 className="mb-[30px]">Usage</h4>
                <ExampleBlock>
                    <Badge>Sample Badge</Badge>
                </ExampleBlock>
                <CodeBlock code={badgeCode.usage} />
            </div>

            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="variants"
                ></a>
                <h4>Variants</h4>
                <p className="mb-[30px]">Default variant is subtle.</p>
                <ExampleBlock>
                    <div className="flex space-x-3">
                        <Badge>
                            <BadgeLabel>Subtle</BadgeLabel>
                        </Badge>
                        <Badge variant={"outline"}>
                            <BadgeLabel>Outline</BadgeLabel>
                        </Badge>
                        <Badge variant={"solid"}>
                            <BadgeLabel>Solid</BadgeLabel>
                        </Badge>
                    </div>
                </ExampleBlock>
                <CodeBlock code={badgeCode.variants} />
            </div>

            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="icon"
                ></a>
                <h4 className="mb-[30px]">Left/Right Icon</h4>
                <ExampleBlock>
                    <div className="flex space-x-3">
                        <Badge>
                            <BadgeIcon icon={BiGitBranch} />
                            <BadgeLabel>feature/git</BadgeLabel>
                        </Badge>
                        <Badge>
                            <BadgeLabel>Twitter</BadgeLabel>
                            <BadgeIcon icon={BsTwitter} />
                        </Badge>
                    </div>
                </ExampleBlock>
                <CodeBlock code={badgeCode.icon} />
            </div>
            <PageStepper currentPage={"badge"} />
        </Layout>
    );
};

export default BadgePage;
