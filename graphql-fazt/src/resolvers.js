import User from './models/User';

export const resolvers = {
    Query: {
        hello: () => {
            return 'La consha de su madre';
        },
        greet(__, { name }, context) {
            console.log(context);
            return `Hello ${name}`;
        },
        async Users() {
            return await User.find();
        }
    },
    Mutation: {
        async createUser(__, { input }) {
            const newUser = new User(input);
            await newUser.save();
            return newUser;
        },
        async deleteUser(__, { _id }) {
            return await User.findByIdAndDelete(_id);
        },
        async updateUser(__, { _id, input }) {
            return await User.findByIdAndUpdate(_id, input, { new: true });
        }
    }
};