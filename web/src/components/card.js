import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card} from 'antd';

class CardTitle extends Component {
    render() {
        return <Card title="新的日志" extra={<a href="#">如何写一篇优秀的日志</a>}>
            {this.props.children}
        </Card>
    }
}

export default connect()(CardTitle);