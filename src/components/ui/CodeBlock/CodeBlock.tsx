import { IoMdClipboard } from "react-icons/io";
import copy from "copy-to-clipboard";
import Button from "@/components/ui/Button/Button";

interface CodeBlockProps {
    code: string;
    copyable?: boolean;
}

const CodeBlock = ({ code, copyable = true }: CodeBlockProps) => {
    const copyToClipboard = () => {
        copy(code);
    };

    return (
        <div className="overflow-y-auto max-h-[400px] relative inline-block text-sm w-full flex-col dark:border-slate-600 dark:bg-slate-800 bg-sky-lightest dark:text-white rounded-md p-[25px] border-[1px] border-gray-300">
            <pre className="w-[95%] float-left">
                <code className="whitespace-pre-wrap language-javascript">
                    {code}
                </code>
            </pre>
            <div className="float-right w-[5%] absolute right-5 top-5">
                {copyable && (
                    <Button
                        onClick={() => copyToClipboard()}
                        loading={false}
                        intent={"transparent"}
                        size="sm"
                    >
                        <IoMdClipboard className="float-right h-5 w-5" />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default CodeBlock;
