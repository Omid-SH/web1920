import React, { useState } from 'react'
import { Form, Input, Button, Radio, Col, Row, DatePicker } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import moment from 'moment';
import { FaTimes } from 'react-icons/fa/index';

import { blue_1 } from '../../config';
import Seperator from '../Seperator';
import Title2M from '../Title2M';

const mainDivStyle = {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    left: '0',
    top: '0',       
    backdropFilter: 'blur(30px)',
    WebkitBackdropFilter: 'blur(30px)',
    backgroundColor: 'transparent',
    zIndex: '2000'
}

const cardStyle = {
    width: '300px',
    height: '600px',
    position: 'fixed',
    left: '50vw',
    top: '50vh',
    marginLeft: '-150px',
    marginTop: '-300px',
    backgroundColor: 'white',
    zIndex: '2001',
    borderRadius: '20px'
}

const formItemStyle = {
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    color: '#073e65',
    margin: '0'
}

const inputStyle = {
    width: '100%',
    borderRadius: '8px',
    border: 'solid 1px #073e65',
    fontFamily: 'Roboto',
    //fontSize: '10px',
}

const textAreaStyle = {
    height: '70px',
    width: '100%',
    borderRadius: '8px',
    border: 'solid 1px #073e65',
    fontFamily: 'Roboto'
}

const buttonStyle = {
    borderRadius: '8px',
    width: '100px',
    backgroundColor: '#073e65',
    color: '#fff',
    fontSize: '14px',
    fontFamily: 'Roboto'
}

const cancle_icon_style = {
    position: 'absolute',
    top: '26px',
    color: '#073e65',
    fontSize: '22px',
    right: '25px'
}

function ScheduleCardM(props) {

    const [form] = Form.useForm();

    return(
        <div style={mainDivStyle}>
            <div style={cardStyle}>
                <Seperator height="5px"/>
                <Title2M linewidth='5.14' text='Contact Me' color={blue_1}/>
                <Seperator height="10px"/>

                <FaTimes style={cancle_icon_style} onClick={props.closeCard} />

                <Form
                form={form}
                layout="vertical"
                style={{paddingLeft: '2.6vw', paddingRight: '2.6vw'}}
                >

                    <Row gutter={[32, 0]}>

                    <Col span={24}>
                        <Form.Item label={<p style={formItemStyle}>Your Name</p>}>
                            <Input placeholder="Jane Fox" style={inputStyle} />
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Form.Item label={<p style={formItemStyle}>Your Phone</p>}>
                            <Input placeholder="09161236547" style={inputStyle}/>
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Form.Item label={<p style={formItemStyle}>Your Email</p>}>
                            <Input placeholder="info@KapcoPropertiesLLC.com" style={inputStyle}/>
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Form.Item label={<p style={formItemStyle}>Select Time</p>}>
                        <DatePicker
                            format="YYYY-MM-DD HH:mm"
                            showTime={{ defaultValue: moment('00:00:00', 'HH:mm') }}
                            popupStyle = {{zIndex:3000}}
                            style = {inputStyle}
                        />                        
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Form.Item  label={<p style={formItemStyle}>What You're Interested In?</p>}>
                            <Input.TextArea placeholder="I'm Intrested In [ Batheny Day Center ]" style={textAreaStyle} />
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Form.Item style={{textAlign: 'right'}}>
                            <Button size={'large'} style={buttonStyle} onClick={props.closeCard} >Send</Button>
                        </Form.Item>
                    </Col>

                    </Row>

                </Form>
                
            </div>
        </div>
    )
}

export default ScheduleCardM;