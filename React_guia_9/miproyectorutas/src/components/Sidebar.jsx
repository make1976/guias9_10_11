import React, { useContext } from 'react'
import { Context } from '../contexts/UserContext'
import { Button } from 'react-bootstrap';

const Sidebar = () => {
    const { user, updateUsername } = useContext(Context);
    function randomCase(string) {
        return string
            .split("")
            .map((c) => (Math.random() <= 0.5 ? c.toUpperCase() : c.toLowerCase()))
            .join("");
    }
    return (
        <div className="Sidebar">
            <img alt="Profile" src={user.avatarUrl} />
            <h2>{user.name}</h2>
            <h1>{user.username}</h1>
            <div>

                Seguidores: {user.followers}, Segudores: {user.following}, Estrellas: {" "}
                {user.Stars}
            </div>
            <Button onClick={() => updateUsername(randomCase(user.username))}>
                Randomizar
            </Button>
        </div>
    );
}

export default Sidebar
