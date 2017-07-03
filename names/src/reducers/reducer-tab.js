import users from "./reducer-user";

export default function (state = { tabNumber: "tab0", selectedUser: users()[0]}, action) {
    switch (action.type) {
        case "TAB_SELECTED":
            return action.payload;
            break;
    }
    return state;
}