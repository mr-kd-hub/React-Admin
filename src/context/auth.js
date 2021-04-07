import React, { createContext, useReducer } from 'react';
import jwtDecode from 'jwt-decode';

//initially state is null 
const initialState = {
  user: null
};

//check for token
if (localStorage.getItem('token')) {
  // If page refresh then also get all info of user
  const decodedToken = jwtDecode(localStorage.getItem('token'));
  if (decodedToken.exp * 1000 < Date.now()) 
  {
    localStorage.removeItem('token');
  } 
  else 
  {
    console.log(decodedToken);
    initialState.user = decodedToken;
  }
}

//exported,imported in Navbar.jsx(useContext through)
const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});


//start - reducer function of useReducer hook
const authReducer = (state, action) => {
  //action gets type(LOGIN,LOGOUT etc),state get token
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state, //state contains token
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
//end - reducer function of useReducer hook


//exported
const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);//here state = initialState

  //userData is comming from LOGIN API res.send through(route.js)
  //userData -> msg,success,token . daTA GETTING FROM lOGIN.jsx
  const login = (userData) => {
    console.log('userData', userData);
    localStorage.setItem('token', userData.token);
    dispatch({
      type: 'LOGIN',
      payload: userData,
    });
  };

  const logout = () => {
    // console.log('logout caalled');
    localStorage.removeItem('token');
    dispatch({
      type: 'LOGOUT',
    });
  };

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }} //user stores token
      {...props}
    />
  );
};

export { AuthContext, AuthProvider };
