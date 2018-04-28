const { Command, Image } = require("../../Nitro");

class PixelateCommand extends Command {

    async run({ message, bot, reply, t }) {
        const buf = await message.fetchImage();
        const gm = Image.gm(buf)
            .size(async (err, size) => {
                gm.scale(`${3500 / size.width}%`)
                    .scale(size.width, size.height);
                return reply(await Image.out(gm));
            })
    }

    help = "Pixelate an image.";
    alias = "pixel"
}

module.exports = PixelateCommand;