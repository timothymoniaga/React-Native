export const parseBook =  (item: any) : Book => {
  if (item.volumeInfo) {
    return {
      image: item.volumeInfo.imageLinks?.thumbnail, 
      title: item.volumeInfo.title, 
      authors: item.volumeInfo.authors, 
      isbn: item.volumeInfo.industryIdentifiers?.[0]?.identifier, 
    };
  }
  else {
    return{
      image: `https://covers.openlibrary.org/b/olid/${item.cover_edition_key}-M.jpg`,
      title: item.title,
      authors: item.author_name,
      isbn: item.isbn?.[0],
    };
  }
  // if (item?.googleBooksSearch?.items) {
  //   return {
  //     image: item?.googleBooksSearch?.items.volumeInfo.imageLinks?.thumbnail, 
  //     title: item?.googleBooksSearch?.items.volumeInfo.title, 
  //     authors: item?.googleBooksSearch?.items.volumeInfo.authors, 
  //     isbn: item?.googleBooksSearch?.items.volumeInfo.industryIdentifiers?.[0]?.identifier, 
  //   }
  // } else {
  //     return {
  //       image: `https://covers.openlibrary.org/b/olid/${item.cover_edition_key}-M.jpg`,
  //       title: item.title,
  //       authors: item.author_name,
  //       isbn: item.isbn?.[0],
  //     }
  // }

}; 