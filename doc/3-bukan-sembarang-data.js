const employees = [
    {
    name: 'Fulan',
    email: 'fulan@dicoding.com',
    joinYear: 2020,
    },
];

/**
     * @TODO
     * lengkapi fungsi ini agar dapat menambahkan objek employee baru
     * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
     */

function addEmployee(name, email, joinYear) {
    /** From here : */
    const baru = {
    name : name,
    email: email,
    joinYear: joinYear,
    };
    employees.push(baru);
}
addEmployee('Yahya', 'yahya@gmail.com', '2024');
console.log(employees);