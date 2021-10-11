import { PhotoPage, TestPage } from "../Pages";
const routes = [
  {
    path: "/",
    name: "Home",
    component: PhotoPage
  },
  {
    path: "/test",
    name: "Test",
    component: TestPage
  }
];

export default routes;