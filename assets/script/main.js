import groupData from "./data.json" assert {type: 'json'};

const getGroups = () => {
    let classifiedByGroupName = groupData.reduce((groups, student) => {   
        let groupName = student["group"];  // Group names taken to classify student groups by group names  
        if(!groups[groupName]){  // If the group name is not in the groups object, add it 
            groups[groupName] = { // An object has been created to classify members according to their groups 
            members: [] ,  // An array has been created to classify members according to their groups 
            assistant: [], 
        }}
        groups[groupName] = { 
            members: [...groups[groupName].members, student.name],  // The name of the student is added to the members array of the group object
            assistant: student.type === "assistant" ? student.name : [] }; // If the student is an assistant, the name of the assistant is added to the assistant array of the group object
            return groups 
        }, {} )
    return classifiedByGroupName // The object that classifies the members according to their groups is returned
}

const getGroup = (groupName) => {
    let classifiedByGroupName = getGroups(); // The object that classifies the members according to their groups is taken
    let filterByGroupName = { // An object is created to filter the members by the desired group name.
        [groupName] : 
            classifiedByGroupName[groupName] // The members of the desired group name are taken from the object that classifies the members according to their groups.
        }
    return filterByGroupName // The object that filters the members by the desired group name is returned
}
console.log(getGroups());
console.log(getGroup("Orchid"));

