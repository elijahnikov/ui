import { IoMdClipboard } from "react-icons/io";
import copy from "copy-to-clipboard";
import Button from "@/components/ui/Button/Button";

interface CodeBlockProps {
    code: string;
}

const CodeBlock = ({ code }: CodeBlockProps) => {
    const copyToClipboard = () => {
        copy(code);
    };

    return (
        <div className="relative inline-block text-sm w-full flex-col dark:border-slate-600 dark:bg-slate-800 bg-gray-100 dark:text-white rounded-lg p-[25px] border-[1px] border-gray-300">
            <pre className="w-[95%] float-left">
                <code className="language-javascript">{code}</code>
            </pre>
            <div className="float-right w-[5%] absolute right-5 bottom-5">
                <Button
                    onClick={() => copyToClipboard()}
                    loading={false}
                    intent={"transparent"}
                    size="sm"
                >
                    <IoMdClipboard className="float-right h-5 w-5" />
                </Button>
            </div>
        </div>
    );
};

export default CodeBlock;
