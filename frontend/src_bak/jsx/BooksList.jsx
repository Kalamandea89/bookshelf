/**
 * Created by volchenkov on 14.04.2023.
 */

const Panel = ReactBootstrap.Panel,
    ButtonToolbar = ReactBootstrap.ButtonToolbar,
    Button = ReactBootstrap.Button,
    FormGroup = ReactBootstrap.FormGroup,
    OverlayTrigger = ReactBootstrap.OverlayTrigger,
    Tooltip = ReactBootstrap.Tooltip,
    Image = ReactBootstrap.Image,
    PanelGroup= ReactBootstrap.PanelGroup
;

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showDetail: false, data: null}
    }
    render(){
        return(
            <Panel key={this.props.keyNumber} eventKey={this.props.eventKey} className={"panel-item " + className}>
                <FormGroup className="item-row item-caption">
                    <Check checked={false} readOnly className="checkcls-primary"/>
                    <div>
                        <b>{this.state.data.documentTypeName}</b>
                    </div>
                </FormGroup>
                <FormGroup className="item-row">
                    № <b>{this.state.data.docNumber}</b>
                    &nbsp;от <b>TestBook</b>
                </FormGroup>
            </Panel>
            )
    }
}

export default class BooksList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dataList:[], isLoading: false};
    }
    renderListItem(data, i){
        return (
            <ListItem data={data}
                      showDetail={this.showDetail}
                      showAttachedFiles={this.showAttachedFiles}
                      showStateJumpHistory={this.showStateJumpHistory}
                      key={i}
                      keyNumber={i}
                      eventKey={i}
                      className="interface-panel item"/>

        );
    }
    render() {
        if (!this.props.visible)
            return (<div/>);
        else{
            return (
                <Panel className="interface-panel body">
                    <PanelGroup
                        stacked>
                        {this.state.dataList.map(this.renderListItem)}
                    </PanelGroup>
                    <ModalForms ref="modalForms"
                                data={this.state.dataList[curItemID]}/>
                </Panel>
            );
        }
    }
}