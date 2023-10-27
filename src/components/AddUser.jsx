import React from 'react'
import {Modal, Form} from 'antd'
import UserForm from './UserForm'
import API from '../../API'
import dayjs from 'dayjs'


const AddUser = (props) => {
    const [form] = Form.useForm()
    const {setIsAddUserModalOpen, modalOpen} = props
    const handleCancel = () => {
    setIsAddUserModalOpen(false)
    };
    
    return (
        <div>
            <Modal footer={null} title="Add User" open={modalOpen} onCancel={handleCancel}>
                <UserForm form={form} buttonText="Save" methodName={props.addUser} />
            </Modal>
        </div>
    )
}

export default AddUser