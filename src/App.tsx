import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MainPartFirst from './components/main-part-first/MainPartFirst';
import MainPartSecond from './components/main-part-second/MainPartSecond';
import PartDescription from './components/main-part-second/part-description/PartDescription';
import TeamMembers from './components/team-members/TeamMembers';
// import Qualities from './components/main-part-second/qualities/Qualities';


function App() {
    return (
        <div className="App">
            <Header/>
            <MainPartFirst/>
            <MainPartSecond/>
            <PartDescription/>
            <TeamMembers/>
            <Footer/>
        </div>
    );
}

export default App;
