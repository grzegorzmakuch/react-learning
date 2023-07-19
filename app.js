function Clock({minutes = 20, seconds = 45}) {
    return (<h2 className='clock'>Pozostało {minutes}:{seconds}</h2>)
}

function ProgressBar({percent = 50}) {
    return (
        <div className="progressBar">
            <div style={{width: `${percent}%`}}></div>
        </div>
    )
}

class TimeBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRunning: true,
            isPaused: false,
            pausesCount: 0
        }
    }
    render() {
        const { isRunning, isPaused, pausesCount} = this.state;
        return (
            <div className="timeBox">
                <Clock />
                <ProgressBar/>
                <button disabled={isRunning}>Start</button>
                <button disabled={!isRunning}>Stop</button>
                <button disabled={!isRunning}>{isPaused?"Wznów":"Pauza"}</button>
                Liczba przerw: {pausesCount}
            </div>
        )
    }
}

function TimeboxEditor() {
    return (
        <div className="timeBoxEditor inactive">
            <label>Co robisz?<input disabled value="Nauka" type="text"/></label><br/>
            <label>Ile minut?<input disabled value="25" type="number"/></label><br/>
            <button disabled>Zacznij</button>
        </div>
    )
}

function App() {
    return (
        <div className="app">
            <TimeBox/><TimeboxEditor/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))