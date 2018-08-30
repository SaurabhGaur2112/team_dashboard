export default function(state = [], action){
    if(state){
        if(localStorage.getItem('member') != null){
            member = JSON.parse(localStorage.getItem('member'));
            state = member;
        }
    }

    switch (action.type){
        case 'MEMBER_ADD':
            var task = action.payload;
            var member = [];
            if(localStorage.getItem('member') == null){
                member.push(task);
                localStorage.setItem('member', JSON.stringify(member));
            } else {
                member = JSON.parse(localStorage.getItem('member'));
                member.push(task);
                localStorage.setItem('member', JSON.stringify(member));
            }
            return member;
            break;

        case 'MEMBER_DELETE':
            var list = JSON.parse(localStorage.getItem('member'));
            list.splice(action.payload, 1);
            localStorage.setItem('member', JSON.stringify(list));

            return list;
            break;
    }
    return state;
}