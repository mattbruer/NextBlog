import PostContent from '@/components/home-page/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '@/lib/posts-util';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface Props {
  post: Post;
}
interface Post {
  slug: string;
  title: string;
  image: string;
  date: string;
  content: string;
  excerpt: string;
}

const PostDetailPage = (props: Props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={`${props.post.excerpt}`} />
      </Head>
      <PostContent post={props.post} />
    </>
  );
};

export function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  const data = getPostData(params!.slug as string);
  return {
    props: { post: data },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
