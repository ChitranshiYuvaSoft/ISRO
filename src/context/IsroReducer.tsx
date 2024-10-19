import { ActionType, StateType } from "./types";

const IsroReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "SET_CENTRES_DATA":
      return {
        ...state,
        centresData: action.payload,
      };
    
      case "SET_LAUNCHERS_DATA":
        console.log(action.payload)
        return {
            ...state,
            launchersData: action.payload,
        }

        case "SET_SATELLITES_DATA":
            return {
                ...state,
                satellitesData: action.payload,
            }

            case "SET_SPACECRAFTS_DATA":
                return {
                    ...state,
                    spaceCraftsData: action.payload,
                }
        default:
      return state;
  }
};

export default IsroReducer;
