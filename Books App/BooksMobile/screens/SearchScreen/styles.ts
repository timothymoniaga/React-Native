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
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gainsboro',
    borderRadius: 5,
    padding: 5,
    marginVertical: 3,
  },
  tabs:{
    flexDirection: "row",
    justifyContent: "space-around",
    height: 30,
    fontSize: 14,
    alignItems: "center",
  },

});