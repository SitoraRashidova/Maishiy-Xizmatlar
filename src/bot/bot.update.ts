// import { Action, Ctx, Hears, On, Start, Update } from "nestjs-telegraf";
// import { BotService } from "./bot.service";
// import { Context } from "telegraf";

// @Update()
// export class BotUpdate {
//   constructor(private readonly botService: BotService) {}

//   @Start()
//   async onStart(@Ctx() ctx: Context) {
//     await this.botService.onStart(ctx);
//   }

//   @Hears("Ro'yxatdan o'tish")
//   async onHeartAuth(@Ctx() ctx: Context) {
//     await this.botService.onHeartAuth(ctx);
//   }

//   @Hears("Usta")
//   async onHearsWorker(@Ctx() ctx: Context) {
//     await this.botService.onHearsMaster(ctx);
//   }

//   @Hears("Mijoz")
//   async onHearsClient(@Ctx() ctx: Context) {
//     await this.botService.onHearsClient(ctx);
//   }

//   @Action(/job_+\d/)
//   async onClickJob(@Ctx() ctx: Context) {
//     await this.botService.onClickJob(ctx);
//   }

//   @On("contact")
//   async onContact(@Ctx() ctx: Context) {
//     await this.botService.onContact(ctx);
//   }

//   @On("location")
//   async onLocation(@Ctx() ctx: Context) {
//     await this.botService.onLocation(ctx);
//   }

//   @On("text")
//   async onText(@Ctx() ctx: Context) {
//     await this.botService.onText(ctx);
//   }

//   // @Start()
//   // async onStart(@Ctx() ctx: Context) {
//   //   await this.botService.start(ctx);
//   // }

//   // @Hears("Ro'yxatdan o'tish")
//   // async onRegister(@Ctx() ctx: Context) {
//   //   await this.botService.register(ctx);
//   // }

//   // @Hears("Mijoz")
//   // async onRegisterMijoz(@Ctx() ctx: Context) {
//   //   await this.botService.registerMijoz(ctx);
//   // }
// }
