import ContentBar from "../ContentBar/ContentBar";
import ComponentsBar from "../ComponentsBar/ComponentsBar";
import NavBar from "../NavBar/NavBar";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="h-[100%] min-h-[100%]">
			<div className="mx-auto">
				<NavBar />
				<div className="absolute w-full top-[8vh]">
					<ComponentsBar />
					<ContentBar>{children}</ContentBar>
				</div>
			</div>
		</div>
	);
};

export default Layout;
