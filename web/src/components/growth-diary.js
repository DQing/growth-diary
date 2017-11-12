import React, {Component} from 'react';
import {connect} from 'react-redux';

class GrowthDiary extends Component {
    render() {
        return <div>
            成长日志
        </div>
    }
}

export default connect()(GrowthDiary);