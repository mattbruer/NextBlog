import PostContent from '@/components/home-page/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '@/lib/posts-util';
import { GetStaticPropsContext } from 'next';
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
}

const PostDetailPage = (props: Props) => {
  const router = useRouter();

  return (
    <div>
      <p>{`${router.query.slug}'s post`}</p>
      <PostContent post={props.post} />
    </div>
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
    fallback: true,
  };
}

export default PostDetailPage;
