import {Post} from "../app/post/post.model";

describe('Post', () => {
  let dummy: Post;

  beforeEach(() => {
    dummy = {title: 'Test', author: 'Admin'};
  });

  it('check post model properties', () => {
    let post = new Post(dummy);

    expect(post instanceof Post).toBe(true);
    expect(post.title).toEqual('Test');
    expect(post.author).toEqual('Admin');
  });
});
