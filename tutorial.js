import React from "react";
import './App.css';
import { Card, Image, Button } from "semantic-ui-react";
import T1 from "./images/T1.jpg"; 
import T2 from "./images/T2.jpg"; 
import T3 from "./images/T3.jpg"; 

const tutorials = [
  {
    id: 1,
    title: "React Router",
    description: "Introduction to React Router.",
    username: "devMaster",
    rating: 4.8,
    imageUrl: T1,
  },
  {
    id: 2,
    title: "Express.js",
    description: "How to build APIs using Express.",
    username: "apiGuru",
    rating: 4.9,
    imageUrl: T2,
  },
  {
    id: 3,
    title: "Next.js",
    description: "Building server-rendered React apps.",
    username: "nextjsNinja",
    rating: 4.7,
    imageUrl: T3,
  },
];

function Tutorial() {
  return (
    <div className="tutorials">
      <h2>Tutorials</h2>
      <Card.Group>
        {tutorials.map((tutorial) => (
          <TutorialCard key={tutorial.id} data={tutorial} />
        ))}
      </Card.Group>
      <Button secondary>See all tutorials</Button>
    </div>
  );
}

function TutorialCard({ data }) {
  return (
    <Card>
      <Image src={data.imageUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{data.title}</Card.Header>
        <Card.Meta>
          <span>{data.username}</span>
        </Card.Meta>
        <Card.Description>{data.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <span>⭐ {data.rating}</span>
      </Card.Content>
    </Card>
  );
}

export default Tutorial;


