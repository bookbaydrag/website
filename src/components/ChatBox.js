import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

function AppChat() {
    const [socket] = useState(() => io(':8000'));

    useEffect(()=>{
        socket.on('Welcome', data => console.log(data));
        return () => socket.disconnect(true)
    }, []);

    return (
        <div className="AppChat">
            <h1>Socket Test</h1>
        </div>
    )
}

export default AppChat;