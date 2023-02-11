export const parseBook = (item: any) : Book => {
  //console.log(item.__typename);
  if (item?.items) {
    return {
      image: item.volumeInfo.imageLinks?.thumbnail, 
      title: item.volumeInfo.title, 
      authors: item.volumeInfo.authors, 
      isbn: item.volumeInfo.industryIdentifiers?.[0]?.identifier, 
    };
  }
  else if (item?.docs){
    return{
      image: `https://covers.openlibrary.org/b/olid/${item?.docs.cover_edition_key}-M.jpg`,
      title: item.title,
      authors: item.author_name,
      isbn: item.isbn?.[0],
    };
  } else {
    return {
      image: "",
      title: "",
      authors: [],
      isbn: "",
    }
  }
}; 

export const parseData = (googleData: any, openLibData: any) => {
  //console.log([googleData?.items, openLibData?.docs]);
  return [googleData?.items, openLibData?.docs];
}