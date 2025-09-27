import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAnswer extends Struct.ComponentSchema {
  collectionName: 'components_shared_answers';
  info: {
    displayName: 'Answer';
  };
  attributes: {
    Answer1: Schema.Attribute.String;
    Answer2: Schema.Attribute.String;
    Answer3: Schema.Attribute.String;
    Answer4: Schema.Attribute.String;
    Answer5: Schema.Attribute.String;
    Answer6: Schema.Attribute.String;
  };
}

export interface SharedFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    Faq1: Schema.Attribute.String;
    Faq2: Schema.Attribute.String;
    Faq3: Schema.Attribute.String;
    Faq4: Schema.Attribute.String;
    Faq5: Schema.Attribute.String;
    Faq6: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedPointers extends Struct.ComponentSchema {
  collectionName: 'components_shared_pointers';
  info: {
    displayName: 'pointers';
  };
  attributes: {
    pointer1: Schema.Attribute.String;
    pointer2: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSteps extends Struct.ComponentSchema {
  collectionName: 'components_shared_steps';
  info: {
    displayName: 'Steps';
  };
  attributes: {
    solution1: Schema.Attribute.String;
    solution2: Schema.Attribute.String;
    solution3: Schema.Attribute.String;
    solution4: Schema.Attribute.String;
    solution5: Schema.Attribute.String;
    solution6: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.answer': SharedAnswer;
      'shared.faq': SharedFaq;
      'shared.media': SharedMedia;
      'shared.pointers': SharedPointers;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.steps': SharedSteps;
    }
  }
}
