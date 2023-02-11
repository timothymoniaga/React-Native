import { ActivityIndicator, FlatList, TextInput, Button } from 'react-native';

import { Text, View } from '../../components/Themed';
import { useLazyQuery } from '@apollo/client';
import BookItem from '../../components/Bookitem';
import { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context"
import { searchQuery } from './queries';
import { parseBook } from '../../services/bookService';
import styles from './styles';

export default function SearchScreen() {
  const [ search, setSearch ] = useState(""); 
  const [ runQuery, { data, loading, error }] = useLazyQuery(searchQuery);
  const [ provider, setProvider ] = useState<BookProvider> ("googleBooksSearch");

  //console.log(JSON.stringify(data?.openLibrarySearch?.docs.length, null, 2));

  return ( 
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.header}>
        <TextInput 
          value={search} 
          onChangeText={setSearch}
          placeholder='Search...' 
          style={styles.input}/>

        <Button 
          title='Search'
          onPress={() => runQuery({ variables: { q: search }})}/>

      </View>
      <View style={styles.tabs}>
        <Text 
          style={provider == "googleBooksSearch" ? {fontWeight: "bold", color: "skyblue" } : {} }
          onPress={() => setProvider("googleBooksSearch")}
          >Google Books</Text>
        <Text 
          style={provider == "openLibrarySearch" ? {fontWeight: "bold", color: "skyblue" } : {} }
          onPress={() => setProvider("openLibrarySearch")}
          >Open Library</Text>

      </View>

      {loading && <ActivityIndicator/>}
      {error && (
        <View>
          <Text>Error Fetching books</Text>
          <Text>{error.message}</Text>
        </View>
      )}

      <FlatList
        data={data}
        //data={((data?.googleBooksSearch?.items) ? data?.googleBooksSearch?.items : data?.openLibrarySearch.docs) || []}
        //data={(provider == "googleBooksSearch" ? data?.googleBooksSearch?.items : data?.openLibrarySearch?.docs) || []}
        showsVerticalScrollIndicator={false}
        //renderItem={({ item }) => <BookItem book={parseBook(item, provider)} /> }
        renderItem={({ item }) => <BookItem book={parseBook(item)} /> }
      />
    </SafeAreaView>
  );
}
