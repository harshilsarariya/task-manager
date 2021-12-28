import React, { useState, useContext, useEffect } from "react";
import projectContext from "../../context/projects/projectContext";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Entypo from "react-native-vector-icons/Entypo";

const NewProject = () => {
  const context = useContext(projectContext);
  const { addProject } = context;
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date("2020-06-12"));
  const [show, setShow] = useState(false);

  const onChange = (selectedDate) => {
    let currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    console.log(currentDate.nativeEvent.timestamp());
  };

  const handleClick = () => {
    addProject(text, date.nativeEvent.timestamp);
    setText("");
    setDate(new Date("2020-06-12"));
    setModalVisible(!modalVisible);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <>
      {/* modal */}
      <View style={styles.centeredView}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TextInput
                style={styles.input}
                onChangeText={setText}
                value={text}
                placeholder="Project Name"
              />
              <View>
                <View
                  style={[
                    styles.datepickerButton,
                    { backgroundColor: "#647AFF" },
                  ]}
                >
                  <Entypo
                    name={"calendar"}
                    style={{
                      marginRight: 10,
                    }}
                    size={20}
                    color={"white"}
                  />

                  <Text
                    style={[styles.datepickertextStyle]}
                    onPress={showDatepicker}
                  >
                    Today
                  </Text>
                </View>

                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={date}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                  />
                )}
              </View>
              <TouchableOpacity
                style={[
                  styles.button,
                  { marginTop: 80, backgroundColor: "#066AFF" },
                ]}
                onPress={() => handleClick()}
              >
                <Text style={styles.textStyle}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      {/* Ṇew task Button */}
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.95}
          style={[styles.button]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>+{"  "} New Project</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default NewProject;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    zIndex: 999,
    right: "25%",
  },
  button: {
    marginTop: 20,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    padding: 15,
    borderRadius: 30,
    width: 200,
    position: "relative",
    marginBottom: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 20,
  },
  datepickerButton: {
    marginTop: 15,
    backgroundColor: "#5F33E1",
    flexDirection: "row",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10,
    width: 150,
    position: "relative",
    right: 60,
    alignItems: "center",
  },
  datepickertextStyle: {
    color: "white",
    fontSize: 15,
  },

  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalView: {
    margin: 20,
    marginTop: 22,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    height: 400,
    alignItems: "center",
    justifyContent: "flex-end",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  textStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 270,
    borderRadius: 10,
    fontSize: 18,
    paddingLeft: 20,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});
