Vue.component('ck_editor_component',{
    data:function(){
        return {
            // loading: true,
        }
    },
    props:{content_html:String},
    template:`<template>
        <textarea name="editor1">
            {{content_html}}
        </textarea>
    </template>`,
    methods:{

    },
    watch:{

    },
    mounted:function(){
        console.log(this.content_html)
        CKEDITOR.replace( 'editor1' );
    },
})