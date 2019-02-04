const kbg = {
    name: "Kim BeumGoo",
    age: 20,
    gender: "male"
};

const resolvers = {
    Query: {
        person: () => kbg
    }
};

export default resolvers;