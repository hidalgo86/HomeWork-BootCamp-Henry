module.exports = (sequelize, DataTypes) => {
  sequelize.define("Role", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
    },
  });
};


// module.exports = (sequelize, DataTypes, Model) => {
//   class Role extends Model {};

//   Role.init(
//     {
//       name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//       },
//       description: {
//         type: DataTypes.STRING,
//       },
//     },
//     { 
//       sequelize,
//       modelName: 'Role',
//     }
//   );
// };



