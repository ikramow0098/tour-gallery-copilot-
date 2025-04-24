function TourCard({ id, name, info, image, price, onRemove }) {
  return (
    <article className="card">
      <img src={image} alt={name} />
      <footer>
        <div className="card-header">
          <h3>{name}</h3>
          <h4>${price}</h4>
        </div>
        <p>{info}</p>
        <button onClick={() => onRemove(id)}>Not Interested</button>
      </footer>
    </article>
  );
}

export default TourCard;
