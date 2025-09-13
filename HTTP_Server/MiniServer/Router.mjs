import home from "./Handlers/home.mjs";
import users from "./Handlers/users.mjs";
import notFound from "./Handlers/notFound.mjs";

const router = (req, res) => {
  const { url, method } = req;

  if (url === "/" && method === "GET") {
    home(req, res);
  } else if (url.startsWith("/users")) {
    users(req, res);
  } else {
    notFound(req, res);
  }
};

export default router;
