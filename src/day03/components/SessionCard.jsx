function SessionCard({
  title,
  speaker,
  room,
  time,
  track,
  level,
  online,
  seats,
  highlight,
}) {
  const SeatsClass =
    seats === 0 ? "no-seats" : seats > 2 ? "in-seats" : "low-seats";

  const onlineClass = online ? "online" : "";

  return (
    <article className={`session-card ${SeatsClass} ${onlineClass}`}>
      <h3>{title}</h3>
      <p>Referent: {speaker}</p>
      <p>Uhrzeit: {time} Uhr</p>
      <p>
        Raum: {room}
        {online ? " und Online" : ""}
      </p>
      <p>Thema: {track}</p>
      <p>Niveau: {level}</p>
      <p>Freie Plätze: {seats}</p>
      <p>
        {seats === 0
          ? "Ausgebucht"
          : seats <= 3
            ? "Nur noch wenige verfügbar"
            : null}
      </p>

      {highlight && <p className="session-card-highlight">Empfehlung</p>}
    </article>
  );
}

export default SessionCard;
