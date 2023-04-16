import Layout from "@/components/common/Layout/Layout";
import Button from "@/components/ui/Button/Button";

interface buttonProps {}

const button = ({}: buttonProps) => {
	return (
		<Layout>
			{/* <p>hello</p> */}
			<h4>Primary</h4>
			<Button intent={"primary"} loading={false}>
				Primary
			</Button>
		</Layout>
	);
};

export default button;
