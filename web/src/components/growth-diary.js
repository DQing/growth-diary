import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DatePicker, Row, Col, Input, Form, Button} from 'antd';
import moment from 'moment';
import '../less/growth-diary.css'

const FormItem = Form.Item;

class GrowthDiary extends Component {
    render() {
        const {TextArea} = Input;
        const dateFormat = 'YYYY/MM/DD';
        // return <Row>
        //     <Col span={8} offset={5} >
        //         <div>
        //             <span className='dateText'>日期</span>
        //             <DatePicker defaultValue={moment('2017/11/12', dateFormat)} format={dateFormat} size="large"/>
        //         </div>
        //         <div>
        //             <span className='diaryText'>日志内容</span><TextArea rows={4}/>
        //
        //         </div>
        //
        //     </Col>
        // </Row>;

        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 6}
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 14}
            }
        }
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0
                },
                sm: {
                    span: 14,
                    offset: 6
                }
            }
        }

        return <Row>
            <Col span={13} offset={5}>
                <Form>
                    <FormItem {...formItemLayout} label="日期">
                        <DatePicker defaultValue={moment('2017/11/12', dateFormat)} format={dateFormat} size="large"/>
                    </FormItem>
                    <FormItem {...formItemLayout} label="日志内容">
                        <TextArea rows={5}/>
                    </FormItem>

                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" className='primaryButton'>提交</Button>
                        <Button>取消</Button>
                    </FormItem>
                </Form>
            </Col>
        </Row>
    }
}

export default connect()(GrowthDiary);