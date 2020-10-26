import {
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_FAILURE,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGE_REQUEST,
  FETCH_IMAGE_FAILURE,
  FETCH_IMAGE_SUCCESS
} from "../actions/types";

const initialState = {
  isFetching: false,
  items: [],
  errorMessage: ""
};

const IMAGESGalery = (state = initialState, action) => {
  switch (action.type) {
    
    case FETCH_IMAGES_REQUEST:
      return { ...state, isFetching: true };

    case FETCH_IMAGES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: "Bad code response"
      };

    case FETCH_IMAGES_SUCCESS:{
      return { ...state, isFetching: false, items: action.payload };
    }

    case FETCH_IMAGE_REQUEST:
      return { ...state, isFetching: true };

    case FETCH_IMAGE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: "Error! Cant load this image."
      };

    case FETCH_IMAGE_SUCCESS:{
      return { ...state, isFetching: false, photo: action.payload };
    }
 
    default:
      return state;
  }
};

export default IMAGESGalery;
