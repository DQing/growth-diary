import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AutoComplete, Input, Icon, Col, Card, Row, Avatar} from 'antd';
import * as action from '../actions/followed';
import '../less/followed.css';

const Option = AutoComplete.Option;

class Followed extends Component {

    componentWillMount() {
        this.props.getFollowers(this.props.userId);
    }

    followInput(value) {
        console.log(value);
        this.props.findUsers(value);
    }


    render() {

        const options = this.props.users.map(opt => (
            <Option key={opt.id} value={opt.name}>
                {opt.name}
                <span className="certain-search-item-count">{0}人关注</span>
            </Option>
        ));

        return <div>
            <Row>
                <Col span={10} offset={8} className="certain-category-search-wrapper">
                    <AutoComplete
                        className="certain-category-search"
                        dropdownClassName="certain-category-search-dropdown"
                        dropdownMatchSelectWidth={false}
                        dropdownStyle={{width: '300px'}}
                        size="large"
                        style={{width: '100%'}}
                        dataSource={options}
                        placeholder="input here"
                        optionLabelProp="value" onChange={this.followInput.bind(this)}>
                        <Input ref="followed" suffix={<Icon type="search" className="certain-category-icon"/>}/>
                    </AutoComplete>
                </Col>
            </Row>

            <Row gutter={16}>
                {this.props.followers.map((f, i) => {
                    return <Col span={6} key={i}>
                        <Card bodyStyle={{padding: 0}} noHovering>
                            <Card.Grid style={{width: '100%', height: '150px', textAlign: 'center'}}>
                                <Avatar style={{
                                    backgroundColor: '#ffbf00',
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '50%'
                                }}
                                        size="large">{f.user.name}</Avatar>
                                <p>{f.user.name}</p>
                            </Card.Grid>
                            <Card.Grid style={{width: '100%', height: '80px'}}>
                                <p>最近更新日志:{f.count}篇</p>
                                <p>最近更新日期：{f.date}</p>
                            </Card.Grid>
                        </Card>
                    </Col>
                })}
            </Row>

        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        followers: state.followed.followers,
        userId: state.showDiaries.userId,
        users: state.user.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getFollowers: (id) => {

            dispatch(action.getFollowers(id));
        },
        findUsers: (value) => {
            dispatch(action.findUsers(value));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Followed);