import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { parse, resolve } from 'path';
import { readFile } from 'fs/promises';

const ROOT_DIR = process.cwd();
const JSON_POST_FILE_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',
  'posts.json',
);

export class JsonPostRpository implements PostRepository {
  private async readFromDisck(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POST_FILE_PATH, 'utf-8');
    const parsedJson = JSON.parse(jsonContent);
    const { posts } = parsedJson;
    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    const posts = await this.readFromDisck();
    return posts;
  }

  async findById(id: string): Promise<PostModel[]> {
    const posts = await this.findAll();
    const post = posts.find(post => post.id === id);
    return post;
  }
}

export const postRepository = new JsonPostRpository();

(async () => {
  const posts = await postRepository.findAll();
  posts.forEach(post => {
    console.log(post.id);
  });
})();
