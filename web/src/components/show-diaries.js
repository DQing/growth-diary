import React, {Component} from 'react';
import '../less/show-diaries.css';
import {connect} from 'react-redux';
import {Card, Icon, Button, Row, Col, Popconfirm} from 'antd';
import * as action from '../actions/show-diaries';
import GrowthDiary from './growth-diary';
import {withRouter} from 'react-router';
import Commit from './commit';


class ShowDiary extends Component {
    componentWillMount() {

        this.props.getDiaries(this.props.userId);
    }

    deleteDiary(id) {
        this.props.onDeleteDiary(id, this.props.userId);
    }

    changeView(id) {
        this.props.addHiddenModifyInputArray(id);
    }

    displayCommitInput(id) {
        this.props.addDisplayCommitInput(id);
    }

    render() {
        return <div>
            {
                this.props.diaries.map((d, i) => {

                    const title = new Date(d.date).toLocaleDateString();

                    return <div key={i}>
                        <Card className={this.props.hiddenModifyInputArray.some(a => a === d.id) ? "hidden" : "tws-card"}
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
                                        <Button type="primary" ghost size="small" onClick={this.displayCommitInput.bind(this, d.id)}>
                                            评论
                                        </Button>
                                </Col>
                            </Row>
                            <div className={this.props.commitInputArray.some(a => a === d.id) ? "" : "hidden"}>
                                {this.props.children}
                            </div>
                        </Card>
                        <Card className={this.props.hiddenModifyInputArray.some(a => a === d.id) ? "tws-card" : "hidden"}
                              title="修改日志">
                            <GrowthDiary flag="modify" diary={d}/>
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
        userId: state.showDiaries.userId,
        hiddenModifyInputArray: state.showDiaries.hiddenModifyInputArray,
        commitInputArray: state.showDiaries.commitInputArray
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getDiaries: (userId) => {
            dispatch(action.getDiaries(userId));
        },
        onDeleteDiary: (id, userId) => {
            dispatch(action.deleteDiary(id, userId));
        },
        addHiddenModifyInputArray: (id) => {
            dispatch({type: "ADD_HIDDEN", id});
        },
        addDisplayCommitInput: (id) => {
            dispatch({type: "ADD_DISPLAY", id});
        }
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShowDiary));