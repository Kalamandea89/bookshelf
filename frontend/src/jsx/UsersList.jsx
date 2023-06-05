/**
 * Created by volchenkov on 27.02.2022.
 */
import React from "react";
import getRandom from './utils.js';

class User extends React.Component {
    constructor(props){
        super(props);
        this.state={selected: false, data: this.props.data};
    }
    render(){
        let i = getRandom(1, 5);
        return(
            <div className="user-card">
                <i className={"glyphicon glyphicon-"}></i>
                <img
                    src={`./img/user${  i  }.jpg`}  //user.png"
                    className="user-avatar-list rounded mb-4 mb-lg-0"
                    alt=""
                />
                <div>
                    <div className="user-card-row"><span>Имя</span><span>{this.props.data.name}</span></div>
                    <div className="user-card-row"><span>Почта</span><span>{this.props.data.email}</span></div>
                </div>
            </div>
        )
    }
}

class UsersList extends React.Component {
    constructor(props) {
        super(props);
        /*let response = fetch("rest/users")
        let commits = await response.json()*/
        this.state = {dataList: []};
    }
    componentDidMount(){
        let self = this;
        fetch('rest/users')
            .then(response => response.json())
            .then(commits => self.setState({dataList: commits}));
    }
    renderListItem(data, i){
        return(<User data={data} key={i} level={0}/>)
    }
    render(){
        return (
            <div className="user-list">
                <div className="container">
                    <div className="row align-items-center my-5">
                        <div className="col-lg-7">
                            <img
                                className="img-fluid rounded mb-4 mb-lg-0"
                                src=""
                                alt=""
                            />
                        </div>
                        <div className="col-lg-5">
                            <h1 className="font-weight-light">About</h1>
                        </div>
                    </div>
                    {this.state.dataList.map(this.renderListItem)}
                </div>
            </div>
        )
    }

}

export default UsersList;
