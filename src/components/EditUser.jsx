import React from 'react'
import { Modal, Form } from 'antd'
import UserForm from './UserForm'

const EditUser = (props) => {

    const {setIsEditUserModalOpen, modalOpen} = props

    const handleCancel = () => {    
        setIsEditUserModalOpen(false)
    };

    return (
        <div>
            <Modal onCancel={handleCancel} open={modalOpen} title="Edit User" footer={null}>
                <UserForm form={props.form} buttonText="Update" methodName={props.updateUser} onCancel={handleCancel} />
            </Modal>
        </div>
    )
}

export default EditUser