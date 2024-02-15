import User from '../models/user.js'
import Tank from '../models/tank.js'
import Fish from '../models/fish.js'

export const resolvers = {
    Query: {
        async getUsers(_){
            return await User.find();
        },
        async getUser(_, {ID}){
            return await User.findById(ID);
        },
        async getTanks(_){
            return await Tank.find();
        },
        async getTank(_, {ID}){
            return await Tank.findById(ID);
        },
        async getFishes(_){
            return await Fish.find();
        },
        async getFish(_, {ID}){
            return await Fish.findById(ID);
        }
    },
    User: {
        async tanks(parent){
            const owner = Tank.findOne(parent._id);
            console.log(owner);
            return owner
        }
    },
    Mutation: {
        async createUser(_, {userInput: {name, email, username,password}}){
            const createUser = new User({
                name: name,
                email: email,
                username: username,
                password: password
            });

            const res = await createUser.save(); // MongoDB saving
            
            return{
                id: res.id,
                ...res._doc
            }
        },
        async deleteUser(_, {ID}){
            const wasDeleted = (await User.deleteOne({_id: ID})).deletedCount; // 1 if something was deleted
            return wasDeleted;
        },
        async editUser(_, {ID, editUserInput: {name, password, tanks}}){
            const wasEdited = (await User.updateOne({_id: ID}, {name: name,password: password, tanks: tanks })).modifiedCount; // 1 if something was edited
            return wasEdited;
        },
        async createTank(_, {tankInput: {name, size, owner}}){
            const createTank = new Tank({
                name: name,
                size: size,
                owner: owner
            });

            const res = await createTank.save(); // MongoDB saving
            
            return{
                id: res.id,
                ...res._doc
            }
        },
        async createFish(_, {fishInput: {name, careLevel, temperament, diet, reefCompatibility, maxSize, minTankSize }}){
            const createFish = new Fish({
                name: name,
                careLevel: careLevel,
                temperament: temperament,
                diet: diet,
                reefCompatibility: reefCompatibility,
                maxSize: maxSize,
                minTankSize: minTankSize
            });

            const res = await createFish.save(); // MongoDB saving
            
            return{
                id: res.id,
                ...res._doc
            }
        }
    }
}
