import messageBox from "./index.vue";
import Vue from "vue";

export const MessageBox = (function () {
    let defaultProps = {
        // title: "信息",
        message: "加入购物车成功！",
    }

    let messageVue = Vue.extend(messageBox);

    return (options) => {
        for (var key in options) {
            if (options[key]) {
                defaultProps[key] = options[key];
            }
        }

        let messageVm = new messageVue({
            el: document.createElement("div"),
            data: {
                // title: defaultProps.title,
                message: defaultProps.message
            },
            methods: {

            },

        })
        setTimeout(() => {
            document.body.removeChild(messageVm.$mount().$el)
        }, 2000);

        document.body.appendChild(messageVm.$mount().$el);

    }



})()


