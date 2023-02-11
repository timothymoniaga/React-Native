import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    //paddingHorizontal: 5,
    //marginHorizontal:
    //justifyContent: "center",
    
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gainsboro',
    borderRadius: 5,
    padding: 5,
    marginVertical: 3,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 30,
    fontSize: 14,
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 5,
    paddingVertical: 7,
    backgroundColor: 'skyblue',
    borderRadius: 4,
    //elevation: 3,
  },
  text: {
    color: 'black',
  }
});