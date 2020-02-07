import React,{Component} from 'react';
export default class App extends Component{
  state={
    isLoading:true,
    url:'',
    name:'',
    error:'',
    keyword:'v'
  }

  componentDidMount(){
    const url = `https://api.github.com/search/repositories?q=${this.state.keyword}&sort=stars`
    fetch(url).then(
      response=>{
        return response.json()
      }
    ).then(
      (response)=>{
        console.log('成功的数据:',response);
      }
    ).catch(
      (error)=>{
        console.log('失败的原因:',error);
      }
    )
  }

  render(){
		const {isLoading,name,url,error,keyword} = this.state
		if(isLoading){
			return <h2>Loading....</h2>
		}else if(error){
			return <h2>{error}</h2>
		}else{
		return <h2>github上以【{keyword}】字母开头的仓库中，点赞量最多的是【<a href={url}>{name}</a>】</h2>
		}
	}
}