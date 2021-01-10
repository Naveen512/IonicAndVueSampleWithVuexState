import axios from 'axios';

const state = () => ({
    users:[]
});

const getters = {
    allUsers(state){
        return state.users;
    },
    userById(state){
        return (id) => {
            return state.users.find(u => u.id == id);
        }
    }
};

const actions = {
    async fetchUsers({commit}){
       var response =  await axios.get("https://jsonplaceholder.typicode.com/users");
       commit('saveAllUsers', response.data);
    },

    async addUser({commit}, payload){
        // since our rest api only support get
        // here we simply update the store state
        commit('addUser', payload);
    },

    async updateUser({commit}, payload){
         // since our rest api only support get
        // here we simply update the store state
        commit('updateUser', payload);
    },
    async deleteUser({commit}, id){
         // since our rest api only support get
        // here we simply update the store state
        commit('deleteUser', id);
    }
};

const mutations = {
    saveAllUsers(state, payload){

        state.users = payload;
    },
    addUser(state,payload){
        payload.id = (state.users.length + 1); // this line of code is fake , when we have save no nedd to write this line
        state.users.unshift(payload);
    },
    updateUser(state, payload){
        let filteredUsers = state.users.filter(u => u.id !== payload.id);
        filteredUsers.unshift(payload);
        state.users = filteredUsers;
    },
    deleteUser(state, id){
        state.users = state.users.filter(u => u.id !== id);
    }
};

export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}