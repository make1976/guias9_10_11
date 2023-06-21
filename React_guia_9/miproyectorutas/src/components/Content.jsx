import React, { useContext } from 'react'
import { Context } from '../contexts/UserContext';

const Content = () => {
    const { user } = useContext(Context);
  return (
    <div className="Content">
      <h2>Proyectos elaborados por {user.username}</h2>
    </div>
  );
}

export default Content
