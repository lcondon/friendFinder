module.exports = function(sequelize, DataTypes) {
    var Friends = sequelize.define("Friends", {
        routeName: DataTypes.STRING,
        name: {type:DataTypes.STRING, allowNull: false},
        photo: {type:DataTypes.STRING, defaultValue: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c0ff296c4f785350505c2b5545ae7393&auto=format&fit=crop&w=1050&q=80'},
        scores: {type: DataTypes.INTEGER, allowNull: false}
    }, {freezeTableName: true});
    return Friends;
  };