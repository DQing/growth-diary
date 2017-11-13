import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DatePicker, Row, Col, Input, Form, Button} from 'antd';
import * as action from '../actions/growth-diary';
import '../less/growth-diary.css'

const FormItem = Form.Item;

class GrowthDiary extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const values = this.props.form.getFieldsValue();
        const date = values.date.format('YYYY/MM/DD');
        const {content} = values;
        this.props.addDiary({date: new Date(date), content, userId: 1});
        console.log(date, content);
    }


    render() {
        const {TextArea} = Input;
        const dateFormat = 'YYYY/MM/DD';
        const {getFieldDecorator} = this.props.form;

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
                <Form onSubmit={this.handleSubmit}>
                    <FormItem {...formItemLayout} label="日期">
                        {getFieldDecorator('date')
                        (<DatePicker format={dateFormat}
                                     size="large"/>)}
                    </FormItem>
                    <FormItem {...formItemLayout} label="日志内容">
                        {getFieldDecorator('content')
                        (<TextArea rows={5}/>)}
                    </FormItem>

                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" className='primaryButton'>提交</Button>
                        <Button>取消</Button>
                    </FormItem>
                </Form>
            </Col>
        </Row>
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToprops = (dispatch) => {
    return {
        addDiary: (diary) => {
            dispatch(action.addDiary(diary));
        }
    };

};

export default connect(mapStateToProps, mapDispatchToprops)(Form.create()(GrowthDiary));