import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Article = defineDocumentType(() => ({
  name: 'Article',
  contentType: 'mdx',
  filePathPattern: '**/*.mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    category: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
  },
}));

export default makeSource({
  contentDirPath: 'articles',
  documentTypes: [Article],
});
