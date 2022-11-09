import React,{useContext} from 'react';
import AuthContext from '../../store/auth-context';
import Button from '../UI/Button/Button';
// import {useNavigate} from 'react-router-dom'

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  const Authctx=useContext(AuthContext);
  
  const navigateToOrder = () => {
    // 👇️ navigate to /
    window.location.href = '/order';
  };

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={navigateToOrder}>Order Your Food</Button>
    </Card>
  );
};

export default Home;
