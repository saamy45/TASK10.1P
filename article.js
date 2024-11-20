import React from "react";
import './App.css';
import { Card, Image, Button } from "semantic-ui-react";
import A1 from "./images/A1.jpg"; 
import A2 from "./images/A2.png"; 
import A3 from "./images/A3.jpg"; 

const articles = [
  {
    id: 1,
    title: "React",
    description: "Comparison between two popular frameworks.",
    author: "Rohit",
    rating: 4.5,
    imageUrl: A1,
  },
  {
    id: 2,
    title: "NodeJS",
    description: "Using event loop in NodeJS.",
    author: "Kohli",
    rating: 5,
    imageUrl: A2,
  },
  {
    id: 3,
    title: "React Hooks",
    description: "Using hooks in React.",
    author: "Dhoni",
    rating: 4.7,
    imageUrl: A3,
  },
];

function Article() {
  return (
    <div className="articles">
      <h2>Articles</h2>
      <Card.Group>
        {articles.map((article) => (
          <ArticleCard key={article.id} data={article} />
        ))}
      </Card.Group>
      <Button secondary>See all articles</Button>
    </div>
  );
}

function ArticleCard({ data }) {
  return (
    <Card>
      <Image src={data.imageUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{data.title}</Card.Header>
        <Card.Meta>
          <span>{data.author}</span>
        </Card.Meta>
        <Card.Description>{data.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <span>⭐ {data.rating}</span>
      </Card.Content>
    </Card>
  );
}

export default Article;
