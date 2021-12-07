import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const ProgressCategory = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={[styles.activeCategoryList, styles.CategoryList]}>
          <Text style={styles.activeCategoryName}>All {"  "}17</Text>
        </View>
        <View style={[styles.iactiveCategoryList, styles.CategoryList]}>
          <Text style={styles.categoryName}>To do {"  "}10</Text>
        </View>
        <View style={[styles.iactiveCategoryList, styles.CategoryList]}>
          <Text style={styles.categoryName}>In progress {"  "}1</Text>
        </View>
        <View style={[styles.iactiveCategoryList, styles.CategoryList]}>
          <Text style={styles.categoryName}>Done {"  "}17</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProgressCategory;

const styles = StyleSheet.create({
  container: {},
  CategoryList: {
    minWidth: 70,
    borderRadius: 15,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  activeCategoryList: {
    backgroundColor: "#5F33E1",
  },
  iactiveCategoryList: {
    backgroundColor: "#EEEEFC",
  },
  categoryList: {},
  activeCategoryName: {
    color: "white",
  },
  categoryName: {
    color: "black",
  },
});
