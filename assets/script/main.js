import groupData from "./data.json" assert {type: 'json'};

const getGroups = (groupname) => {
    
// Data classified to group names   
    let filterName = "group";
    let filterByGroupName = groupData.reduce( (acc, item) => { 
        let groupName = item[filterName];
        if(!acc[groupName]){
        acc[groupName] = [];  
        }
        acc[groupName].push(item);
    return acc
    } , [])

//Classification process according to the desired group name
    const getGroup = (key) => {
        return {
            [key] : {
                members : filterByGroupName[key].map( (item) => item.type !== "assistant" ? item.name : null).filter( (item) => item !== null),
                asistant : filterByGroupName[key].map( (item) => item.type === "assistant" ? item.name : null).filter( (item) => item !== null)
                }
        }
    }

    let groupList =(groupname ? getGroup(groupname) : Object.keys(filterByGroupName).map((key) => getGroup(key)))

    console.log(groupList)

}

getGroups("IndianRed");
getGroups();



