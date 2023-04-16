interface ContentBarProps {
	children: React.ReactNode;
}

const ContentBar = ({ children }: ContentBarProps) => {
	return <div className="h-[100vh]">{children}</div>;
};

export default ContentBar;
