//I download from the API only those values that I will need to create an array

import axios from "axios";
import { Book } from "../types/types";

export const fetchData = async () => {
  const response = await axios.get<{ items: Book[] }>(
    "https://www.googleapis.com/books/v1/volumes?q=quilting"
  );

  return response.data.items.map((item: Book) => {
    return {
      id: item.id,
      author: item.volumeInfo.authors
        ? item.volumeInfo.authors[0]
        : null,
      title: item.volumeInfo.title,
      description: item.volumeInfo.description,
      categories: item.volumeInfo.categories,
      pageCount: item.volumeInfo.pageCount,
    };
  });
};
