import React,{useState} from 'react'

const Admin = () => {



    const [admin, setadmin] = useState({
        user:'Rajat12345',
        password:'Herozero'
    })
    return (
        
        <div>
            <span>Admin login</span>
            
            <div>
                <label>
                    username:
                <input ></input>
                </label>

                <label>
                   password:
                <input type="password" ></input>
                </label>
            </div>
        </div>
    )
}

export default Admin
