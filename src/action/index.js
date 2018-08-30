export const memberAdd = (task) => {
    return {
        type: 'MEMBER_ADD',
        payload: task
    }
}

export const memberDelete = (task) => {
    return {
        type: 'MEMBER_DELETE',
        payload: task
    }
}