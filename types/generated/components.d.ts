import type { Schema, Attribute } from '@strapi/strapi';

export interface StepsStep extends Schema.Component {
  collectionName: 'components_steps_steps';
  info: {
    displayName: 'Step';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    media: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'steps.step': StepsStep;
    }
  }
}
