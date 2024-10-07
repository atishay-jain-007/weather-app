import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import moment from "moment";
import Entypo from "@expo/vector-icons/Entypo";
import { TEMPTEXT } from "../../../constants/constants";
import { Modal } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { HomeScreenContext } from "../../../context/HomeScreenContext";
import { useContext } from "react";
import LocationModal from "../Modals/LocationModal";
const LocationContainer = () => {
  const [LocationVisis, setLocationVisis] = useState(false);
  type cAndCo={
    city:string,
    state:string
  }
  const {locationlocal,setLocationlocal}=useContext(HomeScreenContext)
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => setLocationVisis(true)}>
        <Text style={styles.text}>{moment().format(" Do MMM YYYY")}</Text>
        <View style={styles.tcontainer}>
          <Entypo name="location-pin" size={30} color="white" />
          <View
            style={{ flexDirection: "row", gap: 3, alignItems: "flex-end" }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
            {locationlocal?locationlocal.city:""}
            </Text>
            <Text style={{ fontSize: 18, color: TEMPTEXT }}>{locationlocal?locationlocal.state:""}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={LocationVisis}
        presentationStyle="fullScreen"
        onRequestClose={() => setLocationVisis(false)}
      >
          <View style={styles.centeredView}>
        {/* <TouchableWithoutFeedback onPress={() => setLocationVisis(false)}> */}
            <View style={styles.modalView}>
              <LocationModal setLocationVisis={setLocationVisis} ></LocationModal>
          </View>
        {/* </TouchableWithoutFeedback> */}
            </View>
      </Modal>
    </View>
  );
};

export default LocationContainer;

const styles = StyleSheet.create({
  main: {
    flexDirection: "column",
    gap: 6,
    padding: 20,
  },
  text: {
    color: TEMPTEXT,
    fontSize: 22,
  },
  tcontainer: {
    flexDirection: "row",
  },
  centeredView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    height: "100%",
    // opacity:0.7
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#121212",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
  },
});
