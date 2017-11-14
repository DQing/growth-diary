import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, Button, Input} from 'antd';

const FormItem = Form.Item;
const TextArea = Input.TextArea;

class Comment extends Component {

    constructor(props) {
        super(props);
    }

    render() {

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
        };
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
        };
        console.log(this.props.diaryId);
        return <div>
            <Form onSubmit={this.handleSubmit}>
                <FormItem {...formItemLayout} label="评论">
                    {getFieldDecorator('comment')
                    (<TextArea rows={3}/>)}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" size="small" ghost htmlType="submit"
                            className='primaryButton'>提交</Button>
                    <Button size="small">取消</Button>
                </FormItem>
            </Form>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        diaryId: state.showDiaries.currentDiaryId
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        submitCommit: () => {

        }

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Comment));