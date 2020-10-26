import {
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_FAILURE,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGE_REQUEST,
  FETCH_IMAGE_FAILURE,
  FETCH_IMAGE_SUCCESS
} from "./types";

export const requestImage = () => ({ type: FETCH_IMAGES_REQUEST });

export const requestImageFailure = error => {
  return {
    type: FETCH_IMAGES_FAILURE,
    payload: error
  };
};

export const receiveImage = json => ({
  type: FETCH_IMAGES_SUCCESS,
  payload: json
});

export const requestOneImage = () => ({ type: FETCH_IMAGE_REQUEST });

export const requestOneImageFailure = error => {
  return {
    type: FETCH_IMAGE_FAILURE,
    payload: error
  };
};

export const receiveOneImage = json => ({
  type: FETCH_IMAGE_SUCCESS,
  payload: json
});

export const fetchPhotoGalery = () => {

  return async dispatch => {
    dispatch(requestImage());
    try {
   
      const response = await fetch("https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0&page=1", 
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => response.json())
      .then((responseText) => { dispatch(receiveImage(responseText));});

    
      
    } catch (error) {
      dispatch(requestImageFailure(error));
    }
  };
};

export const fetchSomePhoto = id =>{
  return async dispatch => {
    dispatch(requestImage());
    try {
      const response = await fetch('https://api.unsplash.com/photos/'+id+'/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => response.json())
      .then((responseText) => { dispatch(receiveOneImage(responseText.urls.small));});
      
    } catch (error) {
      dispatch(requestOneImageFailure(error));
    }
  };
}