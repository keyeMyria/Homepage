import React, {Component} from 'react';
import axios from 'axios'
import {Row, Col} from 'antd';
import utils from '../../utils'

export default class A extends Component{

	constructor(props){
        super(props)
	}
	
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

