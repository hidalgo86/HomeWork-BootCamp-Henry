const { Router } = require("express");
const { Op, Character, Role } = require("../db");
const router = Router();

router.post("/", async (req, res) => {
  const { code, name, hp, mana, age, date_added, race } = req.body;

  if (!code || !name || !hp || !mana)
    return res.status(404).send("Falta enviar datos obligatorios");
  try {
    const character = await Character.create(req.body);
    res.status(201).json(character);
  } catch (error) {
    console.log(error);
    res.status(404).send("Error en alguno de los datos provistos");
  }
});

// router.get("/", async (req, res) => {
//   const { name, hp, race, age } = req.query;
//   try {
//     const where = {};

//     if (race) {
//       where.race = race;
//     }

//     if (age) {
//       where.age = Number(age);
//     }

//     let characters = await Character.findAll({
//       where,
//     });

//     res.status(200).json(
//       characters.map((character) => {
//         if (name === "true" && hp === "true") {
//           const { name, hp } = character.toJSON();
//           return {
//             name,
//             hp,
//           };
//         }
//         return character.toJSON();
//       })
//     );
//   } catch {}
// });

router.get("/", async (req, res) => {
  const { race, name, hp } = req.query;
  
  try {
    if (!race && !name && !hp) {
      const characters = await Character.findAll({});
      res.status(200).json(characters);
    } else if (race) {
      const characters = await Character.findAll({
        where: {
          race,
        },
      });
      res.status(200).json(characters);
    } else if (name === "true" && hp === "true") {
      const characters = await Character.findAll({});
      res.status(200).json(
        characters.map((character) => {
          const { name, hp } = character;
          return {
            name,
            hp,
          };
        })
      );
    }
  } catch {}
});

router.get("/:code", async (req, res) => {
  const { code } = req.params;
  const character = await Character.findByPk(code);
  if (!character)
    return res
      .status(404)
      .send(`El código ${code} no corresponde a un personaje existente`);
  res.json(character);
});

module.exports = router;
