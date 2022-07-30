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
        id: "clock in",
        title: "出社の挨拶",
        contexts: ["all"],
    });
    chrome.contextMenus.create({
        parentId: parent,
        id: "lunch break",
        title: "お昼休憩いただきます。",
        contexts: ["all"]
    });
    chrome.contextMenus.create({
        parentId: parent,
        id: "clock out",
        title: "業務の終了",
        contexts: ["all"]
    })
})
/*メニュー選択後の処理 */

chrome.contextMenus.onClicked.addListener((info,tab) =>{
    console.log(info.menuItemId)
    switch(info.menuItemId){
        case "clock in":
            chrome.scripting.executeScript({
                target: { tabId: tab.id},
                function: clockIn,
            })
            break;

        case "lunch break":
            chrome.scripting.executeScript({
                target: { tabId: tab.id},
                function: resting,
            })
            break;
        case "clock out":
            chrome.scripting.executeScript({
                target: { tabId: tab.id},
                function: clockOut,
            })
            break;
    }
});

function clockIn(){


    const element = document.querySelectorAll("div.ql-editor")

    console.log(element)
    
    element[0].innerHTML= "おはようございます。" +"\n"+ "本日出社です。" +"\n"+ "■本日の業務" +"\n"+ "・" +"\n"+ "・" +"\n" + "本日もよろしくお願いいたします。"
    
}

function resting(){

    const element = document.querySelectorAll("div.ql-editor")

    console.log(element)
    
    element[0].innerHTML= "お昼休憩いただきます。"
   

}

function clockOut(){

    const element = document.querySelectorAll("div.ql-editor")

    console.log(element)
    
    element[0].innerHTML= "本日の業務を終了します。" +"\n"+ "■本日の業務" +"\n"+ "・" +"\n"+ "・" + "\n" + "お疲れ様でした。"

}


