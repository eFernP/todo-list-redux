import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-native";

const Link = ({ active, children, onPress }) => (
  <Button onPress={onPress} disabled={active} title={children} />
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired
};

export default Link;
