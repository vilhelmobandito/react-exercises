import { useState } from "react";

function ParticipantManager() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    participants: "",
  });

  const [participantsList, setParticipantsList] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Validation - Leere Felder vermeiden
    if (!formData.name.trim() || !formData.email.trim()) {
      alert("Name und E-Mail dürfen nicht leer sein.");
      return;
    }

    // Neues Objekt erzeugen
    const newParticipant = {
      id: Date.now(),
      name: formData.name.trim(),
      email: formData.email.trim(),
      participants: Number(formData.participants) || 0,
    };

    // An Array anhängen
    setParticipantsList((prev) => [...prev, newParticipant]);

    // Formular zurücksetzen
    setFormData({
      name: "",
      email: "",
      participants: "",
    });
  }

  return (
    <div>
      <h2>Participant Manager</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            E-Mail:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Teilnehmer:
            <input
              type="number"
              name="participants"
              value={formData.participants}
              onChange={handleChange}
            />
          </label>
        </div>

        <button type="submit">Hinzufügen</button>
      </form>

      <h3>Teilnehmerliste</h3>
      {participantsList.length === 0 ? (
        <p>Noch keine Teilnehmer.</p>
      ) : (
        <ul>
          {participantsList.map((p) => (
            <li key={p.id}>
              <strong>{p.name}</strong> – {p.email} – {p.participants}{" "}
              Teilnehmer
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ParticipantManager;
