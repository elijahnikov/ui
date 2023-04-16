import ContentBar from "../ContentBar/ContentBar";
import NavBar from "../NavBar/NavBar";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="h-[100%] min-h-[100%]">
			<div className="mx-auto">
				<NavBar />
				<ContentBar>{children}</ContentBar>
			</div>
		</div>
	);
};

export default Layout;
