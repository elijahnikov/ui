import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Button from "@/components/ui/Button/Button";

export default function Home() {
	return (
		<div>
			<div className="flex m-10">
				<br />

				<Button loading={false} size="base" intent="secondary">
					Secondary
				</Button>

				<Button loading={false} size="base" intent="outline">
					Outline
				</Button>

				<Button loading={false} size="base" intent="transparent">
					Transparent
				</Button>
				<Button
					disabled={true}
					loading={false}
					size="base"
					intent="transparent"
				>
					Disabled
				</Button>

				{/* <Button intent="destructive">Save</Button> */}
				{/* <Button intent="monochrome">Save</Button> */}
			</div>
			<Button loading={false} size="large" intent="outline">
				Primary
			</Button>
			<Button loading={false} size="base" intent="outline">
				Primary
			</Button>
			<Button loading={false} size="sm" intent="outline">
				Primary
			</Button>
		</div>
	);
}
