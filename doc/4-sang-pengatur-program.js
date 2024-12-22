function categorizeNumber(input) {
    /**
     * TODO:
     * Lengkapilah fungsi ini agar dapat menghasilkan output berupa kategori bilangan berdasarkan input yang diberikan.
     * Dengan ketentuan sebagai berikut:
     * 1. Jika input bukan number, bangkitkan (throw) error.
     * 2. Jika input adalah bilangan genap, kembalikan dengan nilai "Genap".
     * 3. Jika input adalah bilangan ganjil, kembalikan dengan nilai "Ganjil".
     * 4. Jika input adalah bilangan prima, kembalikan dengan nilai "Prima".
     * 5. Jika input adalah nol, kategorikan kembalikan dengan nilai "Nol".
     * 6. Jika input negatif, kembalikan dengan nilai "Negatif".
     */
}

  // Contoh
  console.log(categorizeNumber(15)); // Output: "Ganjil"
  console.log(categorizeNumber(12)); // Output: "Genap"
  console.log(categorizeNumber(17)); // Output: "Prima"
  console.log(categorizeNumber(0)); // Output: "Nol"
  console.log(categorizeNumber(-5)); // Output: "Negatif"

try {
    categorizeNumber('abc');
} catch (error) {
    console.log(error.message);
} // Output: "Input harus berupa bilangan bulat"

function checkGrades(grades) {
    for (let i = 0; i < grades.length; i++) {
    if (typeof grades[i] !== 'number') {
        throw new Error('Invalid input. Please provide an array of numbers.');
    }

    const grade = grades[i];
    let predicate;

    if (grade >= 90) {
        predicate = 'A';
    } else if (grade >= 80) {
        predicate = 'B';
    } else if (grade >= 70) {
        predicate = 'C';
    } else if (grade >= 60) {
        predicate = 'D';
    } else {
        predicate = 'E';
    }

    console.log(`Grade ${i + 1}: ${grade} (${predicate})`);
    }
}

try {
    const studentGrades = [95, 85, 65, 80, 70];
    checkGrades(studentGrades);
} catch (e) {
    console.error(e);
}