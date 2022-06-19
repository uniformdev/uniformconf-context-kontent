import { IContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@4.1.0' at 'Thu, 21 Apr 2022 14:02:41 GMT'
 */
export type Hero = IContentItem<{
  personalizationCriteria: Elements.CustomElement;
  description: Elements.RichTextElement;
  image: Elements.AssetsElement;
  title: Elements.TextElement;
  buttonText: Elements.TextElement;
  buttonLinkSlug: Elements.TextElement;
}>;