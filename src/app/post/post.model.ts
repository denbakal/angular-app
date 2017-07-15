export class Post {
  title: string;
  author: string;

  constructor(post: any) {
    this.title = post.title;
    this.author = post.author;
  }
}
