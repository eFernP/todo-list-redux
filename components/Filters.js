import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions";
import { View, StyleSheet } from "react-native";

const Filters = () => (
  <View style={styles.container}>
    <View style={styles.filterContainer}>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    </View>
    <View style={styles.borderContainer}>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    </View>
    <View style={styles.filterContainer}>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  filterContainer: {
    width: "33%"
  },
  borderContainer: {
    width: "33%",
    borderLeftColor: "gray",
    borderLeftWidth: 1,
    borderRightColor: "gray",
    borderRightWidth: 1
  }
});

export default Filters;
