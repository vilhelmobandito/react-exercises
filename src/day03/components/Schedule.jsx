import sessions from "../data/sessions";
import SessionCard from "./SessionCard";

function Schedule() {
  return (
    <section className="schedule">
      <h2>Schedule</h2>
      {sessions.map((session) => (
        <SessionCard
          key={session.id}
          title={session.title}
          speaker={session.speaker}
          room={session.room}
          time={session.time}
          track={session.track}
          level={session.level}
          online={session.online}
          seats={session.seats}
          highlight={session.highlight}
        />
      ))}
    </section>
  );
}

export default Schedule;
