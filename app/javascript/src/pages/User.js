import React from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@material-ui/core'

const User = () => {
  const { id } = useParams();

  const [user, setUser] = useState([])

  const loadUser = async () => {
    const response = await axios.get(`api/v1/users/${id}`)
    setUser(response.data)
  }

  useEffect(() => {
    loadUser()
  }, [])

  return (
      <Box>
      {user && (
        <div>
          <label>First Name</label>
          <input type="text" name="first_name" value={user.first_name} onChange={onChange} />
          <label>Last Name</label>
          <input type="text" name="last_name" value={user.last_name} onChange={onChange} />
          {user.email && <div>
            <label>Email</label>
            <input type="text" name="email" value={user.email} onChange={onChange} />
          </div>}
         </div>
      )}
    </Box>
  )
}

export default User
