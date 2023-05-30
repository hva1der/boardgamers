// Import and render Layout Component
import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps, BACKEND_URL }) {
  return (
    <Layout BACKEND_URL={BACKEND_URL}>
      <Component {...pageProps} />
    </Layout>
  );
}

// Get serverside props to pass BACKEND_URL to components
export const getServerSideProps = async () => {
  const BACKEND_URL = process.env.BACKEND_URL;

  return {
    props: { BACKEND_URL },
  };
};
