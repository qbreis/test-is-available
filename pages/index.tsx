// blog/pages/index.tsx

import Layout from '../components/Layout';
import { getPosts } from '../lib/posts';
import Posts from '../components/Posts';
//import nextConfig from '../next.config';

export async function getStaticProps() {
  const posts = getPosts();
  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }: any) {
  return (
    <Layout>
      <section className="all-post-data">
        <Posts posts={posts} />
      </section>
    </Layout>
  );
}
