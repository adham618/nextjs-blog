import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

const FirstPost: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>First Page</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
};
export default FirstPost;
