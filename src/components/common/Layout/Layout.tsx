// Components
import ContentBar from "../ContentBar/ContentBar";
import ComponentsBar from "../ComponentsBar/ComponentsBar";
import NavBar from "../NavBar/NavBar";
import Button from "@/components/ui/Button/Button";
import PageBrowser from "../PageBrowser/PageBrowser";

// Next
import Head from "next/head";

// ReactIcons
import { AiOutlineMenu } from "react-icons/ai";

// Types
import { MenuMap } from "@/maps/component/types";

interface LayoutProps {
    children: React.ReactNode;
    title?: string;
    menuMap?: MenuMap[];
}

const Layout = ({ children, title, menuMap }: LayoutProps) => {
    return (
        <div className="h-[100%]">
            <Head>
                <title>{title}</title>
            </Head>
            <div className="mx-auto">
                <NavBar />
                <div className="absolute flex w-full top-[8vh]">
                    <ComponentsBar />
                    <ContentBar>{children}</ContentBar>
                    {menuMap && <PageBrowser menuMap={menuMap} />}
                </div>
                <div className="left-5 visible md:invisible absolute block top-[10vh]">
                    <Button loading={false} intent={"primary"}>
                        <AiOutlineMenu />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Layout;
