import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

const API_KEY = "gaesti::stepzen.net+1000::e62f8dacf34e977ae22e531df6b9e876ceb6e1c7ee1c0a60d3d600c3ed0f6123";

const client = new ApolloClient({
  uri: "https://gaesti.stepzen.net/api/reeling-opossum/__graphql",
  headers: {
    Authorization: `Apikey ${API_KEY}`
  },
  cache: new InMemoryCache(),

});

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ApolloProvider client={client}>
          <Navigation colorScheme={colorScheme} />
        </ApolloProvider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
