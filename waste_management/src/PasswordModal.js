


import React, { useState } from 'react';
import './style/PasswordModal.css';

const PasswordModal = ({ onPasswordCorrect }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setError('');
    };

    const handlePasswordSubmit = () => {
        if (password === 'syn10024') { // Replace 'yourpassword' with the actual password
            onPasswordCorrect();
        } else {
            setError('Password is incorrect');
        }
    };

    return (
        <div className="password-modal">
            <div className="password-modal-content">
                <h2>Please enter a password</h2>
                <input
                    type="password"
                    maxLength="10"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <button onClick={handlePasswordSubmit}>Submit</button>
                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    );
};

export default PasswordModal;
