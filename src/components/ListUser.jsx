import React, { useEffect, useState } from 'react'
import { Table, Button, Tag } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import "./ListUser.css"
import API from '../../API'
import dayjs from 'dayjs'




const ListUser = (props) => {
    useEffect(()=>{props.getUsers()}, [])

    const handleEdit = (id) =>{
        props.viewUser(id)
    }

    const columns = [
        {
            title: "S.No",
            dataIndex: "key",
            key: "ley",
            width: 100
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            width: 200
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: 300
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            width: 100
        },
        {
            title: 'DOB',
            dataIndex: 'dob',
            key: 'dob',
            width: 100
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: 400
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            width: 400
        },
        {
            title: 'Active user',
            dataIndex: 'active_user',
            key: 'active_user',
            width: 100,
            render: (active_user)=>(
                <>
                <Tag color={active_user ? "green" : 'blue'}>{active_user ? "active" : "in-active"}</Tag>
                </>
            )
        },
        {
            title: 'Actions',
            dataIndex: 'action',
            key: 'action',
            width: 100,
            render: (action) => (
                <div className='flex justify-between'>
                    <Button onClick={()=>{handleEdit(action)}}><EditOutlined /></Button>
                    <Button onClick={()=>props.deleteUser(action)}><DeleteOutlined /></Button>
                </div>
            )
        },
    ];

    const data = []
    props.users?.forEach((user, index)=>{
        data.push({
            key: index + 1,
            image: "",
            name: user?.name,
            age: user?.age,
            dob: dayjs(user?.dob).format("DD-MM-YYYY"),
            address: `${user?.address_line_1}, ${user?.address_line_2}, ${user?.city},${user?.district},${user?.state}`,
            active_user: user?.active_user,
            action: user?._id

        })
    })




    return (
        <div>
            <Table columns={columns} pagination={false} dataSource={data}/>
        </div>
    )
}

export default ListUser