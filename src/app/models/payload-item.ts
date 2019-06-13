
export interface PayloadItem {
  id: string;
  type: string;
  links: {
    self: string;
  };
}

export interface PayloadDto {
  data: {
    items: PayloadItem[];
  };
}
