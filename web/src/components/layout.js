import React, {Component} from 'react';
import '../less/layout.css';
import {connect} from 'react-redux';
import {Breadcrumb, Layout, Menu, Icon} from 'antd';
import GrowthDiary from './growth-diary';

const {Content, Sider} = Layout;

class SchoolTW extends Component {
    changeView(menu) {
        this.props.changeMenu(menu.key);
    }

    displayMenu(menu) {
        switch (menu){
            case "DIARY_PAGE":
                return <GrowthDiary/>;
            case  "FOLLOWED_PAGE":
                return <p>我的关注</p>
            case  "EXCELLENCE_DIARY":
                return <p>我的关注</p>
        }
    }

    render() {
        return <Layout>
            <Content style={{padding: '0 50px 50px'}}>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href="#">思沃学院</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="#">成长日志</a>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{padding: '24px 0', background: '#fff'}}>
                    <Sider width={200} style={{background: '#fff'}}>
                        <Menu mode="inline"
                              defaultSelectedKeys={['DIARY_PAGE']}
                              style={{height: '100%'}} onClick={this.changeView.bind(this)}>
                            <Menu.Item key="DIARY_PAGE">
                                <Icon type="user"/>
                                <span>成长日志</span>
                            </Menu.Item>
                            <Menu.Item key="FOLLOWED_PAGE">
                                <Icon type="user"/>
                                <span>我的关注</span>
                            </Menu.Item>
                            <Menu.Item key="EXCELLENCE_DIARY">
                                <Icon type="user"/>
                                <span>优秀日志</span>
                            </Menu.Item>

                        </Menu>
                    </Sider>
                    <Content style={{padding: '0 24px', minHeight: 280}}>
                        {this.displayMenu(this.props.menu)}
                    </Content>
                </Layout>
            </Content>
        </Layout>
    }
}

const mapStateToProps = (state) => {
    return {
        menu: state.layout.menu
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeMenu: (menu) => {
            dispatch({type: "CHANGE_MENU", menu});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SchoolTW);
