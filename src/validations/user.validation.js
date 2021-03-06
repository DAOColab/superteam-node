const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createUser = {
  body: Joi.object().keys({
    name: Joi.string(),
    // role: Joi.string().default('MEMBER'),
    discordId: Joi.string(),
    skills: Joi.array().items(Joi.string()),
    walletAddress: Joi.string().required(),
    daoXP: Joi.number().default(0),
    superXP: Joi.number().default(0),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    walletAddress: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      walletAddress: Joi.string(),
      superXP: Joi.number(),
      daoXP: Joi.number(),
      name: Joi.string(),
      skills: Joi.array().items(Joi.string()),
    })
    .min(1),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
