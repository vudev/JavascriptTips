const students = [
	{
		name: "Nguyen Van Hai",
		age: 21,
		class: "K47"
	},
	{
		name: "Pham Thi Thuy",
		age: 20,
		class: "K47"
	}
];
// Map tao doi tuong moi dieu kien
var students_name = students.map((student,index, studens)=>{
		return student.name;
	});
console.log(students_name);
// Filter
var student_age = students.filter((student)=>{
		return student.age >20;	
	});
console.log(student_age);
//reduce
//examle: Tinh tuoi trung binh
// 0: gia tri bat dau ex: avg_age = 0
var avg_age = students.reduce((avg_age, student, index, students)=>{
	return avg_age += student.age;
}, 0)/ students.length;
console.log(avg_age);
