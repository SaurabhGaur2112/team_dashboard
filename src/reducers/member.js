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
            var numberOfMember = 1;
            if(localStorage.getItem('totalMember') == null){
                var totalMember = numberOfMember;
                localStorage.setItem('totalMember', numberOfMember);
            } else {
                numberOfMember = localStorage.getItem('totalMember');
                var totalMember = parseInt(numberOfMember) + 1;
                localStorage.setItem('totalMember', totalMember);
            }

            task.id = totalMember;
            
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

            for (var i = 0; i < list.length; i++){
                if(list[i].id === action.payload){
                    list.splice(i, 1);
                }
            }
            localStorage.setItem('member', JSON.stringify(list));
            return list;
            break;
    }
    return state;
}