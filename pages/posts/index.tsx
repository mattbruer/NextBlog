import React from 'react';
import AllPosts from '@/components/home-page/posts/all-posts';
import { getAllPosts } from '@/lib/posts-util';
import { Post } from '@/components/home-page/posts/post-item';

interface Props {
  posts: Post[];
}

const AllPostsPage: React.FC<Props> = ({ posts }) => {
  return <AllPosts posts={posts} />;
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
