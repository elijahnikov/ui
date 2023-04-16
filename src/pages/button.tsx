import Layout from "@/components/common/Layout/Layout";
import Button from "@/components/ui/Button/Button";

interface buttonProps {}

const button = ({}: buttonProps) => {
	return (
		<Layout>
			<div>
				<h3>Button</h3>
				<p>
					A control that triggers an action. Button labels should
					express what action will occur when the user interacts with
					it.
				</p>
			</div>
			<div className="h-[40px]" />
			<div>
				<h4>Primary</h4>
				<Button loading={true} intent="primary">
					Primary
				</Button>
				<Button loading={true} intent="secondary">
					Secondary
				</Button>
				<Button loading={true} intent="outline">
					Outline
				</Button>
				<Button loading={true} intent="transparent">
					Transparent
				</Button>
			</div>
		</Layout>
	);
};

export default button;
