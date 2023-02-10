import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert, TextInput } from 'react-native';

export default function App() {
const handlePress = () => console.log("text pressed");

  return (
    <View style={styles.container}>
      <Text onPress={handlePress}>
        Hello World - A really really long text, I wanna make this really long to see what happens
        </Text>

        <Button
          onPress={() => Alert.alert('Cannot press this one')}
          title="Learn More"
          color="#841584"
        />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue=""
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
