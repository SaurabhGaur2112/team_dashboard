export const modalToggle = (task) => {
    return {
        type: 'MODAL_OPEN',
        payload: task
    }
}