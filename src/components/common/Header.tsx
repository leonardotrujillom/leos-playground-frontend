import * as React from "react";
import { connect } from "react-redux";
import FontAwesome from "react-fontawesome";
import { User } from "../../models/User";
import variables from "../../css/app.variables.scss";

interface Props {
    user: User;
    title: { name: string; style: any };
    buttons: { name: { text: string, style: any }, handler: any, class: string, style: object, 
    fe_awesomeClass: string }[];
}

interface State {
    
}

class Header extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const buttons = this.props.buttons.map((button, index) =>
            <button style={button.style} className={button.class} onClick={button.handler} key={index}>
                <FontAwesome className='super-crazy-colors' name={button.fe_awesomeClass} size='lg'/>
                <span style={button.name.style} className="button-text">{button.name.text}</span>
            </button>
        );
        return(
            <div style={{color: variables.text_white, backgroundColor: variables.header_violet}} 
            className={"container-fluid"}>
                <div className={"row"}>
                    <div id={"headerLeftSection"} 
                    className={"col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12"}>
                        <div style={{float: "left", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>
                            <span>Leo's Playground</span>
                        </div>
                    </div>
    
                    <div id={"headerMidSection"} className={"col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12"}>
                        <span style={this.props.title.style}>{this.props.title.name}</span>
                    </div>

                    <div className={"col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12"}>
                        <div id={"headerButtons"}>
                            {buttons}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        user: state.auth.user,
        title: ownProps.title,
        buttons: ownProps. buttons
    }
};

const mapDispatchtoProps = () => {
    return {}
};

export default connect(mapStateToProps, mapDispatchtoProps)(Header)
