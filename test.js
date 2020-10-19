const { Sequelize, Model, DataTypes } = require("sequelize");

// https://sequelize.org/master/manual/getting-started.html

const func = () => {
  const { Sequelize, Model, DataTypes } = require("sequelize");
  const sequelize = new Sequelize("sqlite::memory:");

  const User = sequelize.define("user", {
    username: DataTypes.TEXT,
    isAdmin: DataTypes.BOOLEAN,
    name: DataTypes.TEXT,
    favoriteColor: {
      type: DataTypes.TEXT,
      defaultValue: 'green'
    },
    age: DataTypes.INTEGER,
    cash: DataTypes.INTEGER
  });

  (async () => {
    await sequelize.sync({ force: true });
    // Code here

    // Create a new user
    const jane = await User.create({ name: "Jane" });
    console.log("Jane's auto-generated ID:", jane.id);
    console.log("jane.name:", jane.name);
  })();
}
func()


