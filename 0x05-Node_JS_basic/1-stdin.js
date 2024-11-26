const stdin_fd = process.stdin;
const stdout_fd = process.stdout;

stdout_fd.write("Welcome to Holberton School, what is your name?\n");

if (!stdin_fd.isTTY) {
    stdin_fd.on('readable', () => {
        let chunk;

        while ((chunk = stdin_fd.read()) !== null) {
            stdout_fd.write(`Your name is ${chunk}\n`);
        }
    });

    stdin_fd.on('end', () => {
        stdout_fd.write("This important software is now closing\n");
        stdout_fd.end();
    })
} else {
    stdin_fd.on('readable', () => {
        let chunk = stdin_fd.read();
        stdout_fd.write(`Your name is ${chunk}\n`);
    });
}