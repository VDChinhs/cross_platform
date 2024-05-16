export const convertDate = (chooseDate) => {
    var date = chooseDate.getDate();
    var month = chooseDate.getMonth() + 1;
    var year = chooseDate.getFullYear();
    var time = date + '/' + month + '/' + year
    return time
}