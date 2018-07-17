import React from 'react';
import {
    Link,
    Route
} from 'react-router-dom';


function Topic(props) {
    return <h3>{props.match.params.topicId}</h3>

}

export default function Topics({ match }) {
    return (
        <div>
            <h2>TOPICS</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/rendering`} > Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${match.url}/rendering2`} > Rendering 2 with React</Link>
                </li>
                <li>
                    <Link to={`${match.url}/rendering3`} > Rendering 3 with React</Link>
                </li>
            </ul>

            <hr />

            <Route path={`${match.path}/:topicId`} component={Topic} />
            <Route exact path={match.path} render={() => {
                return <p>Please select a topic</p>
            }} />

        </div>
    )
}