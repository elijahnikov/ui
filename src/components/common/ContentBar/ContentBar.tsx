interface ContentBarProps {
    children: React.ReactNode;
}

const ContentBar = ({ children }: ContentBarProps) => {
    return (
        <div className="md:ml-[20%] relative left-30 w-[80%] h-[90vh] min-w-[80%] md:min-w-[65%] md:w-[65%] flex mx-auto p-[20px] justify-center min-h-[100vh]">
            <div className="md:w-[80vw] lg:w-[45vw] w-[80vw] mt-[20px] dark:text-white text-black">
                {children}
            </div>
        </div>
    );
};

export default ContentBar;
