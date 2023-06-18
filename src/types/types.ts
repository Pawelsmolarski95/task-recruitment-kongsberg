export interface Book {
    id: string;
    volumeInfo: {
      authors?: string[] | string;
      title: string;
      description: string;
      categories: string[] | string;
      pageCount: number;
    };
  }

 