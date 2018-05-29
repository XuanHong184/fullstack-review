import React from 'react';

const Repo = (props) => {
    return (
        <div>
            <a href={props.url} target="_blank">
                <div className="repoDiv">
                    <div className="forksCount">
                        <div>
                            Forks
                        </div>
                        <div>
                            {props.forks}
                        </div>
                    </div>
                    <div className="nameAndRepo">
                        <div>
                            {props.owner}
                        </div>
                        <div>
                            {props.repoName}
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
};

export default Repo;
