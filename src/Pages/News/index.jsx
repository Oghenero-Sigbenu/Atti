import { Events, Layout } from "../../Components";

function News() {
  return (
    <Layout contact={false}>
      <div className="w-full">
        <div className="max-w-[90%]  mt-[2rem] mb-[5rem] lg:max-w-[85%] mx-auto">
          <Events />
        </div>
      </div>
    </Layout>
  );
}

export default News;
