module.exports = function(sequelize, DataTypes) {
    var Friends = sequelize.define("Friends", {
        routeName: DataTypes.STRING,
        name: {type:DataTypes.STRING, allowNull: false},
        photo: {type:DataTypes.BOOLEAN, defaultValue: false},
        scores: {type: DataTypes.INTEGER, allowNull: false}
    }, {freezeTableName: true});
    return Friends;
  };