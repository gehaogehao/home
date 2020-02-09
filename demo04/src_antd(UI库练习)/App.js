import React, { Component } from 'react'
import {Button,message,Popover,Input,Switch,Slider,Icon,Calendar} from 'antd'

export default class App extends Component {
  state = {
    value: 0,
  };
  handleChange = value => {
    this.setState({ value });
  };

   onPanelChange=(value, mode) => {
    console.log(value, mode);
  }
  

  show=()=>{
    message.success('操作成功',1.5)
  }

  render() {
    const { Search } = Input;
    const content = (
      <div>
        <p>这是一个神话</p>
        <p>这是一个笑话</p>
      </div>
    );

    const { max, min } = this.props;
    const { value } = this.state;
    const mid = ((max - min) / 2).toFixed(5);
    const preColor = value >= mid ? '' : 'rgba(0, 0, 0, .45)';
    const nextColor = value >= mid ? 'rgba(0, 0, 0, .45)' : '';


    return (
      <div>
        <h1>App</h1>
        <Button type="primary" onClick={this.show}>这是一个按钮</Button>
        <Popover content={content} title="Title">
          <Button type="danger">Danger</Button>
        </Popover>
        <Search
          placeholder="快来输入呀!"
          enterButton="搜索"
          size="small" 
          onSearch={value => console.log(value)}
          style={{width:'500px'}}
        />
        <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
        <br/>
        <div className="icon-wrapper">
          <Icon style={{ color: preColor }} type="frown-o" />
          <Slider {...this.props} onChange={this.handleChange} value={value} style={{width:'800px'}}/>
          <Icon style={{ color: nextColor }} type="smile-o" />
        </div>
        <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
          <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
        </div>
      </div>
    )
  }
}
