import React, {Component} from 'react';
import '../less/layout.css';
import {connect} from 'react-redux';
import {Breadcrumb, Layout, Menu, Icon} from 'antd';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

const {Content, Sider} = Layout;

class SchoolTW extends Component {
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
                        <MenuList/>
                    </Sider>
                    <Content style={{padding: '0 24px', minHeight: 280}}>
                        {this.props.children}
                    </Content>
                </Layout>
            </Content>
        </Layout>
    }
}

class MenuList extends Component {
    render() {
        return <Menu mode="inline"
                     defaultSelectedKeys={['DIARY_PAGE']}
                     style={{height: '100%'}}>
            <Menu.Item key="DIARY_PAGE">
                <Link to="/diary">
                    <Icon type="user"/>
                    <span>成长日志</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="FOLLOWED_PAGE">
                <Link to='/followed'><Icon type="user"/>
                    <span>我的关注</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="EXCELLENCE_DIARY">
                <Link to="/app">
                    <Icon type="user"/>
                    <span>优秀日志</span>
                </Link>
            </Menu.Item>

        </Menu>
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SchoolTW));

