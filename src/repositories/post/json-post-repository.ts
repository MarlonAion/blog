import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { readFile } from 'fs/promises';
import { resolve } from 'path';

const ROOT_DIR = process.cwd();
const JSON_POST_FILE_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',
  'posts.json',
);
const SIMULATE_WAIT_IN_MS = 0;

export class JsonPostRpository implements PostRepository {
  private async simulateWait() {
    if (SIMULATE_WAIT_IN_MS <= 0) return;

    await new Promise(resolve => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
  }

  private async readFromDisck(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POST_FILE_PATH, 'utf-8');
    const parsedJson = JSON.parse(jsonContent);
    const { posts } = parsedJson;
    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    await this.simulateWait();
    const posts = await this.readFromDisck();
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    await this.simulateWait();
    const posts = await this.findAll();
    const post = posts.find(post => post.id === id);
    if (!post) throw new Error('Post não encontrado');
    return post;
  }
}

export const postRepository = new JsonPostRpository();
