import React, {Component} from 'react';
import '../less/show-diaries.css';
import {connect} from 'react-redux';
import {Card, Icon, Button, Row, Col, Popconfirm} from 'antd';
import * as action from '../actions/show-diaries';
import GrowthDiary from './growth-diary';

class ShowDiary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array:[]
        }

    }

    componentWillMount() {

        this.props.getDiaries(this.props.userId);
    }

    deleteDiary(id) {
        this.props.onDeleteDiary(id, this.props.userId);
    }

    changeView(id) {
        const array = this.state.array;
        array.push(id);
        this.setState({
            array:array
        });
    }

    render() {

        let title = "";
        return <div>
            {
                this.props.diaries.map((d, i) => {

                    title = new Date(d.date).toLocaleDateString();

                    return <div key={i}>
                        <Card className={this.state.array.some(a => a === d.id) ? "hidden" : "tws-card"}
                              noHovering
                              title={title}
                              extra={<Popconfirm title="是否删除？" onConfirm={this.deleteDiary.bind(this, d.id)}><Icon
                                  type="close" style={{fontSize: '18px'}}/></Popconfirm>}>
                            <div className="card-content">
                                {d.content}
                            </div>
                            <Row gutter={0} className="footer">
                                <Col offset={22} span={1}>
                                    <Button type="primary" ghost size="small"
                                            onClick={this.changeView.bind(this, d.id)}>
                                        修改
                                    </Button>
                                </Col>
                                <Col span={1}>
                                    <Button type="primary" ghost size="small">
                                        评论
                                    </Button>
                                </Col>
                            </Row>
                        </Card>
                        <Card className={this.state.array.some(a => a === d.id) ? "tws-card" : "hidden"} title="修改日志">
                            <GrowthDiary />
                        </Card>
                    </div>
                })
            }
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        diaries: state.showDiaries.diaries,
        userId: state.showDiaries.userId
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getDiaries: (userId) => {
            dispatch(action.getDiaries(userId));
        },
        onDeleteDiary: (id, userId) => {
            dispatch(action.deleteDiary(id, userId));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShowDiary);