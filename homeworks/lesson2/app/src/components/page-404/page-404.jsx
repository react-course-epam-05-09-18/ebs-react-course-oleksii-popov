import React, {Component} from 'react';

class Page404 extends Component {
    render() {
        return (
            <div>
                <h3>Page not found: <code>{this.props.location.pathname} {/*{location.pathname}*/}</code></h3>
            </div>
        );
    }
}

export { Page404};
