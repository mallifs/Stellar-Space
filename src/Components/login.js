import React from 'react';

function Login({isShowLogin}) {
    return (
        
        <div className={`${!isShowLogin ? "active" : ""}show`}>
         <div className='container bg-light col-md-8'>
            <div className='form-box solid'>
                <form className='px-4 py-3'>
                    <div className='form-group-row'>
                        <div className='form-row'>
                            <div className='form-group col-md-4 mb-2'>
                                <h1 className='login-text'>Sign In</h1>
                                <label className='form-label' htmlFor='username-input'>Username</label>
                                <br/>
                                <input
                                id='username-input'
                                type="text"

                                className='form-control'/>
                            </div>  

                            <div className='form-group col-md-4 mb-2'>
                                <label>Password</label>
                                <br/>
                                <input
                                type="password"
                                id="password-input"
                                className='form-control '
                                />
                                <br/>
                                <input className='btn btn-primary' type="submit" value="LOGIN" />                    
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            
            </div>  
        </div>
    );
}

export default Login;