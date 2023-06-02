import Layout from "@/components/common/Layout/Layout";
import Error from "@/components/ui/Error/Error";

export default function Home() {
    return (
        <Layout>
            <Error>This is a test</Error>
            <Error label="Email Error">Incorrect email</Error>
            <Error size="sm" label="Email Error">
                Incorrect email
            </Error>
            <Error size="base" label="Email Error">
                Incorrect email
            </Error>
            <Error size="large" label="Email Error">
                Incorrect email
            </Error>
            <Error
                error={{
                    message: "The request failed.",
                    action: "Contact Us",
                    link: "/",
                }}
            />
        </Layout>
    );
}
