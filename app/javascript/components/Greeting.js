import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchGreeting } from "../redux/reducers/greetingReducer";

const Greeting = () => {
  const greeting = useSelector((state) => state.greetings);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);
  return (
    <div>
      {greeting.message}!
    </div>
  )
}

export default Greeting