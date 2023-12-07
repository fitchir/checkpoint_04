const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
const models = require("../models");

const getAllusers = (req, res) => {
  models.user
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const postUser = (req, res) => {
  const {
    firstname,
    lastname,
    email,
    hashedPassword,
    // coverPic,
    // profilePic,
    // city,
    // website,
  } = req.body;
  models.user
    .insert(
      firstname,
      lastname,
      email,
      hashedPassword
      //   coverPic,  //   profilePic,   //   city,
      //   website
    )
    .then(([result]) => {
      console.info(result);
      res.status(200).json({ message: "Utilisateur crée avec succès" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        Source: "controlleur",
        Erreur: "Erreur lors de l'enregistrement de l'utisaateur",
        Raison: err.errno,
      });
    });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  console.info("ID qui est dans les params", id);
  const { firstname, lastname, email, hashedPassword } = req.body;
  console.info("Firstname :", firstname);
  console.info("Lastname :", lastname);
  console.info("Email :", email);
  console.info("HashedPassword :", hashedPassword);

  models.user
    .update(firstname, lastname, email, hashedPassword, id)
    .then(([result]) => {
      console.info(result);
      res
        .status(200)
        .json({
          Message: "L'utilasateur a été modifier avec succèes",
        })
        .catch((err) => {
          console.info(err);
          res.status(500).json({
            Message: "Erreur lors de la modification ",
          });
        });
    });
};

const verifyPassword = (req, res) => {
  argon2
    .verify(req.user.hashedPassword, req.body.password)
    .then((isVerified) => {
      if (isVerified) {
        const payload = {
          sub: req.user.user_id,
          email: req.user.email,
          firstname: req.user.firstname,
          lastname: req.user.lastname,
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        res.cookie("authToken", token);

        res.status(200).send("Connexion réussie");
      } else {
        res.sendStatus(401);
      }
    });
};

module.exports = {
  getAllusers,
  postUser,
  updateUser,
  verifyPassword,
};
