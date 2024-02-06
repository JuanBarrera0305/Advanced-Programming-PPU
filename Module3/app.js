const Koa = require ('koa');
const app = new Koa ();
app.use(async ctx => ctx.body = 'Trying to send a pull request')
app.listen(3000, () => console.log('Server started...'));

//localhost 2.0

//juanbarrera@Juans-Laptop PPUAPP % touch app.js
//juanbarrera@Juans-Laptop PPUAPP % ppwd
//zsh: command not found: ppwd
//juanbarrera@Juans-Laptop PPUAPP % pwd
///users/juanbarrera/documents/2024/SpringSemester/AdvancedPrograming/PPUAPP
//juanbarrera@Juans-Laptop PPUAPP % npm start

//> ppuapp@1.0.0 start
//> nodemon app.js