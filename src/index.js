// import react and react-dome
import React from "react";
import ReactDOM from "react-dom";
import faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

// create a react component
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Vijitha"
                    comment="This is a very good post."
                    date="Today 11.30AM"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Hiranthi"
                    comment="This is a very usefull post for me. Thank you"
                    date="Today 10.00AM"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Kenuli"
                    comment="Awsome post !"
                    date="Yesterday 4.00PM"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Senaree"
                    comment="Nice to see this kind of a post in this era."
                    date="Yesterday 9.42AM"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

// show react component
ReactDOM.render(<App />, document.querySelector("#root"));
