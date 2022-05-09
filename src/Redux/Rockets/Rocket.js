const STORE_ROCKETS = 'src/pages/rockets/ADD_ROCKETS';

export const addRockets = () => (dispatch) => {
  fetch('https://api.spacexdata.com/v3/rockets')
    .then(data => data.json())
    .then(data => {
      console.log(data);
      dispatch({ type: STORE_ROCKETS, payload: data });
    })
    .catch(error => console.log(error));
};

const reduceBook = (state = [], action) => {
  switch (action) {
    case STORE_ROCKETS:
      return action.payload;
    default:
      return state;
  }
}


export default reduceBook;

