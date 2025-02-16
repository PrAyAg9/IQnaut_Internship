import { useRouter } from "next/router";

const CurricularDetail = ({ data }) => {
  const router = useRouter();

  // If the page is not yet generated, you can show a loading state.
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      {/* Render other details as needed */}
    </div>
  );
};

// This function gets called at build time
export async function getStaticPaths() {
  // In a real project, fetch all IDs from your API or data source.
  // Here we use static paths as an example.
  const paths = [
    { params: { id: "1" } },
    { params: { id: "2" } },
    // ...add more paths for each card
  ];

  return { paths, fallback: true }; // fallback true for incremental static regeneration
}

// This function gets called at build time for each path.
export async function getStaticProps({ params }) {
  const { id } = params;
  // Fetch the data for the given card. For now, we'll use static data.
  const data = {
    id,
    title: `Detail for Card ${id}`,
    description: `This is the detailed description for card ${id}.`,
  };

  return { props: { data } };
}

export default CurricularDetail;
