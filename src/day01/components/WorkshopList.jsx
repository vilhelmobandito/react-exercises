import WorkshopCard from "./WorkshopCard";

export default function WorkshopList() {
  return (
    <section>
      <h2>Workshops</h2>

      <WorkshopCard
        title="HTML"
        trainer="Max Mustermann"
        duration="16"
        level="Grundlagen"
        online={true}
      />

      <WorkshopCard
        title="Python"
        trainer="Johanna Musterfrau"
        duration="5"
        level="Grundlagen"
        online={false}
      />

      <WorkshopCard
        title="C#"
        trainer="Hans Müller"
        duration="10"
        level="Grundlagen"
        online={true}
      />
    </section>
  );
}
