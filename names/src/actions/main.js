export const selectTab = (number, user = null) => {
    console.log(number, ": selected");
    return {
        type: "TAB_SELECTED",
        payload: {
            tabNumber: "tab" + number,
            selectedUser: user
        }
    }
}