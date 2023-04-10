import React from 'react';
import AllPosts from '@/components/home-page/posts/all-posts';
import { getAllPosts } from '@/lib/posts-util';
import { Post } from '@/components/home-page/posts/post-item';
import Head from 'next/head';

interface Props {
  posts: Post[];
}

const AllPostsPage: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All Matt&apos;s Posts</title>
        <meta name="description" content="A list of all Matt's posts" />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}
export default AllPostsPage;
