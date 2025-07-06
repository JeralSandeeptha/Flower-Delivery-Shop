import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { type Document } from '@contentful/rich-text-types';

export function renderRichText(doc: Document): string {
  return documentToHtmlString(doc);
}
