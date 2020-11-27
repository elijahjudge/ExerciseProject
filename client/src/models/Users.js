import { skeletonSchedule, exampleRoutine } from "./routine.js";

export const users = [
  {
    id: 1,
    email: "mymail@gmail.com",
    name: "Elijah Judge",
    handle: "ejwebprogramming",
    password: "pass123",
    admin: true,
    loggedIn: false,
    friends: [],
    routine: exampleRoutine
  },
  {
    id: 2,
    email: "bababooey@yahoo.com",
    name: "bobby",
    handle: "bobert",
    password: "worm43",
    admin: false,
    loggedIn: false,
    friends: [],
    routine: skeletonSchedule
  }
  
  
];