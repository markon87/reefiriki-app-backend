import User from "../models/user.js";
import Tank from "../models/tank.js";
import Fish from "../models/fish.js";
import FishFamily from "../models/fishFamily.js";
import CompatibilityChart from "../models/compatibilityChart.js";

export const resolvers = {
  Query: {
    async getUsers(_) {
      return await User.find();
    },
    async getUser(_, { ID }) {
      return await User.findById(ID);
    },
    async getTanks(_) {
      return await Tank.find();
    },
    async getTank(_, { ID }) {
      return await Tank.findById(ID);
    },
    async getFishes(_) {
      return await Fish.find();
    },
    async getFish(_, { ID }) {
      return await Fish.findById(ID);
    },
    async getFishFamilies(_) {
      return await FishFamily.find();
    },
    async getFishFamily(_, { ID }) {
      return await FishFamily.findById(ID);
    },
    async getCompatibility(_, { ID }) {
      return await CompatibilityChart.findById(ID);
    },
  },
  User: {
    async tanks(parent) {
      //console.log("Parent ID:", parent._id);
      const owner = await Tank.find({ owner: parent._id });
      //console.log("Tanks:", owner);
      return owner;
    },
  },
  Fish: {
    async family(parent) {
      //console.log("Fish ID:", parent._id);
      const familyName = await FishFamily.findOne({ fish: parent._id });
      // console.log("Fish Family:", familyName);
      return familyName;
    },
  },
  Tank: {
    async stocking(parent) {
      //console.log("Tank ID:", parent._id);
      const fish = await Fish.find({ _id: { $in: parent.stocking } });
      //console.log("Fish Object:", fish);
      return fish;
    },
  },
  Mutation: {
    async createUser(_, { userInput: { name, email, username, password } }) {
      const createUser = new User({
        name: name,
        email: email,
        username: username,
        password: password,
      });

      const res = await createUser.save(); // MongoDB saving

      return {
        id: res.id,
        ...res._doc,
      };
    },
    async deleteUser(_, { ID }) {
      const wasDeleted = (await User.deleteOne({ _id: ID })).deletedCount; // 1 if something was deleted
      return wasDeleted;
    },
    async editUser(_, { ID, editUserInput: { name, password, tanks } }) {
      const wasEdited = (
        await User.updateOne(
          { _id: ID },
          { name: name, password: password, tanks: tanks }
        )
      ).modifiedCount; // 1 if something was edited
      return wasEdited;
    },
    async createTank(_, { tankInput: { name, size, owner, stocking } }) {
      const createTank = new Tank({
        name: name,
        size: size,
        owner: owner,
        stocking: stocking,
      });

      const res = await createTank.save(); // MongoDB saving

      return {
        id: res.id,
        ...res._doc,
      };
    },
    async createFish(
      _,
      {
        fishInput: {
          name,
          family,
          careLevel,
          temperament,
          diet,
          reefCompatibility,
          maxSize,
          minTankSize,
          imageUrl,
        },
      }
    ) {
      const createFish = new Fish({
        name: name,
        family: family,
        careLevel: careLevel,
        temperament: temperament,
        diet: diet,
        reefCompatibility: reefCompatibility,
        maxSize: maxSize,
        minTankSize: minTankSize,
        imageUrl: imageUrl,
      });

      const res = await createFish.save(); // MongoDB saving

      return {
        id: res.id,
        ...res._doc,
      };
    },
    async editFish(
      _,
      {
        ID,
        editFishInput: {
          name,
          family,
          careLevel,
          temperament,
          diet,
          reefCompatibility,
          maxSize,
          minTankSize,
          imageUrl,
        },
      }
    ) {
      const wasEdited = (
        await Fish.updateOne(
          { _id: ID },
          {
            name,
            family,
            careLevel,
            temperament,
            diet,
            reefCompatibility,
            maxSize,
            minTankSize,
            imageUrl,
          }
        )
      ).modifiedCount; // 1 if something was edited
      return wasEdited;
    },
    async createCompatibilityChart(
      _,
      {
        compatibilityChartInput: {
          family,
          compatible,
          notCompatible,
          cautionRequired,
        },
      }
    ) {
      const createCompatibilityChart = new CompatibilityChart({
        family: family,
        compatible: compatible,
        notCompatible: notCompatible,
        cautionRequired: cautionRequired,
      });

      const res = await createCompatibilityChart.save(); // MongoDB saving

      return {
        id: res.id,
        ...res._doc,
      };
    },
    async createFishFamily(_, { fishFamilyInput: { name } }) {
      const createFishFamily = new FishFamily({
        name: name,
      });

      const res = await createFishFamily.save(); // MongoDB saving

      return {
        id: res.id,
        ...res._doc,
      };
    },
    async editFishFamily(_, { ID, editFishFamilyInput: { name, fish } }) {
      const fishFamilyWasEdited = (
        await FishFamily.updateOne({ _id: ID }, { name: name, fish: fish })
      ).modifiedCount; // 1 if something was edited
      return fishFamilyWasEdited;
    },
  },
};
