class Clazz {
    constructor(nazev) {
        this.nazev = nazev;
        this.studenti = [];
    }
}

class Student {
    constructor(jmeno, prijmeni, vek, nazevTridy) {
        this.jmeno = jmeno;
        this.prijmeni = prijmeni;
        this.vek = vek;
        this.nazevTridy = nazevTridy;
    }
}

const classA = new Clazz("classA");
const classB = new Clazz("classB");

for (let i = 0; i < 10; i++) {
    const jmeno = `Student${i+1}`;
    const prijmeni = `Prijmeni${i+1}`;
    const vek = i < 5 ? Math.floor(Math.random() * 18) + 10 : Math.floor(Math.random() * (30 - 18)) + 18;
    const trida = vek < 18 ? classA : classB;
    const student = new Student(jmeno, prijmeni, vek, trida.nazev);
    trida.studenti.push(student);
}

console.log("Studenti třídy A:");
classA.studenti.forEach(student => console.log(`${student.jmeno}, ${student.prijmeni}, ${student.nazevTridy}`));

console.log("\nStudenti třídy B:");
classB.studenti.forEach(student => console.log(`${student.jmeno}, ${student.prijmeni}, ${student.nazevTridy}`));