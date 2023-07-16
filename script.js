// team: mahsa 
// project name : date
// sene karbar 
let userDate = new Date(2008,2,5);
// kam kardane tarikhe alan az sene karbar
let monthDate = Date.now() - userDate.getTime();
// ekhtelafe tarikh ro be form tarikh tabdil mikonim
let ageFormat = new Date(monthDate); 
// be tarikh kamel masalan 2004 tabdilesh mikonim  
let year = ageFormat.getFullYear();
//sene karbar ra hesab mikonum (az tarikh estandard kam mikonum 1970)
let age = Math.abs(year - 1970).toString();
console.log("age of user:" + age)
