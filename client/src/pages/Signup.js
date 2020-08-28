import React from 'react';
import { useHistory } from 'react-router-dom';

function Signup() {
    const history = useHistory();
    return(
        <div className="row">
            <div className="col-sm-12 header">
                <h3>Sign up to start your journey!</h3>
                <input placeholder="first name" className="settingsinput" /><br />
                <input placeholder="last name" className="settingsinput" /><br />
                <input placeholder="username" className="settingsinput" /><br />
                <input placeholder="password" className="settingsinput" /><br />
                <button className="loginbtn" onClick={() => {
                    history.push('/home');
                }}>Get started</button>
            </div>
        </div>
    );
}

export default Signup;