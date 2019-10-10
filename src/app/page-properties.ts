export interface PageAppearence {
    getPageProperties(): PageProperties;
}

export interface PageProperties {
    isHeaderVisible: boolean;
    pageTitle: string;
  }