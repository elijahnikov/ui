import ContentBar from "../ContentBar/ContentBar";
import ComponentsBar from "../ComponentsBar/ComponentsBar";
import NavBar from "../NavBar/NavBar";
import Head from "next/head";

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
			</div>
		</div>
	);
};

export default Layout;
