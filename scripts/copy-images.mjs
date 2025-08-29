import fs from 'fs';
import path from 'path';
import fsExtra from 'fs-extra';

const fsPromises = fs.promises;

const postsDir = path.join(process.cwd(), 'content', 'blog')
const notesDir = path.join(process.cwd(), 'content', 'notes')
const pagesDir = path.join(process.cwd(), 'content', 'pages')
const targetPostsDir = path.join(process.cwd(), 'public', 'images', 'blog')
const targetNotesDir = path.join(process.cwd(), 'public', 'images', 'notes')
const targetPagesDir = path.join(process.cwd(), 'public', 'images', 'pages')

async function createPostImageFoldersForCopy() {
  // Get every post folder: post-one, post-two etc.
  const postSlugs = (await fsPromises.readdir(postsDir)).filter(file => !file.startsWith('.'));
  const notesSlugs = (await fsPromises.readdir(notesDir)).filter(file => !file.startsWith('.'));
  const pagesSlugs = (await fsPromises.readdir(pagesDir)).filter(file => !file.startsWith('.'));

  for (const slug of postSlugs) {
    const allowedImageFileExtensions = ['.png', '.jpg', '.jpeg', '.gif'];

    // Read all files inside current post folder
    const files = await fsPromises.readdir(`${postsDir}/${slug}`);

    // Filter out files with allowed file extension (images)
    const images = files.filter(file =>
      allowedImageFileExtensions.includes(path.extname(file)),
    );

    if (images.length) {
      // Create a folder for images of this post inside public
      await fsPromises.mkdir(`${targetPostsDir}/${slug}`);

      await copyImagesToPublic(postsDir, targetPostsDir, images, slug); // TODO
    }
  }

  for (const slug of notesSlugs) {
    const allowedImageFileExtensions = ['.png', '.jpg', '.jpeg', '.gif'];

    const files = await fsPromises.readdir(`${notesDir}/${slug}`);

    const images = files.filter(file =>
      allowedImageFileExtensions.includes(path.extname(file)),
    );

    if (images.length) {
      await fsPromises.mkdir(`${targetNotesDir}/${slug}`);

      await copyImagesToPublic(notesDir, targetNotesDir, images, slug); // TODO
    }
  }

  for (const slug of pagesSlugs) {
    const allowedImageFileExtensions = ['.png', '.jpg', '.jpeg', '.gif'];

    const files = await fsPromises.readdir(`${pagesDir}/${slug}`);

    const images = files.filter(file =>
      allowedImageFileExtensions.includes(path.extname(file)),
    );

    if (images.length) {
      await fsPromises.mkdir(`${targetPagesDir}/${slug}`);

      await copyImagesToPublic(pagesDir, targetPagesDir, images, slug);
    }
  }
}

async function copyImagesToPublic(directory, targetDirectory, images, slug) {
  for (const image of images) {
    await fsPromises.copyFile(
      `${directory}/${slug}/${image}`,
      `${targetDirectory}/${slug}/${image}`
    );
  }
}

await fsExtra.emptyDir(targetPostsDir);
await fsExtra.emptyDir(targetNotesDir);
await fsExtra.emptyDir(targetPagesDir);
await createPostImageFoldersForCopy();
