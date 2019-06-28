import * as React from "react";
import {connect} from 'react-redux';

import Header from "../components/common/Header";
import variables from "../css/app.variables.scss";
import history from "../config/history";

interface Props {
}

interface State {

}

class Preview extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {}
    }

    toLoginHandler = () => {
        history.push("/login");
    }

    render(): React.ReactNode {
        return(
            <div>
                <Header buttons={[{
                    name: {text: "Sign In", style: {fontSize: 15}},
                    handler: this.toLoginHandler.bind(this),
                    class: "btn btn-light",
                    style: {
                        borderRadius: 15,
                        marginRight: 5,
                        marginTop: 12,
                        height: 40,
                        border: `1px solid ${variables.border_gray}`
                    },
                    fe_awesomeClass: "sign-in"
                }]}
                title={{name: "Preview", style: {fontSize: 25}}}
                />
                <div className={"container-fluid"} style={{textAlign: "center"}}>
                    <span style={{fontSize: 25}}>Welcome to Leo's Playground, please sign in.</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = () => {
    return {}
};

const mapDispatchToProps = () => {
    return {}
};
export default connect(mapStateToProps, mapDispatchToProps)(Preview)
