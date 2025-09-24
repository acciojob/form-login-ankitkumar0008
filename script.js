function getFormvalue() {
    //Write your code here
let form = document.getElementById("form1");
	let fname = form.fname.value.trim();
	let lname = form.lname.value.trim();

	alert(`${fname} ${lname}`);
}
