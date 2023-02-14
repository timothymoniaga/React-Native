import { ActivityIndicator, FlatList, TextInput, Button, Pressable } from 'react-native';

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
      {loading && <ActivityIndicator/>}
      {error && (
        <View>
          <Text>Error Fetching books</Text>
          <Text>{error.message}</Text>
        </View>
      )}

      <FlatList
        data={[ ...data?.googleBooksSearch?.items, ...data?.openLibrarySearch?.docs] || []}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <BookItem book={parseBook(item)} /> }
      />
    </SafeAreaView>
  );
}
