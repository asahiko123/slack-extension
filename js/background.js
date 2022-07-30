/*コンテキストメニューの作成 */
chrome.runtime.onInstalled.addListener(function(details){
    const parent = chrome.contextMenus.create({

        title: 'slack-chat-templates',
        type: 'normal',
        contexts: ['all'],
        id: 'parent_id',
    });


    chrome.contextMenus.create({
        parentId: parent,
        id: "clock_in",
        title: "出社の挨拶",
        contexts: ["all"],
    });
    chrome.contextMenus.create({
        parentId: parent,
        id: "lunch_break",
        title: "お昼休憩いただきます。",
        contexts: ["all"]
    });
    chrome.contextMenus.create({
        parentId: parent,
        id: "clock_out",
        title: "業務の終了",
        contexts: ["all"]
    });
})
/*メニュー選択後の処理 */

chrome.contextMenus.onClicked.addListener((info,tab) =>{
    console.log(info.menuItemId)
    switch(info.menuItemId){
        case "clock_in":
            chrome.scripting.executeScript({
                target: { tabId: tab.id},
                function: clockIn,
            });
            break;

        case "lunch_break":
            chrome.scripting.executeScript({
                target: { tabId: tab.id},
                function: resting,
            });
            break;
        case "clock_out":
            chrome.scripting.executeScript({
                target: { tabId: tab.id},
                function: clockOut,
            });
            break;
    }
});

function clockIn(){

    console.log("aaaa");

    
}

function resting(){

}

function clockOut(){

}

