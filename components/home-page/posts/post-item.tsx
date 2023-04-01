import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classes from './post-item.module.css';

interface Props {
  post: Post;
}

export interface Post {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  slug: string;
}
const PostItem = (props: Props) => {
  const { title, image, excerpt, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    timeZone: 'UTC',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;
  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          {/* <Image
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            layout="responsive"
          /> */}
          <Image alt={title} src={imagePath} priority sizes="100%" fill />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
