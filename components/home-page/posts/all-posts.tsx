import classes from './all-posts.module.css';
import PostsGrid from './posts-grid';
import { Post } from './post-item';

interface Props {
  posts: Post[];
}

const AllPosts = (props: Props) => {
  return (
    <section>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export default AllPosts;
