const resolvers = {
  Query: {
    async allPlayers(root, args, { models }) {
      return models.Player.findAll();
    },
    async player(root, { id }, { models }) {
      return models.Player.findByPk(id);
    }
  },
  Mutation: {
    createPlayer(root, { name, position }, { models }) {
      return models.Player.create({ name, position });
    }
  }
};

module.exports = resolvers;
