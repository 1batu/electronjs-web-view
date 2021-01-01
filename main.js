const electron = require('electron');
const url = require('url');
const path = require('path');

const {app,BrowserWindow,Menu} = electron;

let mainWindow;

app.on("ready",() =>{

    mainWindow = new BrowserWindow({
        width:1280,
        height:980,
        title:'SAYEM'
    });
    mainWindow.loadURL(
        url.format({
            pathname:path.join(__dirname,"pages/index.html"),
            protocol:('file:'),
            slashes:true
        })
    );
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

const mainMenuTemplate = [
    {
        label:'İşlem',
        submenu:[
            {
                label:'Yenile',
                role:'reload'
            },
            {
                label:'Çıkış',
                acceleration:process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                role:'quit',
            }
        ]
    }
]

if (process.platform == 'darwin')
{
    mainMenuTemplate.unshift({
        label: app.getName(),
        role:'İşlem'
    })
}