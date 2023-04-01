// import styles from '@/styles/Home.module.css';
import React from 'react';
import Hero from '@/components/home-page/Hero';
import FeaturedPosts from '@/components/home-page/FeaturedPosts';
import { Post } from '@/components/home-page/posts/post-item';
import { getFeaturedPosts } from '@/lib/posts-util';

interface Props {
  posts: Post[];
}

const HomePage: React.FC<Props> = ({ posts }: Props) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export default HomePage;

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
