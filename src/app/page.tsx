export default async function Home() {
  const res = await fetch(
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson",
    { cache: "no-store" }
  );

  const data = await res.json();

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Live Earthquakes (Last Hour)</h1>

      <ul>
        {data.features.map((q: any) => (
          <li key={q.id}>
            <strong>M {q.properties.mag}</strong> —{" "}
            {q.properties.place}
          </li>
        ))}
      </ul>
    </main>
  );
}
