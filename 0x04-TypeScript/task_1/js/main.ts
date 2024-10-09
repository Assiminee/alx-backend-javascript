interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher : printTeacherFunction = (firstName: string, lastName: string) : string => {
    return `${firstName.charAt(0)}. ${lastName}`;
}

interface StudentInterface {
    workOnHomework(): string;
    displayName(): string
}

interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClass;
}

class StudentClass implements StudentInterface {
    readonly firstName: string;
    readonly lastName: string;

    constructor(firstName: string, lastName: string)  {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework = () : string => {
        return 'Currently working';
    }

    displayName = () : string => {
        return this.firstName;
    }
}