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
		<div className="inline-block w-full flex-col dark:border-slate-600 dark:bg-slate-800 bg-slate-200 dark:text-white rounded-lg p-[25px] border-[1px] border-gray-300">
			<pre className="w-[95%] float-left">
				<code className="language-javascript">{code}</code>
			</pre>
			<div className="float-right mt-[-5px] w-[5%] h-full">
				<Button loading={false} intent={"transparent"} size="sm">
					<IoMdClipboard className="float-right h-5 w-5" />
				</Button>
			</div>
		</div>
	);
};

export default CodeBlock;