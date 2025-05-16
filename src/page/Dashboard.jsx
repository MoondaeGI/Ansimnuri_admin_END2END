


export const Dashboard = () => {
    return (
        <div className="container" style={{border:'1px solid black', height:'100%',width:'100%',padding:'0px'}}>
        <div className="chart-box" style={{border:'1px solid red', height:'40%',width:'100%', display:'flex'}}>
            <div className="chart-content1" style={{border:'1px solid yellow', height:'100%',width:'100%'}}>
                차트1
            </div>
            <div className="chart-content2" style={{border:'1px solid yellow', height:'100%',width:'100%'}}>
                차트2
            </div>
            <div className="chart-content3" style={{border:'1px solid yellow', height:'100%',width:'100%'}}>
                차트3
            </div>
        </div>
        </div>
    )
}