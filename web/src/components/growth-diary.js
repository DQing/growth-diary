import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DatePicker, Row, Col, Card, Input, Form, Button} from 'antd';
import * as action from '../actions/growth-diary';
import '../less/growth-diary.css'

const FormItem = Form.Item;

class GrowthDiary extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const values = this.props.form.getFieldsValue();
        const date = values.date.format('YYYY/MM/DD');
        const {content} = values;
        this.props.addDiary({date: new Date(date), content, userId: this.props.userId});
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

        return <Form onSubmit={this.handleSubmit}>
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
                    <Button type="primary" size="small" ghost htmlType="submit" className='primaryButton'>提交</Button>
                    <Button size="small">取消</Button>
                </FormItem>
            </Form>
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.showDiaries.userId
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addDiary: (diary) => {
            dispatch(action.addDiary(diary));
        }
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(GrowthDiary));