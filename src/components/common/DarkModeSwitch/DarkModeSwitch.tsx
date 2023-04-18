import Button from "@/components/ui/Button/Button";
import useColorMode from "@/hooks/useColorMode";

interface DarkModeSwitchProps {}

const DarkModeSwitch = ({}: DarkModeSwitchProps) => {
	const [colorMode, setColorMode] = useColorMode();

	return (
		<Button
			loading={false}
			className="p-2 rounded-md"
			onClick={() => {
				setColorMode(colorMode === "light" ? "dark" : "light");
				console.log(1);
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6"
				viewBox="0 0 24 24"
			>
				<path
					className="fill-current"
					d="M12 3a9 9 0 0 0 0 18c4.963 0 9-4.037 9-9s-4.037-9-9-9zm0 16a7 7 0 0 1-6.126-3.58c.16-.345.384-.673.669-.958a7 7 0 0 1 9.899 0c.285.285.509.613.669.958A7 7 0 0 1 12 19zm6.957-12.043a1 1 0 0 1-.082 1.397c-.271.226-.554.45-.857.662-2.004.1-3.93.413-5.721.914a15.713 15.713 0 0 0-.657.227A9.035 9.035 0 0 1 12 13c2.86 0 5.469-1.31 7.15-3.371-.303.06-.611.099-.92.112z"
				/>
			</svg>
		</Button>
	);
};

export default DarkModeSwitch;
