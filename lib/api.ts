import fs from 'fs';
import { basename, join } from 'path';
import matter from 'gray-matter';
import * as process from 'process';
import glob from 'glob';

export const articlesDirectory = join(process.cwd(), 'articles');

export function getArticleBySlug(path: string, fields: string[] = []) {
  const realSlug = basename(path).replace(/\.mdx$/, '');
  const category = basename(join(path, '..'));
  const fileContents = fs.readFileSync(path, 'utf8');
  const { data, content } = matter(fileContents);

  const items: Record<string, any> = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }

    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  items.category = category;

  return items;
}

function getAbsoluteArticles(directory: string, category?: string) {
  const categoryGlobPattern = category == null ? '**' : category;

  const files = glob.sync(`${directory}/${categoryGlobPattern}/*.mdx`);

  return files;
}

export function getArticles(fields: string[] = [], category?: string) {
  const paths = getAbsoluteArticles(articlesDirectory, category);
  const articles = paths
    .map((path) => getArticleBySlug(path, fields))
    .sort((article1: { date: string }, article2: { date: string }) => {
      return article1.date > article2.date ? -1 : 1;
    });

  return articles;
}

export function getCategories() {
  return fs.readdirSync(articlesDirectory);
}
