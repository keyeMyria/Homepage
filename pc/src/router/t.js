import React, {Component} from 'react';
import axios from 'axios'
import {Row, Col} from 'antd';
import utils from '../../utlis'

export default class A extends Component{
	render(){
		return(
			<Row>
				<Col span={2}/>
				<Col span={20}>

				</Col>
				<Col span={2}/>
			</Row>
		)
	}
}
