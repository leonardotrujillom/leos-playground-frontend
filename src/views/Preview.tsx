import * as React from "react";
import {connect} from 'react-redux';

interface Props {
}

interface State {

}

class Preview extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {}
    }

    render(): React.ReactNode {
        return(
            <div>
                <h1>Welcome to Leo's Playground</h1>
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
