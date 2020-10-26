import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button,FlatList,ActivityIndicator} from 'react-native';
import PropTypes from "prop-types";
import { connect} from "react-redux";
import {fetchSomePhoto} from '../../redux/actions/ImageAction'
class Photo extends Component{
  constructor(){
    super();

    
    this.state={
      _url:''
    }

  }
  componentDidMount(){
    const { id } = this.props.route.params;
    this.props.fetchSomePhoto(id);
  }

  render(){
    if (this.props.err.isFetching) {console.log('1');
      return (<ActivityIndicator size="large" />);
    }
    else{
      return(
        <View style={styles.container}>
          <Image style={styles.backgroundImage} source={{uri:  typeof this.props.err.photo  === 'string' ?  this.props.err.photo : '' }} />
        </View>
      );
    }
     
  }
}

Photo.propTypes = {
  photo: PropTypes.object
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  backgroundImage: {
    flexGrow: 1,
    alignSelf: 'stretch',
    resizeMode: "contain" 
  }
});


Photo.propTypes = {
  fetchSomePhoto: PropTypes.func.isRequired,
  images: PropTypes.object
};

  
const mapStateToProps = state => {
  return {
    err: state
  };
};

export default connect(mapStateToProps, {
  fetchSomePhoto
})(Photo);