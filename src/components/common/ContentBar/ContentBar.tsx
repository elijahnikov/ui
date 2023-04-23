interface ContentBarProps {
    children: React.ReactNode;
}

const ContentBar = ({ children }: ContentBarProps) => {
    return (
        <div className="dark:bg-black w-[100%] min-w-[100%] overflow-y-auto max-h-[2000px] md:min-w-[80%] md:w-[80%] flex mx-auto p-[20px] justify-center min-h-[100vh]">
            <div className="w-[45vw] mt-[20px] dark:text-white text-black">
                {children}
            </div>
        </div>
    );
};

export default ContentBar;
