const cfg = require("../../config.json");

const Discord = require("discord.js");
const Hypixel = require('hypixel-api-reborn');
const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require("fs");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("updateroles")
        .setDescription("Update someone elses roles")
        .addUserOption(option => option.setName("user").setDescription("The username of the roles to update").setRequired(true)),

    /**
     * @param {Discord.CommandInteraction} interaction
     * @param {Discord.Client} client 
     * @param {Hypixel.Client} hypixel 
     */
    async execute(interaction, client, hypixel) {
        const user = interaction.options.getUser("user");
        const member = interaction.guild.members.fetch(user);
        fs.readFile(`data/${user.id}`, (err, data) => {
            if (err) {
                interaction.reply("That user hasn't linked their account!");
                return;
            }

            hypixel.getGuild("id", cfg.wristspasm_id).then(async (guild) => {
                hypixel.getPlayer(`${data}`).then(async (player) => {
                    let playerIsInGuild = false;
                    for (var i = 0; i < guild.members.length; i++) {
                        if (guild.members[i].uuid == player.uuid) {
                            playerIsInGuild = true;
                            break;
                        }
                    }
                    if (playerIsInGuild) {
                        member.roles.add(interaction.guild.roles.cache.get(cfg.guild_role_id)).catch(console.error);
                    } else {
                        if (member.roles.has(interaction.guild.roles.cache.get(cfg.guild_role_id))) member.roles.remove(interaction.guild.roles.cache.get(cfg.guild_role_id)).catch(console.error);
                    }

                    const bw = player.stats.bedwars.level/100;
                    const sw = player.stats.skywars.level/5;
                    const d = player.stats.duels.wins;

                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.bw3k0))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.bw3k0)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.bw2k9))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.bw2k9)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.bw2k8))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.bw2k8)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.bw2k7))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.bw2k7)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.bw2k6))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.bw2k6)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.bw2k5))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.bw2k5)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.bw2k4))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.bw2k4)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.bw2k3))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.bw2k3)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.bw2k2))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.bw2k2)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.bw2k1))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.bw2k1)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.bw2k0))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.bw2k0)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.bw1k9))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.bw1k9)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.bw1k8))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.bw1k8)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.bw1k7))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.bw1k7)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.bw1k6))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.bw1k6)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.bw1k5))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.bw1k5)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.bw1k4))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.bw1k4)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.bw1k3))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.bw1k3)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.bw1k2))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.bw1k2)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.bw1k1))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.bw1k1)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.bw1k0))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.bw1k0)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.bw900))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.bw900)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.bw800))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.bw800)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.bw700))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.bw700)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.bw600))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.bw600)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.bw500))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.bw500)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.bw400))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.bw400)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.bw300))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.bw300)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.bw200))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.bw200)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.bw100))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.bw100)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.bw000))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.bw000)).catch(console.error);

                    if (bw >= 30) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.bw3k0)).catch(console.error);
                    } else if (bw >= 29) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.bw2k9)).catch(console.error);
                    } else if (bw >= 28) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.bw2k8)).catch(console.error);
                    } else if (bw >= 27) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.bw2k7)).catch(console.error);
                    } else if (bw >= 26) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.bw2k6)).catch(console.error);
                    } else if (bw >= 25) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.bw2k5)).catch(console.error);
                    } else if (bw >= 24) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.bw2k4)).catch(console.error);
                    } else if (bw >= 23) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.bw2k3)).catch(console.error);
                    } else if (bw >= 22) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.bw2k2)).catch(console.error);
                    } else if (bw >= 21) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.bw2k1)).catch(console.error);
                    } else if (bw >= 20) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.bw2k0)).catch(console.error);
                    } else if (bw >= 19) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.bw1k9)).catch(console.error);
                    } else if (bw >= 18) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.bw1k8)).catch(console.error);
                    } else if (bw >= 17) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.bw1k7)).catch(console.error);
                    } else if (bw >= 16) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.bw1k6)).catch(console.error);
                    } else if (bw >= 15) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.bw1k5)).catch(console.error);
                    } else if (bw >= 14) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.bw1k4)).catch(console.error);
                    } else if (bw >= 13) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.bw1k3)).catch(console.error);
                    } else if (bw >= 12) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.bw1k2)).catch(console.error);
                    } else if (bw >= 11) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.bw1k1)).catch(console.error);
                    } else if (bw >= 10) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.bw1k0)).catch(console.error);
                    } else if (bw >= 9) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.bw900)).catch(console.error);
                    } else if (bw >= 8) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.bw800)).catch(console.error);
                    } else if (bw >= 7) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.bw700)).catch(console.error);
                    } else if (bw >= 6) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.bw600)).catch(console.error);
                    } else if (bw >= 5) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.bw500)).catch(console.error);
                    } else if (bw >= 5) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.bw400)).catch(console.error);
                    } else if (bw >= 3) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.bw300)).catch(console.error);
                    } else if (bw >= 2) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.bw200)).catch(console.error);
                    } else if (bw >= 1) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.bw100)).catch(console.error);
                    } else {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.bw000)).catch(console.error);
                    }

                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.sw00))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.sw00)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.sw05))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.sw05)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.sw10))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.sw10)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.sw15))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.sw15)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.sw20))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.sw20)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.sw25))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.sw25)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.sw30))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.sw30)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.sw35))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.sw35)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.sw40))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.sw40)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.sw45))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.sw45)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.sw50))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.sw50)).catch(console.error);

                    if (sw >= 10) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.sw50)).catch(console.error);
                    } else if (sw >= 9) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.sw45)).catch(console.error);
                    } else if (sw >= 8) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.sw40)).catch(console.error);
                    } else if (sw >= 7) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.sw35)).catch(console.error);
                    } else if (sw >= 6) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.sw30)).catch(console.error);
                    } else if (sw >= 5) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.sw25).catch(console.error));
                    } else if (sw >= 5) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.sw20)).catch(console.error);
                    } else if (sw >= 3) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.sw15)).catch(console.error);
                    } else if (sw >= 2) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.sw10)).catch(console.error);
                    } else if (sw >= 1) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.sw05)).catch(console.error);
                    } else {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.sw00)).catch(console.error);
                    }

                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.d100))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.d100)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.d200))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.d200)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.d500))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.d500)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.d1k))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.d1k)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.d2k))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.d2k)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.d4k))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.d4k)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.d10k))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.d10k)).catch(console.error);
                    if (member.roles.cache.has(interaction.guild.roles.cache.get(cfg.stat_roles.d20k))) await member.roles.remove(interaction.guild.roles.cache.get(cfg.stat_roles.d20k)).catch(console.error);

                    if (d >= 20000) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.d20k)).catch(console.error);
                    } else if (d >= 10000) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.d10k)).catch(console.error);
                    } else if (d >= 4000) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.d4k)).catch(console.error);
                    } else if (d >= 2000) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.d2k)).catch(console.error);
                    } else if (d >= 1000) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.d1k)).catch(console.error);
                    } else if (d >= 500) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.d500)).catch(console.error);
                    } else if (d >= 200) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.d200)).catch(console.error);
                    } else if (d >= 100) {
                        await member.roles.add(interaction.guild.roles.cache.get(cfg.stat_roles.d100)).catch(console.error);
                    }

                    interaction.reply("Updated roles!");
                    return;
                }).catch(err => {
                    console.error(err);
                    interaction.reply(`There was an error while running this command, Console Error: \`${err}\``);
                });
            }).catch(err => {
                console.error(err);
                interaction.reply(`There was an error while running this command, Console Error: \`${err}\``);
            });
        });
    }
}