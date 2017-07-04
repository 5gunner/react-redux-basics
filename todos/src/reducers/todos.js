const list = [
    {
        task: "Learn React",
        completed: false
    }
]

export default function (state = list, action) {
    switch (action.type) {
        case "ADD_TASK":
            return [
                ...state,
                {
                    task: action.payload.id,
                    completed: action.payload.completed
                }
            ];
            break;
    }
    return state;
}