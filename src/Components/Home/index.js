import './index.scss'

const Home = () => {
    return(
        <>
        <main>
            <div className='home-hero'>
                <h1>Orion</h1>
                <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
            </div>
            <div className='overview'>
                <div className='overview-top'>
                    <div className='user-activity'>
                        <h4>Active User</h4>
                        <div className='user-block'>
                            <div className='profile'>
                                <span className='profile-pic'></span>
                                <div className='profile-details'>
                                    <p>Jacob Bosco</p>
                                    <span>Member</span>
                                </div>
                            </div>
                            <div className='score'>
                                <h3>1242</h3>
                                <h3>Points</h3>
                            </div>
                        </div>
                        <div className='user-block'>
                            <div className='profile'>
                                <span className='profile-pic'></span>
                                <div className='profile-details'>
                                    <p>Alan Mike</p>
                                    <span>Member</span>
                                </div>
                            </div>
                            <div className='score'>
                                <h4>1097</h4>
                                <h4>Points</h4>
                            </div>
                        </div>
                    </div>
                    <div className='meeting-details'>
                        <p>Upcoming Meeting</p>
                        <h2>12</h2>
                        <p className='meeting-date'>Aug 2023</p>
                    </div>
                </div>
                <div className='overview-bottom'></div>
            </div>
        </main>
        </>
    );
}

export default Home