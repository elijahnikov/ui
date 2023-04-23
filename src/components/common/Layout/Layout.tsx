import ContentBar from "../ContentBar/ContentBar";
import ComponentsBar from "../ComponentsBar/ComponentsBar";
import NavBar from "../NavBar/NavBar";
import Head from "next/head";
import Button from "@/components/ui/Button/Button";
import { AiOutlineMenu } from "react-icons/ai";

interface LayoutProps {
    children: React.ReactNode;
    title?: string;
}

const Layout = ({ children, title }: LayoutProps) => {
    return (
        <div className="h-[100%] min-h-[100%]">
            <Head>
                <title>{title}</title>
            </Head>
            <div className="mx-auto ">
                <NavBar />
                <div className="absolute block w-full top-[8vh]">
                    <ComponentsBar />
                    <ContentBar>{children}</ContentBar>
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
