import type { Schema, Struct } from '@strapi/strapi';

export interface SharedFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_items';
  info: {
    displayName: 'faq-item';
    icon: 'bulletList';
  };
  attributes: {
    FAQAnswer: Schema.Attribute.Blocks;
    FAQTitle: Schema.Attribute.String;
  };
}

export interface SharedTestimonialItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonial_items';
  info: {
    displayName: 'TestimonialItem';
    icon: 'discuss';
  };
  attributes: {
    Testimonialwords: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.faq-item': SharedFaqItem;
      'shared.testimonial-item': SharedTestimonialItem;
    }
  }
}
