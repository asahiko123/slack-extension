import Vue from "vue";
import App from "./App.vue";
chrome.extension.onMessage.addListener(() => {

    const userMessages = [
        {
            "type": "text",
            "text": "おはようございます" +"\n"+ "本日出社です。" +"\n"+ "■本日の業務" +"\n"+ "・" +"\n"+ "・"
        }
    ]

    const target = document.activeElement;
    console.log(target);
    const url = 'https://hooks.slack.com/services/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';
    const username = '勤怠報告'
    const icon = ':ghost:'
    const jsonData = {
        'username' : username,
        'icon_emoji' : icon,
        'text' : userMessages,
    }
    const payload = JSON.stringify(jsonData)

    const options = {
        'method' : 'post',
        'contentType' : 'application/json',
        'payload' : payload
    }

    new Vue({
        render: h => h(App)
    }).$mount(target.children[0])

    
})