import {createStore} from 'redux'

const initialState = {
    name: '',
    category: '',
    authorFirst: '',
    authorLast: '',
    ingredients: [],
    instructions: [],
    rescipes: []
}
export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const UPDATE_AUTHOR_FIRST = 'UPDATE_AUTHOR_FIRST'
export const UPDATE_AUTHOR_LAST = 'UPDATE_AUTHOR_LAST'
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS'
export const ADD_INSTRUCTIONS = 'ADD_INSTRUCTIONS'
export const ADD_RECIPE = 'ADD_RECIPE'

function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_NAME:
            return {...state, name: action.payload}
        case UPDATE_CATEGORY:
            return {...state, category: action.payload}
        case UPDATE_AUTHOR_FIRST:
            return {...state, authorFirst: action.payload}
        case UPDATE_AUTHOR_LAST: 
            return {...state, authorLast: action.payload }
        case ADD_INGREDIENTS:
            const newIngredients = [...state.ingredients, action.payload]
            return {...state, ingredients: newIngredients}
        case ADD_INSTRUCTIONS: 
            const newInstructions = [...state.instructions, action.payload]
            return {...state, instructions: newInstructions}
        case ADD_RECIPE: 
            const {name, category, authorFirst, authorLast, ingredients, instructions} = state

            const recipe = {name, category, authorFirst, authorLast, ingredients, instructions}

            const newRecipes = [...state.rescipes, recipe]
            
            return {...state, rescipes: newRecipes}
                default: 
        return state
    }
}

export default createStore(reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
