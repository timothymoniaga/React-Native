import { createContext, useContext, ReactNode, useState } from "react";

///passing data to another page. Very Important

type myBooksContextType = {
  onToggleSaved: (book: Book) => void;
  isBookSaved: (book: Book) => boolean;
  savedBooks: Book[]
};

const myBooksContext = createContext<myBooksContextType>({
  onToggleSaved: () => {},
  isBookSaved: () => false,
  savedBooks: [],
});

type Props = {
  children: ReactNode;
};

const areBooksTheSame = (a: Book, b: Book) => {
  return JSON.stringify(a) == JSON.stringify(b);
};

const MyBooksProvider = ({ children }: Props) => {
  const [savedBooks, setSavedBooks] = useState<Book[]>([]);
  
  const isBookSaved = (book: Book) => {
    return savedBooks.some((savedBook) => 
    areBooksTheSame( savedBook, book));
  };

  const onToggleSaved = (book: Book) => {
    if(isBookSaved(book)) {
      //removed from saved
      setSavedBooks(books => books.filter((savedBook) => !areBooksTheSame(savedBook, book))
    );
    } else {
      setSavedBooks((books) => [book, ...books]);

    }

  };

  return (
    <myBooksContext.Provider value={{ onToggleSaved, isBookSaved, savedBooks }}>
      {children}
    </myBooksContext.Provider>
  );
};

export const useMyBooks = () => useContext(myBooksContext);

export default MyBooksProvider;