import React from "react";
import { Card, CardHeader, CardMeta, CardTitle, CardDescription } from "../ui/Card.jsx";
import { CoverArticolo } from "../blog/CoverArticolo.jsx";

export function ArticleCard({ slug, titolo, data, minutiLettura, tag = [], descrizione, cover, onClick, href }) {
  return (
    <Card interactive href={href} onClick={onClick} style={{ height: "100%" }}>
      <CoverArticolo slug={slug} titolo={titolo} cover={cover} style={{ borderBottom: "2px solid var(--foreground)" }} />
      <CardHeader>
        <CardMeta>{data} · {minutiLettura} min · {tag.join(" · ")}</CardMeta>
        <CardTitle>{titolo}</CardTitle>
        <CardDescription>{descrizione}</CardDescription>
      </CardHeader>
    </Card>
  );
}
