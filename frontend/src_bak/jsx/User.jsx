import React from "react";

/**
 * Created by volchenkov on 10.10.2021.
 */

class User extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(<div><div><img src={`./img/user${  i  }.jpg`} alt = ""/></div>
            <div className="user-card-table">
                <div className="user-card-row"><span>Имя</span><span>{this.props.data.name}</span></div>
                <div className="user-card-row"><span>Почта</span><span>{this.props.data.email}</span></div>
            </div>
            <div>
                учет времени

            </div>

        </div>);
    }
}

/*ReactDOM.render(
    <User/>,
    document.getElementById('content_bud_app')
);*/

export default User;