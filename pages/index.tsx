// import styles from '@/styles/Home.module.css';
import React from 'react';
import Hero from '@/components/home-page/Hero';
import FeaturedPosts from '@/components/home-page/FeaturedPosts';
import { Post } from '@/components/home-page/posts/post-item';
import { getFeaturedPosts } from '@/lib/posts-util';
import Head from 'next/head';

interface Props {
  posts: Post[];
}

const HomePage: React.FC<Props> = ({ posts }: Props) => {
  return (
    <>
      <Head>
        <title>Matt&apos;s Blog</title>
        <meta name="description" content="I post about web development" />
      </Head>
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
