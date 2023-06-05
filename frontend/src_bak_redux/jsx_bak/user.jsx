/**
 * Created by volchenkov on 10.10.2021.
 */

class User extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(<div>This is User_card page</div>);
    }
}

ReactDOM.render(
    <User/>,
    document.getElementById('content_bud_app')
);