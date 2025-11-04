import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selected, setSelected] = useState(null);

  function EpisodeList() {
    return (
      <section className="list">
        <h2>Episodes</h2>
        <ul>
          {episodeList.map((ep) => (
            <li
              key={ep.id}
              onClick={() => setSelected(ep)}
              className={selected?.id === ep.id ? "selected" : ""}
            >
              {ep.title}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  function EpisodeDetails() {
    if (!selected) {
      return (
        <section className="details">
          <h2>Episode</h2>
          <p>Select an episode to see details.</p>
        </section>
      );
    }
    return (
      <section className="details">
        <h2>Episode {selected.number}</h2>
        <h3>{selected.title}</h3>
        <p>{selected.description}</p>
        <button>Watch now</button>
      </section>
    );
  }

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main className="layout">
        <EpisodeList />
        <EpisodeDetails />
      </main>
    </>
  );
}
