import axios from 'axios';
const localStorage = window.localStorage;

const loginUser = (userAc) => {
  return axios
    .post('api/login/', {
      username: userAc.username,
      password: userAc.password,
    }).then(response => {
      localStorage.setItem('userToken', response.data);
      return response.data;
    }).catch(err => {
      console.log(userAc);
      alert(`there has been an error: ${err}`);
    });
};

const registerUser = (userAc) => {
  return axios
    .post('api/register/', {
      username: userAc.username,
      password: userAc.password,
      email: userAc.email,
    }).then(response => {
      console.log(response);
    }).catch(err => {
      console.log(userAc);
      alert(`there has been an error: ${err}`);
    });
};

export {loginUser, registerUser};
