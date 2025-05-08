import express from "express";
import session from "express-session";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "1234") {
    req.session.user = username;
    return res.redirect("/dashboard.html");
  }
  res.send("Credenciales incorrectas. <a href='/login.html'>Intentar de nuevo</a>");
});

function authRequired(req, res, next) {
  if (req.session.user) return next();
  res.redirect("/login.html");
}

app.use(express.static(path.join(__dirname, "public")));
app.get("/dashboard.html", authRequired, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "dashboard.html"));
});
app.use("/protected", authRequired, express.static(path.join(__dirname, "protected")));

app.get("/logout", (req, res) => {
  req.session.destroy(() => res.redirect("/login.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor en http://localhost:" + PORT));
