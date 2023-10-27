import React, {useState} from 'react'
import { Form, Checkbox, Input, Radio, Select, DatePicker, InputNumber, Upload, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'

const UserForm = (props) => {

    const setValues = () =>{
        props.form.setFieldsValue({
            name: "hari",
            age: 23,
            dob: dayjs("20-06-1997", "DD-MM-YYYY"),
            email: "hariprasatham@gmail.com",
            address_line_1: "42A/1",
            address_line_2: "Mayandipatti north street",
            city: "srivilliputtur",
            district: "virudhunagar",
            state: "tamilnadu"
        })
    }
    return (
        <div>
            <Form
                labelCol={{
                    span: 6,
                }}
                layout="horizontal"
                name='userForm'
                onFinish={props.methodName}
                form={props.form}
            >
                <Form.Item label="Name" name="name">
                    <Input />
                </Form.Item>
                <Form.Item label="Age" name="age">
                    <InputNumber />
                </Form.Item>
                <Form.Item label="DOB" name="dob">
                    <DatePicker format="DD-MM-YYYY"/>
                </Form.Item>
                <Form.Item label="Email" name="email">
                    <Input />
                </Form.Item>
                <Form.Item label="Address Line 1:" name="address_line_1">
                    <Input />
                </Form.Item>
                <Form.Item label="Address Line 2:" name="address_line_2">
                    <Input />
                </Form.Item>
                <Form.Item label="City" name="city">
                    <Input />
                </Form.Item>
                <Form.Item label="District" name="district">
                    <Input />
                </Form.Item>
                <Form.Item label="State" name="state">
                    <Input />
                </Form.Item>
                <Form.Item label="Active user" name="active_user">
                    <Select>
                        <Select.Option value={true}>Active</Select.Option>
                        <Select.Option value={false}>In-Active</Select.Option>
                    </Select>
                </Form.Item>
                {/* <Form.Item label="Upload" valuePropName="fileList">
                    <Upload action="/upload.do" listType="picture-card">
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </div>
                    </Upload>
                </Form.Item> */}
                <Button htmlType='submit'>{props.buttonText}</Button>
                <Button onClick={setValues}>Set</Button>
            </Form>
        </div>
    )
}

export default UserForm