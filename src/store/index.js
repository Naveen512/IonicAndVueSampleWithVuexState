import userModule from './modules/users';
import {createStore} from 'vuex';

const store = createStore({
    modules:{
        users: userModule
    }
});

export default store;
