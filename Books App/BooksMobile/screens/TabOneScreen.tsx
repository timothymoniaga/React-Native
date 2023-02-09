import { ActivityIndicator, StyleSheet, FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { gql, useQuery } from '@apollo/client';
import BookItem from '../components/Bookitem';

const query = gql`
  query SearchBooks($q: String) {
    googleBooksSearch(q: $q, country: "US") {
      items {
        id
        volumeInfo {
          authors
          averageRating
          description
          imageLinks {
            thumbnail
          }
          title
          subtitle
          industryIdentifiers {
            identifier
            type
          }
        }
      }
    }
    openLibrarySearch(q: $q) {
      docs {
        author_name
        title
        cover_edition_key
        isbn
      }
    }
  }
`;



export default function TabOneScreen() {
  const { data, loading, error } = useQuery(query, {
    variables: { q: "React Native "},
  });

  //console.log(JSON.stringify(data, null, 2));
  console.log(data);
  console.log(loading);
  console.log(error);
  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator/>}
      {error && (
        <View>
          <Text>Error Fetching books</Text>
          <Text>{error.message}</Text>
        </View>
      )}

      <FlatList
        data={data?.googleBookSearch?.items || []}
        renderItem={({ item }) => (
          <BookItem book={{
            image: item.volumeInfo.imageLinks?.thumbnail, 
            title: item.volumeInfo.title, 
            authors: item.volumeInfo.authors, 
            isbn: item.volumeInfo.isbn.industryIdentifiers[0].identifier, 
            }} 
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
