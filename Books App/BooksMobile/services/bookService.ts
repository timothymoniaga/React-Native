// const googleBooksCounter = 0;
// const openlibraryCounter = 0;

export const parseBook =  (item: any) : Book => {
  const counter = 0;
  var retVal: Book = {
    image: "", 
    title: "", 
    authors: [], 
    isbn: "", 
  } 
  console.log(counter);

  if(item?.googleBooksSearch?.items[counter]) {
    const googleItem = item?.googleBooksSearch?.items[counter];
    retVal = {
      image: googleItem.volumeInfo.imageLinks?.thumbnail,
      title: googleItem.volumeInfo.title, 
      authors: googleItem.volumeInfo.authors,
      isbn: googleItem.volumeInfo.industryIdentifiers?.[0]?.identifier, 
    }
  }

  return retVal;

  // if (item.volumeInfo) {
  //   return {
  //     image: item.volumeInfo.imageLinks?.thumbnail, 
  //     title: item.volumeInfo.title, 
  //     authors: item.volumeInfo.authors, 
  //     isbn: item.volumeInfo.industryIdentifiers?.[0]?.identifier, 
  //   };
  // }
  // else {
  //   return{
  //     image: `https://covers.openlibrary.org/b/olid/${item.cover_edition_key}-M.jpg`,
  //     title: item.title,
  //     authors: item.author_name,
  //     isbn: item.isbn?.[0],
  //   };
  // }
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