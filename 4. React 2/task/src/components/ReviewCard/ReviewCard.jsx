import './ReviewCard.css'

export default function ReviewCard(props){
    return (
    <div className="card review">
        <div>
            <h3>{props.review.name}</h3>
            <p>{props.review.rating}</p>
        </div>
        <p>{props.review.content}</p>
    </div>)
}