import './CenteredCard.css'

function centeredCard({children}){
    return(
        <div className="centeredCard">
            <span>
                {children}
            </span>
        </div>
    )
}

export default centeredCard
