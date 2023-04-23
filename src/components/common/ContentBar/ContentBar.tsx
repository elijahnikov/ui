interface ContentBarProps {
    children: React.ReactNode;
}

const ContentBar = ({ children }: ContentBarProps) => {
    return (
        <div className=" relative left-30 w-[100%] min-w-[100%] md:min-w-[80%] md:w-[80%] flex mx-auto p-[20px] justify-center min-h-[100vh]">
            <div className="md:w-[70%] lg:w-[45vw] w-[70vw] mt-[20px] dark:text-white text-black">
                {children}
            </div>
        </div>
    );
};

export default ContentBar;
