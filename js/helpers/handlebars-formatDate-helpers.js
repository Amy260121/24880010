Handlebars.registerHelper("formatDate", function (date){
    let options ={
        weekday: "short",
        year: "numeric",
        month: "numeric",
        day: "numeric",
        timeZoneName: "short"
    }
    let formatDate = new Date(date);
    return formatDate.toLocaleString("en-Us", options);
    

})