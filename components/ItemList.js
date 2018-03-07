import React, { Component } from "react";
import { StyleSheet, ListView, FlatList } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Item from "./Item";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.handleDestroyItem = this.handleDestroyItem.bind(this);
  }

  handleDestroyItem(id) {
    this.props.dispatch({ type: "REMOVE_ITEM", id });
  }

  render() {
    return (
      <FlatList
        contentContainerStyle={styles.hList}
        style={styles.container}
        data={this.props.dataSource}
        keyExtractor={(item, index) => index}
        renderItem={
          (rowData) => 
          (
            <Item
              rowData={rowData.item}
              handleDestroyItem={id => this.handleDestroyItem(id)}
            />
          )
        }
      />
      
    );
  }
}

function mapStateToProps(state) {
  return {
    dataSource: state.items
  };
}

ItemList.propTypes = {
  dataSource: PropTypes.array,
  dispatch: PropTypes.func
};

const styles = StyleSheet.create({
  hList: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  container: {
    backgroundColor: "#efefef",
    flexWrap: 'wrap',
    flexDirection: 'column',
  }
});

export default connect(mapStateToProps)(ItemList);
