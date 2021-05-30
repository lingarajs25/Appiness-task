import React from 'react';
import { message,Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './custom.css';
import {connect} from 'react-redux';


const Login =(props)=>{

    let onFinish = values => {
        let email=values.email;
        let password=values.password;
        if(email=== props.Credentials.username &&  password===props.Credentials.password){
              let url=`email=${email}&password=${password}`
              window.location.href='/dashboard?'+encodeURIComponent(url)
        }else{
          message.warn('Invalid Email/ Password...')
        }
      };
      return (
        <div className='form-layout'>
        <Form name="normal_login" className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item name="email"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
       
          <Form.Item>
            <Button type="primary"  htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
        </div>
      );
}
 
const mapStateToProps=(state)=>{
    return {Credentials:state.Credentials}
}
export default connect(mapStateToProps)(Login);

