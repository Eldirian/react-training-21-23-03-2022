const a = [1, 2, 3];
const b = a; // Błąd ponieważ nie kopiujemy tablicy a referencję, więc a i b to dokładnie taka sama tablica!

const c = [...a]; // korzystając z operatora rozproszenia tworzymy kopię tablicy a

b === a; // true ponieważ wspóldzielą referencję
c === a; // false ponieważ jest kopią (nie wskazuje na oryginał)
