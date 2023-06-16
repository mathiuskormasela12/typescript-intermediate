class Car {
	public jalan(): void {
		console.log('Start Car');
	}
}
class Ship {
	public meluncur(): void {
		console.log('Start Ship');
	}
}

// Keyword extends for creating if-else conditional on generic
// jika T === mobil paka type nya itu jadi Car kllo bukan maka type nya itu Ship
type User<T> = T extends 'mobil' ? Car : Ship;

const car: User<'mobil'> = new Car();
// Car.action();

// Hasil nya true (karena number[] bagian dari [])
// type A = [] extends number[] ? true : false;

// Hasil nya false (karena [] bukan bagian dari number[])
// type B = number[] extends [] ? true : false;

type Random = 'satu' | 'dua' | 'tiga' | 1 | 2 | 3 | {name: string; age: number};

// Type nya adalah yg string aja yaitu hasilnya jadi 'satu' | 'dua' | 'tiga'
type RandomString = Extract<Random, string>;

// Type nya adalah yg number aja hasilnya jadi 1 | 2 | 3 |
type RandomNumber = Extract<Random, number>;

// Type nya adalah yg object aja yaitu hasilnya jadi {name: string; age: number}
type RandomObject = Extract<Random, {name: string}>;

// Exclude tipe data yg string yaitu hasilnya jadi 'satu' | 'dua' | 'tiga' |  {name: string; age: number};
type RandomTanpaString = Exclude<Random, string>;

// Exclude tanpa yg object. jdi hasilnya adalah  'satu' | 'dua' | 'tiga' | 1 | 2 | 3
type RandomTanpaObject = Exclude<Random, {name: string}>;

// Index Access Type
// type Person = {
// 	name: string;
// 	age: number;
// 	skills: {
// 		nodeJs: boolean;
// 		react: boolean;
// 	};
// };

// bisa interface atau types
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface Person {
	name: string;
	age: number;
	skills: {
		nodeJs: boolean;
		react: boolean;
	};
}
// Ambil yg skills nya aja
type PersonSkill = Person['skills'];

const mathius: PersonSkill = {
	nodeJs: true,
	react: true,
};
console.log(mathius.nodeJs);

// Ambil yg name nya aja, jdi tipe datanya string
type PersonName = Person['name'];
const mathius2: PersonName = 'Mathius';
console.log(mathius2);
