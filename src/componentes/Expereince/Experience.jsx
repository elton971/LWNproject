import "./expereince.css";
export const ExperienceBar = () => {
    return ( 
        <header className="experience__bar">
            <span> 0 Xp</span>
            <div>
                <div className="experience__bar__progress" style={{width:"50%"}}/>
                <span className="current-xp" style={{left:"50%"}}>300 xp</span>
            </div>
            <span> 600 Xp</span>
        </header>
     );
}
