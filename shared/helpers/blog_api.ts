import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostNames() {
  const postFileNames = fs.readdirSync(postsDirectory);
  // filter out hidden files (start with '.')
  return postFileNames.filter((fileName) => !/^\..*/.test(fileName));
}

export function getPostByName(name: string, fields: string[] = []) {
  const realName = name.replace(/.md$/, "");
  const fullPath = join(postsDirectory, `${realName}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContents);

  const items: { [key: string]: any } = {};

  fields.forEach((field) => {
    if (field === "name") {
      items[field] = realName;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const names = getPostNames();
  // sort in reverse chronological order
  const posts = names
    .map((name) => getPostByName(name, fields))
    .sort((post1, post2) => (post1.date > post2.date ? 1 : -1));
  return posts;
}
