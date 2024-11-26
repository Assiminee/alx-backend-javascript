const stdin_fd = process.stdin;
const stdout_fd = process.stdout;

stdout_fd.write("Welcome to Holberton School, what is your name?\n");

stdin_fd.on('readable', () => {
    let chunk = stdin_fd.read();

    if (chunk !== null) {
        stdout_fd.write(`Your name is ${chunk}\n`);
    }
});

if (!stdin_fd.isTTY) {
    stdin_fd.on('end', () => {
        stdout_fd.write("This important software is now closing\n");
        stdout_fd.end();
    })
}