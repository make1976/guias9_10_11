import React, { createContext, useState } from 'react';
export const Context = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState({
        username: "Josefina",
        name: "Maria Jose Diaz",
        bio: "Full Stack Developer",
        avatarUrl: "https://media.diariolasamericas.com/p/bb21c5d9473b3fd308d012f0d03943a3/adjuntos/216/imagenes/000/167/0000167129/thalia-reconocida-su-contribucion-estados-unidos.jpg",
        following: 100,
        followers: 100,
        stars: 10
    });
    const updateUsername = (newUsername) => {
        setUser((currentUser) => ({
            ...currentUser,
            username: newUsername
        }));
    }
    
    return (
        <Context.Provider value={{ user, updateUsername }}>
            {children}
        </Context.Provider>
    )
}

export default UserContext
