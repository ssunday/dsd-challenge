import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@material-ui/core'
import axios from 'axios'

const User = () => {
  const { id } = useParams();

  const [user, setUser] = useState([])

  const loadUser = async () => {
    const response = await axios.get(`/api/v1/users/${id}?is_user=false`)
    setUser(response.data)
  }

  const onSave = async (event) => {
    event.preventDefault()
    await axios.put(`/api/v1/users/${id}`, { user })
  }

  const onChange = (event) => {
    const target = event.currentTarget
    setUser({...user, [target.name]: target.value });
  }

  useEffect(() => {
    loadUser()
  }, [])

  return (
    <Box>
      {user && (
         <form onSubmit={onSave}>
           <fieldset>
             <div>
               <label>First Name</label>
               <input type="text" name="first_name" value={user.first_name} onChange={onChange} />
             </div>
             <div>
               <label>Last Name</label>
               <input type="text" name="last_name" value={user.last_name} onChange={onChange} />
             </div>
             {user.email && <div>
               <label>Email</label>
               <input type="text" name="email" value={user.email} onChange={onChange} />
             </div>}
             <button type="submit">Save</button>
           </fieldset>
         </form>
      )}
    </Box>
  )
}

export default User
