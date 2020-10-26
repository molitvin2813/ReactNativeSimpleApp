import React, { Component } from "react";
import { StyleSheet, FlatList, Text, Image, View, Button ,TouchableOpacity, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";
import { connect} from "react-redux";
import { bindActionCreators } from 'redux'
import { NavigationActions } from 'react-navigation'
import { exp } from "react-native/Libraries/Animated/src/Easing";


import { fetchPhotoGalery } from "../../redux/actions/ImageAction";

class Galery extends Component{

  componentDidMount() {
    this.props.fetchPhotoGalery();
  }

  constructor(){
    super();
  }
  _renderItem(data) {
    return(
    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Photo', { id: data.item.id })}>
      <View style={styles.cont}>     
        <Image style={styles.cover} source={{uri:data.item.urls.small}}/>
        <View style={styles.info}>
          <Text style={styles.author}>Автор: {data.item.user.name}</Text>
          <Text style={styles.title}>{data.item.alt_description}</Text>
        </View>
      </View>
    </TouchableOpacity>
    );
  }

  render(){
    if (this.props.images.isFetching) 
      return (<ActivityIndicator size="large" />);
    else 
      return(
        <View style={styles.container}>
          <FlatList 
            data={this.props.images.items} 
            renderItem={({item})=>this._renderItem({item})}
          />
        </View>
      );

  }
}


const styles = StyleSheet.create({
  cont: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderBottomColor: "#AAAAAA",
    borderBottomWidth: 2,
    paddingTop: 25,
    height: 250,
    
  },
  cover: {  flex:1,height: 200, padding:5,  resizeMode: "contain" },
  info: {
    flexDirection:'row', 
    flex: 1, 
    flexWrap: 'wrap',
    padding: 20
    
  },
  author: { fontSize: 14 },
  title: { fontSize: 14, fontWeight: "bold", marginTop: 10},
  id:{ height:0},
  container:{
    width: "100%" , 
    height: "100%", 
    paddingTop: 50,
    paddingLeft: 25,
    paddingRight: 25
  }
 });
 
Galery.propTypes = {
  fetchPhotoGalery: PropTypes.func.isRequired,
  images: PropTypes.object
};

  
const mapStateToProps = state => {
  return {
    images: state
  };
};

export default connect(mapStateToProps, {
  fetchPhotoGalery
})(Galery);