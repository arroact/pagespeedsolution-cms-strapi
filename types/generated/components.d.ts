import type { Schema, Struct } from '@strapi/strapi';

export interface CommonBenefitsPoins extends Struct.ComponentSchema {
  collectionName: 'components_common_benefits_poins';
  info: {
    displayName: 'benefits Poins';
  };
  attributes: {
    BenefitTitleIcon: Schema.Attribute.Component<
      'shared.benefit-title-icon',
      true
    >;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    SubDescription: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
  };
}

export interface CommonBlogListing extends Struct.ComponentSchema {
  collectionName: 'components_common_blog_listings';
  info: {
    displayName: 'Blog Listing';
  };
  attributes: {
    Title: Schema.Attribute.Text;
  };
}

export interface CommonFaq extends Struct.ComponentSchema {
  collectionName: 'components_common_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    faqitem: Schema.Attribute.Component<'shared.faq-item', true>;
    SubDescription: Schema.Attribute.Blocks;
    Title: Schema.Attribute.Text;
  };
}

export interface HomePageAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_home_page_about_uses';
  info: {
    displayName: 'About Us';
  };
  attributes: {
    AboutImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Description: Schema.Attribute.Blocks;
    SubTitle: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
  };
}

export interface HomePageHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_home_page_hero_banners';
  info: {
    displayName: 'Hero Banner';
  };
  attributes: {
    ButtonLink: Schema.Attribute.Component<'shared.link-button', false>;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    SubDescription: Schema.Attribute.Text;
    TitleLine1: Schema.Attribute.Text;
    TitleLine2: Schema.Attribute.Text;
  };
}

export interface HomePageOptimizationProcess extends Struct.ComponentSchema {
  collectionName: 'components_home_page_optimization_processes';
  info: {
    displayName: 'Optimization Process';
  };
  attributes: {
    ProcessImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    SubDescription: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
  };
}

export interface HomePageServiceBannerItem extends Struct.ComponentSchema {
  collectionName: 'components_home_page_service_banner_items';
  info: {
    displayName: 'Service Banner Item';
  };
  attributes: {
    BGImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Description: Schema.Attribute.Text;
    PageSpeedIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    ServiceLink: Schema.Attribute.Component<'shared.link-button', false>;
    Title: Schema.Attribute.Blocks;
  };
}

export interface HomePageServiceListing extends Struct.ComponentSchema {
  collectionName: 'components_home_page_service_listings';
  info: {
    displayName: 'ServiceListing';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    ServiceList: Schema.Attribute.Component<
      'shared.home-service-listing',
      true
    >;
    Title: Schema.Attribute.Text;
  };
}

export interface SharedBenefitTitleIcon extends Struct.ComponentSchema {
  collectionName: 'components_shared_benefit_title_icons';
  info: {
    displayName: 'Benefit Title Icon';
  };
  attributes: {
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.Text;
  };
}

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

export interface SharedFooterForm extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_forms';
  info: {
    displayName: 'Footer Form';
  };
  attributes: {
    additionalInfoLabel: Schema.Attribute.Text;
    emailLabel: Schema.Attribute.Text;
    fullNameLabel: Schema.Attribute.Text;
    phoneLabel: Schema.Attribute.Text;
    servicesLabel: Schema.Attribute.Text;
    servicesOptions: Schema.Attribute.Enumeration<
      [
        'WORDPRESS SPEED OPTIMIZATION',
        'SHOPIFY SPEED OPTIMIZATION',
        'MAGENTO SPEED OPTIMIZATION',
        'DRUPAL SPEED OPTIMIZATION',
        'B2B PARTNERSHIP',
        'FREE PAGE SPEED ANALYSIS',
      ]
    >;
    SubDescription: Schema.Attribute.Text;
    submitButtonLabel: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
    websiteLabel: Schema.Attribute.Text;
  };
}

export interface SharedHomeServiceListing extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_service_listings';
  info: {
    displayName: 'HomeServiceListing';
  };
  attributes: {
    Content: Schema.Attribute.Text;
    ServiceLink: Schema.Attribute.Component<'shared.link-button', false>;
    ServiceLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface SharedLinkButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_link_buttons';
  info: {
    displayName: 'LinkButton';
  };
  attributes: {
    Label: Schema.Attribute.String;
    Link: Schema.Attribute.Text;
  };
}

export interface SharedNumberTitle extends Struct.ComponentSchema {
  collectionName: 'components_shared_number_titles';
  info: {
    displayName: 'NumberTitle';
  };
  attributes: {
    Number: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
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
      'common.benefits-poins': CommonBenefitsPoins;
      'common.blog-listing': CommonBlogListing;
      'common.faq': CommonFaq;
      'home-page.about-us': HomePageAboutUs;
      'home-page.hero-banner': HomePageHeroBanner;
      'home-page.optimization-process': HomePageOptimizationProcess;
      'home-page.service-banner-item': HomePageServiceBannerItem;
      'home-page.service-listing': HomePageServiceListing;
      'shared.benefit-title-icon': SharedBenefitTitleIcon;
      'shared.faq-item': SharedFaqItem;
      'shared.footer-form': SharedFooterForm;
      'shared.home-service-listing': SharedHomeServiceListing;
      'shared.link-button': SharedLinkButton;
      'shared.number-title': SharedNumberTitle;
      'shared.testimonial-item': SharedTestimonialItem;
    }
  }
}
