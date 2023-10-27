import React, {useState} from 'react'
import UserForm from './components/UserForm'
import { Modal, FloatButton, Button, Form} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import ListUser from './components/ListUser'
import "./App.css"
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import API from '../API'
import dayjs from 'dayjs'

const App = () => {
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false)
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false)
  const [users, setUsers] = useState([])
  const [user, setuser] = useState({})
  const [form] = Form.useForm()

  const viewUser = (id)=>{
    API.get("user", id).then((res)=>{
      console.log(res)
      if(res?.data){
        setIsEditUserModalOpen(true)
        form.setFieldsValue({
          ...res?.data,
          dob: dayjs(res?.data?.dob)
        })
        setuser(res?.data)
      }
    }).catch((err)=>{
      console.log(err)
    })
  }

  const updateUser = (values)=>{
    console.log(values)
    API.update("user", user?._id, values).then((res)=>{
      console.log(res)
      setIsEditUserModalOpen(false)
      getUsers()
    }).catch((err)=>{
      console.log(err)
    })
  }

  const addUser = (values) => {
    console.log("Values--->", values)
    // values.dob = dayjs(values.dob).format("DD-MM-YYYY")
    API.create("user", values).then((res)=>{
        console.log(res)
        setIsAddUserModalOpen(false)
        getUsers()
    }).catch((err)=>{
        console.log(err)
    })
}

const getUsers = () =>{
  API.getAll("user").then((res)=>{
      // console.log(res)
      if(res?.data){
          setUsers(res?.data)
      }
  }).catch((err)=>{
      console.log(err)
  })
}

const handleDeleteUser = (id) =>{
  API.delete("user", id).then((res)=>{
      console.log(res)
      getUsers()
  }).catch((err)=>{
      console.log(err)
  })
}

  return (
    <div>
      <ListUser setIsEditUserModalOpen={setIsEditUserModalOpen} setuser={setuser} viewUser={viewUser} getUsers={getUsers} users={users} setUsers={setUsers} deleteUser={handleDeleteUser}/>
      <FloatButton
      icon={<PlusOutlined />}
      type="primary"
      style={{
        right: 24,
      }}
      onClick={()=>setIsAddUserModalOpen(true)}
    />
    <AddUser modalOpen={isAddUserModalOpen} setIsAddUserModalOpen={setIsAddUserModalOpen} addUser={addUser}/>
    <EditUser modalOpen={isEditUserModalOpen} setIsEditUserModalOpen={setIsEditUserModalOpen} updateUser={updateUser} user={user} form={form}/>
    </div>
  )
}

export default App