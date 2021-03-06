const initState = {
    posts: [
        { id: '1', title: 'One for all', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
        { id: '2', title: 'Life is WOW', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
        { id: '3', title: 'Never give up', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' }
    ]
}

const RootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default RootReducer;