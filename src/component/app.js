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

    modalToggle(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render(){
        return(
            <Fragment>
                {/* header */}
                <Header onClick={this.modalToggle} />
                {/* member table */}
                <MemberTable />
                {/* add member modal */}
                <AddMemberModal 
                    modalOpen={this.state.isModalOpen} 
                    onClick={this.modalToggle} 
                />
            </Fragment>
        );
    }
}

export default App;