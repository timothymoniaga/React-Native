import { ActivityIndicator, FlatList, TextInput, Button, Pressable } from 'react-native';

import { Text, View } from '../../components/Themed';
import { useLazyQuery } from '@apollo/client';
import BookItem from '../../components/Bookitem';
import { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context"
import { searchQuery } from './queries';
import { parseBook, parseData } from '../../services/bookService';
import styles from './styles';

export default function SearchScreen() {
  const [ search, setSearch ] = useState(""); 
  const [ runQuery, { data, loading, error }] = useLazyQuery(searchQuery);
  const [ provider, setProvider ] = useState<BookProvider> ("googleBooksSearch");

  //console.log(JSON.stringify(data?.openLibrarySearch?.docs.length, null, 2));
  //console.log(JSON.stringify(data));

  return ( 
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.header}>
        <TextInput 
          value={search} 
          onChangeText={setSearch}
          placeholder='Search...' 
          style={styles.input}
          />

        <Pressable 
          onPress={() => runQuery({ variables: { q: search }})}
          style={styles.button}
          >
            <Text style={styles.text}>Search</Text>
        </Pressable>

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
        data={parseData(data?.googleBooksSearch, data?.openLibrarySearch) || []}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <BookItem book={parseBook(item)} /> }
      />
    </SafeAreaView>
  );
}
