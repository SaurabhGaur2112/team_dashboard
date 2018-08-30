import React, { Component, Fragment } from 'react';
import Header from './header/header';
import AddMemberModal from './modal/addMemberModal';
import MemberTable from '../containers/table/memberTable';

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            isModalOpen: false
        }
        this.modalToggle = this.modalToggle.bind(this);
    }

    modalToggle(value){
        this.setState({
            isModalOpen: value
        });
    }



    render(){
        return(
            <Fragment>
                <Header onClick={() => this.modalToggle(true)} />
                <MemberTable />
                <AddMemberModal modalOpen={this.state.isModalOpen} onClick={() => this.modalToggle(false)} />
            </Fragment>
        );
    }
}

export default App;