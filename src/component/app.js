import React, { Fragment } from 'react';
import Header from './header/header';
import AddMemberModal from './modal/addMemberModal';
import MemberTable from '../containers/table/memberTable';

const App = () => {
    return(
        <Fragment>
            <Header />
            <MemberTable />
            <AddMemberModal />
        </Fragment>
    );
}

export default App;