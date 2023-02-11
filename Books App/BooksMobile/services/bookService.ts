export const parseBook = (item: any) : Book => {
  console.log("");
  if (item?.__typename == "GoogleItemsEntry") {
    return {
      image: item.volumeInfo.imageLinks?.thumbnail, 
      title: item.volumeInfo.title, 
      authors: item.volumeInfo.authors, 
      isbn: item.volumeInfo.industryIdentifiers?.[0]?.identifier, 
    };
  }
  else if (item?.__typename == "OLDocsEntry"){
    return{
      image: `https://covers.openlibrary.org/b/olid/${item?.cover_edition_key}-M.jpg`,
      title: item.title,
      authors: item.author_name,
      isbn: item.isbn?.[0],
    };
  } else {
    return {
      image: "http://books.google.com/books/content?id=WNSUweeeSIIC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      title: "Hello",
      authors: ["James David Cooper"],
      isbn: "0395722748",
    }
  }
}; 

export const parseData = (googleData: any, openLibData: any) => {
  //const test = [...googleData?.items, ...openLibData?.docs]
  //console.log([...googleData?.items, ...openLibData?.docs]);
  const jsonTest = {...googleData?.items, ...openLibData?.docs}
  console.log(googleData);
  return jsonTest;
}