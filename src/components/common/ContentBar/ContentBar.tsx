interface ContentBarProps {
	children: React.ReactNode;
}

const ContentBar = ({ children }: ContentBarProps) => {
	return (
		<div className="dark:bg-black w-[80%] flex mx-auto p-[20px] justify-center h-[100vh]">
			<div className="mt-[20px] dark:text-white text-black">
				{children}
			</div>
		</div>
	);
};

export default ContentBar;
