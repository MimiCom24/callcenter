const twilio = require("twilio");

class Twilio {
  phoneNumber = "+1 407 389 5124";
  accountSid = "AC6708076db8d42e1e6da0f42fb377aa69";
  tokenSid = "SK451aedd0a623fa29eb88d4eace365dbe";
  tokenSecret = "jjbrtJb0r1uN5uLlfVnUZGCNRfk8hg9X";
  phoneNumberSid = "PN13aa706599f48b2d139fe1cd3f597283";
  verify = "VAa52aeff18a37af5eed5bedaddef766a2";
  client;
  constructor() {
    this.client = twilio(this.tokenSid, this.tokenSecret, {
      accountSid: this.accountSid,
    });
  }
  getTwilio() {
    this.client;
  }

  async sendVerifyAsync(to, channel) {
    const data = await this.client.verify
      .services(this.verify)
      .verifications.create({
        to,
        channel,
      });
    console.log("sendVerify DATA: ", data);
    return data;
  }

  async verifyCodeAsync(to, code) {
    const data = await this.client.verify
      .services(this.verify)
      .verificationChecks.create({
        to,
        code,
      });
    return;
  }
}

const instance = new Twilio();
Object.freeze(instance);

module.exports = instance;
