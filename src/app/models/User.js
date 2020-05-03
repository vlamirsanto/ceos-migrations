const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(80),
        allowNull: false,
        validate: {
          len: {
            args: [5, 80],
            msg: "O campo nome precisa ter entre 5 e 80 caracteres.",
          },
          notEmpty: {
            msg: "O campo nome precisa ser preenchido.",
          },
        },
      },
      lastname: {
        type: DataTypes.STRING(80),
        allowNull: false,
        validate: {
          len: {
            args: [5, 80],
            msg: "O campo nome precisa ter entre 5 e 80 caracteres.",
          },
          notEmpty: {
            msg: "O campo nome precisa ser preenchido.",
          },
        },
      },
      email: {
        type: DataTypes.STRING(120),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "Digite um e-mail válido.",
          },
        },
      },
      password: {
        type: DataTypes.STRING(120),
        allowNull: false,
        validate: {
          len: [5, 120],
        },
      },
      whatsapp: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING(60),
      },
      city: {
        type: DataTypes.STRING(80),
      },
      profile_image: {
        type: DataTypes.STRING(120),
      },
    },
    {
      hooks: {
        beforeSave: async (user) => {
          if (user.password) {
            user.password = await bcrypt.hash(user.password, 8);
          }
        },
      },
    }
  );

  return User;
};
