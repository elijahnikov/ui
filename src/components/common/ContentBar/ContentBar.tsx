interface ContentBarProps {
	children: React.ReactNode;
}

const ContentBar = ({ children }: ContentBarProps) => {
	return (
		<div className="flex mx-auto p-[20px] justify-center h-[100vh]">
			<div className="w-[80%] mt-[20px]">{children}</div>
		</div>
	);
};

export default ContentBar;
