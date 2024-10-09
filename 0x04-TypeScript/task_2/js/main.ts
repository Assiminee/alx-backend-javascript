interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workFromHome(): string {
        return 'Cannot work from home';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

const createEmployee = (salary: number | string) : Director | Teacher => {
    if (typeof salary === "number" && salary < 500) return new Teacher();
    return new Director();
}

const isDirector = (employee : Director | Teacher) : boolean => (employee instanceof Director);

const executeWork = (employee : Director | Teacher) : void => {
    if (employee instanceof Teacher) employee.workTeacherTasks();
    else employee.workDirectorTasks();
}

type Subjects = 'Math' | 'History';
const teachClass = (todayClass : Subjects) : string => {
    return `Teaching ${todayClass}`;
}

console.log(teachClass('History'));
