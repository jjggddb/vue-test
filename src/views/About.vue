<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{$t('base.name')}}</h2>
    <input v-model="_msg"/>
    <br>
    <el-button type="danger">{{new_msg}}</el-button>
  </div>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';

    interface funcType {
        (item: string, item_: string) : string
    }

    interface test {
        name: string,
        getValue() : string
    }

    let test_: test = {
        name: 'test_',
        getValue(): string {
            return this.name
        }
    }

    @Options({
        components: {
        },
        mixins: [],
        data() {
            return {
                msg: 'This is a msg',
                testName: 'this is test name'
            }
        },

        methods: {
            Add(x: number, y: number) : number {
                return x + y
            }
        },
        computed: {
            new_msg() : string {
                let msg : string = this.msg
                let num : number = this.Add(3,4)
                let name : string = test_.getValue()
                return msg + num + name
            }
        },
        mounted() : void {
            console.log(this.$transform('base.name'))
            console.log(this.$t('base.status'))
            const test = {
                name: 'kkk'
            }
            const test_ = {
                like: 'girls',
                '_like': 'girl'
            }
            let _test = this.$extend(test,test_)
            console.log(_test)
        }
    })

    export default class About extends Vue {
        msg !: string
        msg_ = 'this is new msg'

        myFunc: funcType = function (item: string, item_: string) : string {
          return `${item} , ${item_}`
        }

        get _msg() : string {
            return this.myFunc(this.msg, this.msg_)
        }
        set _msg(value: string) {
            const val : string[] = value.split(',')
            this.msg = val[0]
            this.msg_ = val[1]
        }
    }
</script>
