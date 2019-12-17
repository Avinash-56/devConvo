const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json({ extended: false }));
const PORT = process.env.PORT || 5000;

const db = require("./config/keys").mongoURI;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
