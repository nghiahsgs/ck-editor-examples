Vue.component('ck_editor_component',{
    data:function(){
        return {
            // loading: true,
        }
    },
    props:{content_html:String,name_textarea:String},
    template:`<template>
        <textarea :name="name_textarea">
            {{content_html}}
        </textarea>
    </template>`,
    methods:{

    },
    watch:{

    },
    mounted:function(){
        console.log(this.content_html)
        CKEDITOR.replace( this.name_textarea );
    },
})
