import "./Card.css";

function Card({ title, children, tags }) {
  return (
    <article className="card">
      {title && <h3 className="card__title">{title}</h3>}
      <div className="card__content">{children}</div>
      {tags && (
        <div className="card__tags">
          {tags.map((tag) => (
            <span key={tag} className="card__tag">
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

export default Card;
