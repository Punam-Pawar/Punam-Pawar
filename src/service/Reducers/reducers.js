import{Add_To_Card, remove_To_Card} from '../Constant';
const initialState = {
    cardData: []
  };
  
  export default function cardItems(state = [], action) {
    switch (action.type) {
      case 'Add_To_Card':
        return [
          ...state,
          {cardData: action.data}
    ];


        case 'remove_To_Card':
            state.pop();
        return [
          ...state
    ];
      default:
        return state;
    }
  }
  