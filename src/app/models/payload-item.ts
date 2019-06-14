
export interface PayloadItem {
  id: string;
  type: string;
  links: {
    self: string;
  };
  attributes: Attributes;
}

export interface Attributes {
  content: string;
  display_properties: DisplayProperties;
}

export interface DisplayProperties {
  image: string;
}
