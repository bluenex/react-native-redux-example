import React, { Component } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

class Item extends Component {
  render() {
    return (
      <TouchableOpacity
        style={[
          styles.container,
          {
            backgroundColor: this.props.rowData.bgColor
          }
        ]}
        onPress={() => this.props.handleDestroyItem(this.props.rowData.id)}
      >
        <Text>{this.props.rowData.name}</Text>
      </TouchableOpacity>
    );
  }
}

Item.propTypes = {
  handleDestroyItem: PropTypes.func,
  rowData: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#fff',
    borderWidth: 0.25
  }
});

export default Item;
