const argon2 = require("argon2");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const models = require("../models");

const checkIfGoodUser = (req, res, next) => {
  const { email, password } = req.query;

  if (email === "admin@gmail.com" && password === "secret") {
    next();
  } else {
    res
      .status(403)
      .send(`Désolé ! Vous n'êtes pas autorisé à accéder à cette route...`);
  }
};

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (req, res, next) => {
  argon2
    .hash(req.body.password, hashingOptions)
    .then((hashedPassword) => {
      console.info("Mot de passe de body :", req.body.password);
      console.info("Résulat du hashedPassword : ", hashedPassword);
      req.body.hashedPassword = hashedPassword;
      console.info(
        "Résultat de mon req.body.hashedPassword :",
        req.body.hashedPassword
      );
      delete req.body.password;
      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const userSchema = Joi.object({
  firstname: Joi.string().alphanum().min(3).max(50),
  lastname: Joi.string().alphanum().min(3).max(50),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);

  if (error) {
    res.status(400).json({ error: error.details[0].message });
  } else {
    next();
  }
};

const checkEmailIfExist = (req, res, next) => {
  const { email } = req.body;

  models.user.searchByEmail(email).then(([user]) => {
    if (user.length !== 0) {
      // eslint-disable-next-line prefer-destructuring
      req.user = user[0];
      console.info("req.user :", req.user);
      next();
    } else {
      res.sendStatus(401);
    }
  });
};

const checkIfIsAllowed = (req, res, next) => {
  try {
    const { authToken } = req.cookies;
    console.info("token de checkIfIsAllowed", authToken);

    if (!authToken) {
      return res.sendStatus(404);
    }

    const payload = jwt.verify(authToken, process.env.JWT_SECRET);
    req.user = payload;
    console.info(payload);

    return next();
  } catch {
    return res.sendStatus(401);
  }
};

module.exports = {
  checkIfGoodUser,
  hashPassword,
  validateUser,
  checkEmailIfExist,
  checkIfIsAllowed,
};
