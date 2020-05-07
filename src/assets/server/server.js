const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

var currentUser;

var corsOptions = {
  optionsSuccessStatus: 200,
  origin: "/",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log("Server Started!");
});

app.route("/api/courses").get((request, response) => {
  response.send(COURSES);
});

app.route("/api/courses").post((request, response) => {
  let course = request.body;

  const firstId = COURSES ? Math.max.apply(null, COURSES.map(courseIterator => courseIterator.id)) + 1 : 1;
  course.id = firstId;
  COURSES.push(course);

  response.status(201).send(course);
});

app.route("/api/courses/:id").put((request, response) => {
  const courseId = +request.params["id"];
  const course = request.body;

  const index = COURSES.findIndex(courseIterator => courseIterator.id === courseId);
  COURSES[index] = course;

  response.status(200).send(course);
});

app.route("/api/courses/:id").get((request, response) => {
  const courseId = +request.params["id"];

  response.status(200).send(COURSES.find(courseIterator => courseIterator.id === courseId));
});

app.route("/api/courses/:id").delete((request, response) => {
  const courseId = +request.params["id"];
  COURSES = COURSES.filter(courseIterator => courseIterator.id !== courseId);

  response.status(204).send({});
});

var COURSES = [
  {
    id: "5eb2eb40-1200-4c8d-9531-683f7b52e134",
    name: "Job",
    description: "Psophia viridis",
    duration: "8:45",
    price: 9.79,
    code: "b7431eaa-fda8-4cce-b09b-bcd3183d3eee",
    rating: 3,
    releaseDate: "10/14/2019",
    imageUrl: "/assets/img/cli.png",
  },
  {
    id: "7ea77f73-4854-4774-a175-d63290d641f2",
    name: "Fix San",
    description: "Martes americana",
    duration: "11:41",
    price: 0.74,
    code: "dedc62e5-232a-4b8a-973f-617d401feed8",
    rating: 4,
    releaseDate: "10/29/2019",
    imageUrl: "/assets/img/animations.png",
  },
  {
    id: "3f16faa5-215c-4cf2-b746-91197a331300",
    name: "Flexidy",
    description: "Lutra canadensis",
    duration: "13:21",
    price: 9.73,
    code: "2ebb6c0a-0968-4bee-863f-e7acd7ee0f89",
    rating: 3.2,
    releaseDate: "05/05/2019",
    imageUrl: "/assets/img/cli.png",
  },
  {
    id: "fbcb9802-6fa3-4a1e-b591-615dffaa2203",
    name: "Cardify",
    description: "unavailable",
    duration: "5:58",
    price: 2.6,
    code: "bcc9c524-7cd0-44a4-8e4d-ae7ac2685cd6",
    rating: 1.7,
    releaseDate: "05/04/2019",
    imageUrl: "/assets/img/http.png",
  },
  {
    id: "9bcd71ee-16e9-411c-83de-ef84027bf9c4",
    name: "Cookley",
    description: "Milvago chimachima",
    duration: "23:38",
    price: 2.0,
    code: "e99bc6eb-575f-42a5-a3ef-4d9abd881384",
    rating: 1,
    releaseDate: "06/02/2019",
    imageUrl: "/assets/img/forms.png",
  },
  {
    id: "c14901b1-0438-4417-a9e0-7d8ebf1673a7",
    name: "Cookley",
    description: "Pteropus rufus",
    duration: "12:50",
    price: 6.67,
    code: "6d675f6d-d710-4fdb-be1e-4f2752c799d1",
    rating: 1.9,
    releaseDate: "10/18/2019",
    imageUrl: "/assets/img/router.png",
  },
  {
    id: "505286d6-6716-4fa5-b263-bfb017f54ca2",
    name: "It",
    description: "Sciurus vulgaris",
    duration: "21:42",
    price: 5.22,
    code: "850ed03b-f786-40fb-9cce-5e1c27db361c",
    rating: 4,
    releaseDate: "04/23/2020",
    imageUrl: "/assets/img/forms.png",
  },
  {
    id: "24be5e9e-7538-44e9-9d4b-f7c6808229d2",
    name: "Quo Lux",
    description: "Dusicyon thous",
    duration: "1:00",
    price: 8.1,
    code: "1c461b06-acf3-46b7-93fb-cbf7fb70ad0d",
    rating: 5,
    releaseDate: "05/04/2019",
    imageUrl: "/assets/img/http.png",
  },
  {
    id: "4d562fd2-4ecd-4215-bffd-8d4b4bbc27a2",
    name: "Tin",
    description: "Casmerodius albus",
    duration: "23:10",
    price: 5.92,
    code: "742f1010-c87e-42dd-85e1-ad54492dc7bb",
    rating: 2.1,
    releaseDate: "04/29/2020",
    imageUrl: "/assets/img/animations.png",
  },
  {
    id: "895a4ff4-8c72-426c-b761-0fca564ad9c1",
    name: "Treeflex",
    description: "Uraeginthus angolensis",
    duration: "6:03",
    price: 6.84,
    code: "f8d427b5-1497-4113-9054-d3487fc40d7a",
    rating: 4.3,
    releaseDate: "10/21/2019",
    imageUrl: "/assets/img/cli.png",
  },
];
